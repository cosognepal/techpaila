export default function AnimatedLogo() {
  return (
    <svg
      width="560"
      height="180"
      viewBox="0 0 560 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TechPaila logo"
    >
      <defs>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&display=swap');
          .wordmark { font-family: 'Rubik', 'Trebuchet MS', sans-serif; font-weight: 700; font-size: 74px; letter-spacing: -1.5px; }

          @keyframes tp-rise   { from { transform: scaleY(0); opacity: 0; } to { transform: scaleY(1); opacity: 1; } }
          @keyframes tp-step   { 0% { opacity: 0; transform: translateY(-12px); } 65% { opacity: 1; transform: translateY(2px); } 100% { opacity: 1; transform: translateY(0); } }
          @keyframes tp-fade   { from { opacity: 0; } to { opacity: 1; } }
          @keyframes tp-wmrise { from { transform: translateY(14px); } to { transform: translateY(0); } }

          .bar { transform-box: fill-box; transform-origin: center bottom; opacity: 0; }
          .b1  { animation: tp-rise .55s .05s cubic-bezier(.22,.68,.28,1) both; }
          .b2  { animation: tp-rise .55s .30s cubic-bezier(.22,.68,.28,1) both; }
          .b3  { animation: tp-rise .55s .55s cubic-bezier(.22,.68,.28,1) both; }

          .foot-anim { animation: tp-step .55s .98s cubic-bezier(.34,1.45,.5,1) both; }

          .wordmark { transform-box: fill-box; transform-origin: left center; animation: tp-wmrise .7s 1.35s cubic-bezier(.2,.7,.2,1) both; }
          .t-tech   { opacity: 0; animation: tp-fade .5s 1.35s ease-out both; }
          .t-paila  { opacity: 0; animation: tp-fade .6s 1.85s ease-out both; }

          @media (prefers-reduced-motion: reduce) {
            .bar, .foot-anim, .wordmark, .t-tech, .t-paila {
              animation: none !important; opacity: 1 !important; transform: none !important;
            }
          }
        `}</style>
        <g id="foot" fill="#FFFFFF">
          <ellipse cx="12" cy="20" rx="8.5" ry="11" />
          <ellipse cx="12" cy="38" rx="6" ry="8" />
          <circle cx="5.5" cy="8" r="2" />
          <circle cx="9.5" cy="5" r="2.3" />
          <circle cx="14" cy="5" r="2.3" />
          <circle cx="18" cy="8.5" r="2" />
        </g>
      </defs>

      {/* Icon: ascending steps */}
      <rect className="bar b1" x="22" y="98" width="34" height="46" rx="7" fill="#16457A" />
      <rect className="bar b2" x="66" y="68" width="34" height="76" rx="7" fill="#16457A" />
      <rect className="bar b3" x="110" y="38" width="34" height="106" rx="7" fill="#E8A33D" />

      {/* Footstep on the top (paila) step */}
      <g transform="translate(116,48) scale(0.92)">
        <use href="#foot" className="foot-anim" />
      </g>

      {/* Wordmark */}
      <text x="176" y="118" className="wordmark">
        <tspan className="t-tech" fill="#16457A">
          Tech
        </tspan>
        <tspan className="t-paila" fill="#E8A33D">
          Paila
        </tspan>
      </text>
    </svg>
  );
}
