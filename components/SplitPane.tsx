"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { useLocale } from "@/hooks/useLocale";

const MIN_PCT = 28;
const MAX_PCT = 78;
const STORAGE_KEY = "techpaila-split-pct-v2";

type SplitPaneProps = {
  left: ReactNode;
  right: ReactNode;
  defaultLeftPct?: number;
};

export default function SplitPane({
  left,
  right,
  defaultLeftPct = 70,
}: SplitPaneProps) {
  const { t } = useLocale();
  const [leftPct, setLeftPct] = useState(defaultLeftPct);
  const [dragging, setDragging] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const n = Number(saved);
        if (Number.isFinite(n) && n >= MIN_PCT && n <= MAX_PCT) {
          setLeftPct(n);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const clamp = useCallback((value: number) => {
    return Math.min(MAX_PCT, Math.max(MIN_PCT, value));
  }, []);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const el = shellRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0) return;
      const next = clamp(((clientX - rect.left) / rect.width) * 100);
      setLeftPct(next);
    },
    [clamp],
  );

  const onPointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const endDrag = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!dragging) return;
    setDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    try {
      localStorage.setItem(STORAGE_KEY, String(leftPct));
    } catch {
      // ignore
    }
    // Let Leaflet recalculate tile size after the pane width changes.
    window.dispatchEvent(new Event("resize"));
  };

  // Persist latest width when drag ends via leftPct in a small effect after dragging flips false
  useEffect(() => {
    if (dragging) return;
    try {
      localStorage.setItem(STORAGE_KEY, String(leftPct));
    } catch {
      // ignore
    }
  }, [dragging, leftPct]);

  return (
    <div
      ref={shellRef}
      className={`split-pane${dragging ? " is-dragging" : ""}`}
    >
      <div className="split-pane-left" style={{ width: `${leftPct}%` }}>
        {left}
      </div>

      <button
        type="button"
        className="split-handle"
        aria-label={t("map.resizeAria")}
        aria-orientation="vertical"
        aria-valuemin={MIN_PCT}
        aria-valuemax={MAX_PCT}
        aria-valuenow={Math.round(leftPct)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      />

      <div className="split-pane-right" style={{ width: `${100 - leftPct}%` }}>
        {right}
      </div>
    </div>
  );
}
