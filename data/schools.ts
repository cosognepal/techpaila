export type ProgramSlug =
  | "computer_engineering"
  | "civil_engineering"
  | "electrical_engineering"
  | "agriculture"
  | "hotel_management"
  | "animal_science"
  | "plant_science";

export const PROGRAM_OPTIONS: { value: ProgramSlug; label: string }[] = [
  { value: "computer_engineering", label: "Computer Engineering" },
  { value: "civil_engineering", label: "Civil Engineering" },
  { value: "electrical_engineering", label: "Electrical Engineering" },
  { value: "agriculture", label: "Agriculture" },
  { value: "hotel_management", label: "Hotel Management" },
  { value: "animal_science", label: "Animal Science" },
  { value: "plant_science", label: "Plant Science" }
];

export type School = {
  id: string;
  name: string;
  province: string;
  district: string;
  municipality: string;
  address: string;
  lat: number | null;
  lng: number | null;
  programs: ProgramSlug[];
  admission_requirements: string;
  course_structure: string;
  contact_phone: string;
  contact_email: string;
  official_link: string;
  last_updated: string;
  source: string;
};

export const schools: School[] = [
  {
    "id": "sch_001",
    "name": "Arjundhara Technical Secondary School",
    "province": "Koshi",
    "district": "Jhapa",
    "municipality": "Arjundhara",
    "address": "Bhadrapur, Jhapa",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000001",
    "contact_email": "info.sch001@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_001",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Jhapa"
  },
  {
    "id": "sch_002",
    "name": "Bhadrapur Technical Secondary School",
    "province": "Koshi",
    "district": "Jhapa",
    "municipality": "Bhadrapur",
    "address": "Bhadrapur, Jhapa",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering",
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000002",
    "contact_email": "info.sch002@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_002",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Jhapa"
  },
  {
    "id": "sch_003",
    "name": "Birtamod Technical Secondary School",
    "province": "Koshi",
    "district": "Jhapa",
    "municipality": "Birtamod",
    "address": "Bhadrapur, Jhapa",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000003",
    "contact_email": "info.sch003@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_003",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Jhapa"
  },
  {
    "id": "sch_004",
    "name": "Chulachuli Technical Secondary School",
    "province": "Koshi",
    "district": "Ilam",
    "municipality": "Chulachuli",
    "address": "Ilam, Ilam",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000004",
    "contact_email": "info.sch004@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_004",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Ilam"
  },
  {
    "id": "sch_005",
    "name": "Deumai Technical Secondary School",
    "province": "Koshi",
    "district": "Ilam",
    "municipality": "Deumai",
    "address": "Ilam, Ilam",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering",
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000005",
    "contact_email": "info.sch005@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_005",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Ilam"
  },
  {
    "id": "sch_006",
    "name": "Falelung Technical Secondary School",
    "province": "Koshi",
    "district": "Panchthar",
    "municipality": "Falelung",
    "address": "Phidim, Panchthar",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000006",
    "contact_email": "info.sch006@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_006",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Panchthar"
  },
  {
    "id": "sch_007",
    "name": "Aathrai Tribeni Technical Secondary School",
    "province": "Koshi",
    "district": "Taplejung",
    "municipality": "Aathrai Tribeni",
    "address": "Taplejung, Taplejung",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000007",
    "contact_email": "info.sch007@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_007",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Taplejung"
  },
  {
    "id": "sch_008",
    "name": "Belbari Technical Secondary School",
    "province": "Koshi",
    "district": "Morang",
    "municipality": "Belbari",
    "address": "Biratnagar, Morang",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000008",
    "contact_email": "info.sch008@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_008",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Morang"
  },
  {
    "id": "sch_009",
    "name": "Biratnagar Technical Secondary School",
    "province": "Koshi",
    "district": "Morang",
    "municipality": "Biratnagar",
    "address": "Biratnagar, Morang",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering",
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000009",
    "contact_email": "info.sch009@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_009",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Morang"
  },
  {
    "id": "sch_010",
    "name": "Aamchowk Technical Secondary School",
    "province": "Koshi",
    "district": "Bhojpur",
    "municipality": "Aamchowk",
    "address": "Bhojpur, Bhojpur",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000010",
    "contact_email": "info.sch010@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_010",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bhojpur"
  },
  {
    "id": "sch_011",
    "name": "Arun Technical Secondary School",
    "province": "Koshi",
    "district": "Bhojpur",
    "municipality": "Arun",
    "address": "Bhojpur, Bhojpur",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering",
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000011",
    "contact_email": "info.sch011@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_011",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bhojpur"
  },
  {
    "id": "sch_012",
    "name": "Bhojpur Technical Secondary School",
    "province": "Koshi",
    "district": "Bhojpur",
    "municipality": "Bhojpur",
    "address": "Bhojpur, Bhojpur",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000012",
    "contact_email": "info.sch012@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_012",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bhojpur"
  },
  {
    "id": "sch_013",
    "name": "Chaubise Technical Secondary School",
    "province": "Koshi",
    "district": "Dhankuta",
    "municipality": "Chaubise",
    "address": "Dhankuta, Dhankuta",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000013",
    "contact_email": "info.sch013@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_013",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dhankuta"
  },
  {
    "id": "sch_014",
    "name": "Aathrai Technical Secondary School",
    "province": "Koshi",
    "district": "Tehrathum",
    "municipality": "Aathrai",
    "address": "Myanglung, Tehrathum",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000014",
    "contact_email": "info.sch014@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_014",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Tehrathum"
  },
  {
    "id": "sch_015",
    "name": "Belhi Chapena Technical Secondary School",
    "province": "Madesh",
    "district": "Saptari",
    "municipality": "Belhi Chapena",
    "address": "Rajbiraj, Saptari",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000015",
    "contact_email": "info.sch015@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_015",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Saptari"
  },
  {
    "id": "sch_016",
    "name": "Arnama Technical Secondary School",
    "province": "Madesh",
    "district": "Siraha",
    "municipality": "Arnama",
    "address": "Siraha, Siraha",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000016",
    "contact_email": "info.sch016@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_016",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Siraha"
  },
  {
    "id": "sch_017",
    "name": "Belaka Technical Secondary School",
    "province": "Koshi",
    "district": "Udayapur",
    "municipality": "Belaka",
    "address": "Triyuga, Udayapur",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000017",
    "contact_email": "info.sch017@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_017",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Udayapur"
  },
  {
    "id": "sch_018",
    "name": "Chaudandigadi Technical Secondary School",
    "province": "Koshi",
    "district": "Udayapur",
    "municipality": "Chaudandigadi",
    "address": "Triyuga, Udayapur",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering",
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000018",
    "contact_email": "info.sch018@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_018",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Udayapur"
  },
  {
    "id": "sch_019",
    "name": "Aaurahi Technical Secondary School",
    "province": "Madesh",
    "district": "Dhanusa",
    "municipality": "Aaurahi",
    "address": "Janakpur, Dhanusa",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000019",
    "contact_email": "info.sch019@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_019",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dhanusa"
  },
  {
    "id": "sch_020",
    "name": "Bateshwor Technical Secondary School",
    "province": "Madesh",
    "district": "Dhanusa",
    "municipality": "Bateshwor",
    "address": "Janakpur, Dhanusa",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture",
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000020",
    "contact_email": "info.sch020@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_020",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dhanusa"
  },
  {
    "id": "sch_021",
    "name": "Aurahi Technical Secondary School",
    "province": "Madesh",
    "district": "Mahottari",
    "municipality": "Aurahi",
    "address": "Jaleshwar, Mahottari",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000021",
    "contact_email": "info.sch021@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_021",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Mahottari"
  },
  {
    "id": "sch_022",
    "name": "Balwa Technical Secondary School",
    "province": "Madesh",
    "district": "Mahottari",
    "municipality": "Balwa",
    "address": "Jaleshwar, Mahottari",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture",
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000022",
    "contact_email": "info.sch022@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_022",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Mahottari"
  },
  {
    "id": "sch_023",
    "name": "Bardibas Technical Secondary School",
    "province": "Madesh",
    "district": "Mahottari",
    "municipality": "Bardibas",
    "address": "Jaleshwar, Mahottari",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000023",
    "contact_email": "info.sch023@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_023",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Mahottari"
  },
  {
    "id": "sch_024",
    "name": "Bagmati Technical Secondary School",
    "province": "Madesh",
    "district": "Sarlahi",
    "municipality": "Bagmati",
    "address": "Malangwa, Sarlahi",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000024",
    "contact_email": "info.sch024@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_024",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Sarlahi"
  },
  {
    "id": "sch_025",
    "name": "Dudhouli Technical Secondary School",
    "province": "Bagmati",
    "district": "Sindhuli",
    "municipality": "Dudhouli",
    "address": "Kamalamai, Sindhuli",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000025",
    "contact_email": "info.sch025@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_025",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Sindhuli"
  },
  {
    "id": "sch_026",
    "name": "Ghyanglekh Technical Secondary School",
    "province": "Bagmati",
    "district": "Sindhuli",
    "municipality": "Ghyanglekh",
    "address": "Kamalamai, Sindhuli",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management",
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000026",
    "contact_email": "info.sch026@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_026",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Sindhuli"
  },
  {
    "id": "sch_027",
    "name": "Doraamba Technical Secondary School",
    "province": "Bagmati",
    "district": "Ramechhap",
    "municipality": "Doraamba",
    "address": "Manthali, Ramechhap",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000027",
    "contact_email": "info.sch027@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_027",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Ramechhap"
  },
  {
    "id": "sch_028",
    "name": "Baiteshwor Technical Secondary School",
    "province": "Bagmati",
    "district": "Dolakha",
    "municipality": "Baiteshwor",
    "address": "Bhimeshwar, Dolakha",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000028",
    "contact_email": "info.sch028@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_028",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dolakha"
  },
  {
    "id": "sch_029",
    "name": "Bhimeshwor Technical Secondary School",
    "province": "Bagmati",
    "district": "Dolakha",
    "municipality": "Bhimeshwor",
    "address": "Bhimeshwar, Dolakha",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management",
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000029",
    "contact_email": "info.sch029@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_029",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dolakha"
  },
  {
    "id": "sch_030",
    "name": "Bigu Technical Secondary School",
    "province": "Bagmati",
    "district": "Dolakha",
    "municipality": "Bigu",
    "address": "Bhimeshwar, Dolakha",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000030",
    "contact_email": "info.sch030@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_030",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dolakha"
  },
  {
    "id": "sch_031",
    "name": "Bhaktapur Technical Secondary School",
    "province": "Bagmati",
    "district": "Bhaktapur",
    "municipality": "Bhaktapur",
    "address": "Bhaktapur, Bhaktapur",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000031",
    "contact_email": "info.sch031@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_031",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bhaktapur"
  },
  {
    "id": "sch_032",
    "name": "Benighat Rorang Technical Secondary School",
    "province": "Bagmati",
    "district": "Dhading",
    "municipality": "Benighat Rorang",
    "address": "Nilkantha, Dhading",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000032",
    "contact_email": "info.sch032@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_032",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dhading"
  },
  {
    "id": "sch_033",
    "name": "Dhunibesi Technical Secondary School",
    "province": "Bagmati",
    "district": "Dhading",
    "municipality": "Dhunibesi",
    "address": "Nilkantha, Dhading",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management",
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000033",
    "contact_email": "info.sch033@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_033",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dhading"
  },
  {
    "id": "sch_034",
    "name": "Gajuri Technical Secondary School",
    "province": "Bagmati",
    "district": "Dhading",
    "municipality": "Gajuri",
    "address": "Nilkantha, Dhading",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000034",
    "contact_email": "info.sch034@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_034",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dhading"
  },
  {
    "id": "sch_035",
    "name": "Budhanilakantha Technical Secondary School",
    "province": "Bagmati",
    "district": "Kathmandu",
    "municipality": "Budhanilakantha",
    "address": "Kathmandu, Kathmandu",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000035",
    "contact_email": "info.sch035@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_035",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kathmandu"
  },
  {
    "id": "sch_036",
    "name": "Chandragiri Technical Secondary School",
    "province": "Bagmati",
    "district": "Kathmandu",
    "municipality": "Chandragiri",
    "address": "Kathmandu, Kathmandu",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management",
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000036",
    "contact_email": "info.sch036@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_036",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kathmandu"
  },
  {
    "id": "sch_037",
    "name": "Banepa Technical Secondary School",
    "province": "Bagmati",
    "district": "Kavrepalanchowk",
    "municipality": "Banepa",
    "address": "Dhulikhel, Kavrepalanchowk",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000037",
    "contact_email": "info.sch037@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_037",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kavrepalanchowk"
  },
  {
    "id": "sch_038",
    "name": "Bethanchowk Technical Secondary School",
    "province": "Bagmati",
    "district": "Kavrepalanchowk",
    "municipality": "Bethanchowk",
    "address": "Dhulikhel, Kavrepalanchowk",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management",
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000038",
    "contact_email": "info.sch038@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_038",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kavrepalanchowk"
  },
  {
    "id": "sch_039",
    "name": "Bagmati Technical Secondary School",
    "province": "Bagmati",
    "district": "Lalitpur",
    "municipality": "Bagmati",
    "address": "Lalitpur, Lalitpur",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000039",
    "contact_email": "info.sch039@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_039",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Lalitpur"
  },
  {
    "id": "sch_040",
    "name": "Godawari Technical Secondary School",
    "province": "Bagmati",
    "district": "Lalitpur",
    "municipality": "Godawari",
    "address": "Lalitpur, Lalitpur",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management",
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000040",
    "contact_email": "info.sch040@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_040",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Lalitpur"
  },
  {
    "id": "sch_041",
    "name": "Konjyosom Technical Secondary School",
    "province": "Bagmati",
    "district": "Lalitpur",
    "municipality": "Konjyosom",
    "address": "Lalitpur, Lalitpur",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000041",
    "contact_email": "info.sch041@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_041",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Lalitpur"
  },
  {
    "id": "sch_042",
    "name": "Belkotgadhi Technical Secondary School",
    "province": "Bagmati",
    "district": "Nuwakot",
    "municipality": "Belkotgadhi",
    "address": "Bidur, Nuwakot",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000042",
    "contact_email": "info.sch042@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_042",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Nuwakot"
  },
  {
    "id": "sch_043",
    "name": "Gosaikunda Technical Secondary School",
    "province": "Bagmati",
    "district": "Rasuwa",
    "municipality": "Gosaikunda",
    "address": "Dhunche, Rasuwa",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000043",
    "contact_email": "info.sch043@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_043",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Rasuwa"
  },
  {
    "id": "sch_044",
    "name": "Balefi Technical Secondary School",
    "province": "Bagmati",
    "district": "Sindhupalchok",
    "municipality": "Balefi",
    "address": "Chautara, Sindhupalchok",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000044",
    "contact_email": "info.sch044@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_044",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Sindhupalchok"
  },
  {
    "id": "sch_045",
    "name": "Barhabise Technical Secondary School",
    "province": "Bagmati",
    "district": "Sindhupalchok",
    "municipality": "Barhabise",
    "address": "Chautara, Sindhupalchok",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management",
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000045",
    "contact_email": "info.sch045@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_045",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Sindhupalchok"
  },
  {
    "id": "sch_046",
    "name": "Bahudaramai Technical Secondary School",
    "province": "Madesh",
    "district": "Parsa",
    "municipality": "Bahudaramai",
    "address": "Birganj, Parsa",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000046",
    "contact_email": "info.sch046@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_046",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Parsa"
  },
  {
    "id": "sch_047",
    "name": "Belwa Technical Secondary School",
    "province": "Madesh",
    "district": "Parsa",
    "municipality": "Belwa",
    "address": "Birganj, Parsa",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture",
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000047",
    "contact_email": "info.sch047@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_047",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Parsa"
  },
  {
    "id": "sch_048",
    "name": "Bharatpur Technical Secondary School",
    "province": "Bagmati",
    "district": "Chitwan",
    "municipality": "Bharatpur",
    "address": "Bharatpur, Chitwan",
    "lat": null,
    "lng": null,
    "programs": [
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000048",
    "contact_email": "info.sch048@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_048",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Chitwan"
  },
  {
    "id": "sch_049",
    "name": "Chitwan National Park Technical Secondary School",
    "province": "Bagmati",
    "district": "Chitwan",
    "municipality": "Chitwan National Park",
    "address": "Bharatpur, Chitwan",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management",
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000049",
    "contact_email": "info.sch049@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_049",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Chitwan"
  },
  {
    "id": "sch_050",
    "name": "Aarughat Technical Secondary School",
    "province": "Gandaki",
    "district": "Gorkha",
    "municipality": "Aarughat",
    "address": "Gorkha, Gorkha",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000050",
    "contact_email": "info.sch050@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_050",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Gorkha"
  },
  {
    "id": "sch_051",
    "name": "Ajirkot Technical Secondary School",
    "province": "Gandaki",
    "district": "Gorkha",
    "municipality": "Ajirkot",
    "address": "Gorkha, Gorkha",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science",
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000051",
    "contact_email": "info.sch051@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_051",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Gorkha"
  },
  {
    "id": "sch_052",
    "name": "Bhimsen Technical Secondary School",
    "province": "Gandaki",
    "district": "Gorkha",
    "municipality": "Bhimsen",
    "address": "Gorkha, Gorkha",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000052",
    "contact_email": "info.sch052@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_052",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Gorkha"
  },
  {
    "id": "sch_053",
    "name": "Annapurna Technical Secondary School",
    "province": "Gandaki",
    "district": "Kaski",
    "municipality": "Annapurna",
    "address": "Pokhara, Kaski",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000053",
    "contact_email": "info.sch053@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_053",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kaski"
  },
  {
    "id": "sch_054",
    "name": "Machhapuchchhre Technical Secondary School",
    "province": "Gandaki",
    "district": "Kaski",
    "municipality": "Machhapuchchhre",
    "address": "Pokhara, Kaski",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science",
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000054",
    "contact_email": "info.sch054@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_054",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kaski"
  },
  {
    "id": "sch_055",
    "name": "Madi Technical Secondary School",
    "province": "Gandaki",
    "district": "Kaski",
    "municipality": "Madi",
    "address": "Pokhara, Kaski",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000055",
    "contact_email": "info.sch055@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_055",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kaski"
  },
  {
    "id": "sch_056",
    "name": "Aandhikhola Technical Secondary School",
    "province": "Gandaki",
    "district": "Syangja",
    "municipality": "Aandhikhola",
    "address": "Putalibazar, Syangja",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000056",
    "contact_email": "info.sch056@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_056",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Syangja"
  },
  {
    "id": "sch_057",
    "name": "Arjunchaupri Technical Secondary School",
    "province": "Gandaki",
    "district": "Syangja",
    "municipality": "Arjunchaupri",
    "address": "Putalibazar, Syangja",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science",
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000057",
    "contact_email": "info.sch057@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_057",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Syangja"
  },
  {
    "id": "sch_058",
    "name": "Bhirkot Technical Secondary School",
    "province": "Gandaki",
    "district": "Syangja",
    "municipality": "Bhirkot",
    "address": "Putalibazar, Syangja",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000058",
    "contact_email": "info.sch058@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_058",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Syangja"
  },
  {
    "id": "sch_059",
    "name": "Chame Technical Secondary School",
    "province": "Gandaki",
    "district": "Manang",
    "municipality": "Chame",
    "address": "Chame, Manang",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000059",
    "contact_email": "info.sch059@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_059",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Manang"
  },
  {
    "id": "sch_060",
    "name": "Bardaghat Technical Secondary School",
    "province": "Gandaki",
    "district": "Nawalpur",
    "municipality": "Bardaghat",
    "address": "Kawasoti, Nawalpur",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000060",
    "contact_email": "info.sch060@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_060",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Nawalpur"
  },
  {
    "id": "sch_061",
    "name": "Binayee Technical Secondary School",
    "province": "Gandaki",
    "district": "Nawalpur",
    "municipality": "Binayee",
    "address": "Kawasoti, Nawalpur",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science",
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000061",
    "contact_email": "info.sch061@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_061",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Nawalpur"
  },
  {
    "id": "sch_062",
    "name": "Bardaghat Technical Secondary School",
    "province": "Lumbini",
    "district": "Parasi",
    "municipality": "Bardaghat",
    "address": "Parasi, Parasi",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000062",
    "contact_email": "info.sch062@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_062",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Parasi"
  },
  {
    "id": "sch_063",
    "name": " Technical Secondary School",
    "province": "Lumbini",
    "district": "Rupandehi",
    "municipality": "",
    "address": "Siddharthanagar, Rupandehi",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000063",
    "contact_email": "info.sch063@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_063",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Rupandehi"
  },
  {
    "id": "sch_064",
    "name": "Butwal Technical Secondary School",
    "province": "Lumbini",
    "district": "Rupandehi",
    "municipality": "Butwal",
    "address": "Siddharthanagar, Rupandehi",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science",
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000064",
    "contact_email": "info.sch064@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_064",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Rupandehi"
  },
  {
    "id": "sch_065",
    "name": "Devdaha Technical Secondary School",
    "province": "Lumbini",
    "district": "Rupandehi",
    "municipality": "Devdaha",
    "address": "Siddharthanagar, Rupandehi",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000065",
    "contact_email": "info.sch065@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_065",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Rupandehi"
  },
  {
    "id": "sch_066",
    "name": "Bhumikasthan Technical Secondary School",
    "province": "Lumbini",
    "district": "Arghakhanchi",
    "municipality": "Bhumikasthan",
    "address": "Sandhikharka, Arghakhanchi",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000066",
    "contact_email": "info.sch066@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_066",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Arghakhanchi"
  },
  {
    "id": "sch_067",
    "name": "Chattradev Technical Secondary School",
    "province": "Lumbini",
    "district": "Arghakhanchi",
    "municipality": "Chattradev",
    "address": "Sandhikharka, Arghakhanchi",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science",
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000067",
    "contact_email": "info.sch067@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_067",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Arghakhanchi"
  },
  {
    "id": "sch_068",
    "name": "Bagnaskali Technical Secondary School",
    "province": "Lumbini",
    "district": "Palpa",
    "municipality": "Bagnaskali",
    "address": "Tansen, Palpa",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000068",
    "contact_email": "info.sch068@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_068",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Palpa"
  },
  {
    "id": "sch_069",
    "name": "Badigad Technical Secondary School",
    "province": "Gandaki",
    "district": "Baglung",
    "municipality": "Badigad",
    "address": "Baglung, Baglung",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000069",
    "contact_email": "info.sch069@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_069",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Baglung"
  },
  {
    "id": "sch_070",
    "name": "Baglung Technical Secondary School",
    "province": "Gandaki",
    "district": "Baglung",
    "municipality": "Baglung",
    "address": "Baglung, Baglung",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science",
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000070",
    "contact_email": "info.sch070@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_070",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Baglung"
  },
  {
    "id": "sch_071",
    "name": "Annapurna Technical Secondary School",
    "province": "Gandaki",
    "district": "Myagdi",
    "municipality": "Annapurna",
    "address": "Beni, Myagdi",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000071",
    "contact_email": "info.sch071@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_071",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Myagdi"
  },
  {
    "id": "sch_072",
    "name": "Barhagaun Muktichhetra Technical Secondary School",
    "province": "Gandaki",
    "district": "Mustang",
    "municipality": "Barhagaun Muktichhetra",
    "address": "Jomsom, Mustang",
    "lat": null,
    "lng": null,
    "programs": [
      "hotel_management"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000072",
    "contact_email": "info.sch072@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_072",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Mustang"
  },
  {
    "id": "sch_073",
    "name": "Babai Technical Secondary School",
    "province": "Lumbini",
    "district": "Dang",
    "municipality": "Babai",
    "address": "Tribhuwannagar, Dang",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000073",
    "contact_email": "info.sch073@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_073",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dang"
  },
  {
    "id": "sch_074",
    "name": "Airawati Technical Secondary School",
    "province": "Lumbini",
    "district": "Pyuthan",
    "municipality": "Airawati",
    "address": "Pyuthan, Pyuthan",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000074",
    "contact_email": "info.sch074@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_074",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Pyuthan"
  },
  {
    "id": "sch_075",
    "name": "Duikholi Technical Secondary School",
    "province": "Lumbini",
    "district": "Rolpa",
    "municipality": "Duikholi",
    "address": "Liwang, Rolpa",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000075",
    "contact_email": "info.sch075@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_075",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Rolpa"
  },
  {
    "id": "sch_076",
    "name": "Lungri Technical Secondary School",
    "province": "Lumbini",
    "district": "Rolpa",
    "municipality": "Lungri",
    "address": "Liwang, Rolpa",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science",
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000076",
    "contact_email": "info.sch076@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_076",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Rolpa"
  },
  {
    "id": "sch_077",
    "name": "Madi Technical Secondary School",
    "province": "Lumbini",
    "district": "Rolpa",
    "municipality": "Madi",
    "address": "Liwang, Rolpa",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000077",
    "contact_email": "info.sch077@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_077",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Rolpa"
  },
  {
    "id": "sch_078",
    "name": "Aathbiskot Technical Secondary School",
    "province": "Lumbini",
    "district": "Eastern-Rukum",
    "municipality": "Aathbiskot",
    "address": "Rukumkot, Eastern-Rukum",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000078",
    "contact_email": "info.sch078@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_078",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Eastern-Rukum"
  },
  {
    "id": "sch_079",
    "name": "Banfikot Technical Secondary School",
    "province": "Lumbini",
    "district": "Eastern-Rukum",
    "municipality": "Banfikot",
    "address": "Rukumkot, Eastern-Rukum",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science",
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000079",
    "contact_email": "info.sch079@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_079",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Eastern-Rukum"
  },
  {
    "id": "sch_080",
    "name": "Aathbiskot Technical Secondary School",
    "province": "Karnali",
    "district": "Western-Rukum",
    "municipality": "Aathbiskot",
    "address": "Musikot, Western-Rukum",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000080",
    "contact_email": "info.sch080@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_080",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Western-Rukum"
  },
  {
    "id": "sch_081",
    "name": "Bagchaur Technical Secondary School",
    "province": "Karnali",
    "district": "Salyan",
    "municipality": "Bagchaur",
    "address": "Salyan, Salyan",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000081",
    "contact_email": "info.sch081@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_081",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Salyan"
  },
  {
    "id": "sch_082",
    "name": "Chharka Tangsong Technical Secondary School",
    "province": "Karnali",
    "district": "Dolpa",
    "municipality": "Chharka Tangsong",
    "address": "Dunai, Dolpa",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000082",
    "contact_email": "info.sch082@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_082",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dolpa"
  },
  {
    "id": "sch_083",
    "name": "Dolpo Buddha Technical Secondary School",
    "province": "Karnali",
    "district": "Dolpa",
    "municipality": "Dolpo Buddha",
    "address": "Dunai, Dolpa",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering",
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000083",
    "contact_email": "info.sch083@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_083",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dolpa"
  },
  {
    "id": "sch_084",
    "name": "Adanchuli Technical Secondary School",
    "province": "Karnali",
    "district": "Humla",
    "municipality": "Adanchuli",
    "address": "Simikot, Humla",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000084",
    "contact_email": "info.sch084@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_084",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Humla"
  },
  {
    "id": "sch_085",
    "name": "Chankheli Technical Secondary School",
    "province": "Karnali",
    "district": "Humla",
    "municipality": "Chankheli",
    "address": "Simikot, Humla",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering",
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000085",
    "contact_email": "info.sch085@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_085",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Humla"
  },
  {
    "id": "sch_086",
    "name": "Kalika Technical Secondary School",
    "province": "Karnali",
    "district": "Kalikot",
    "municipality": "Kalika",
    "address": "Manma, Kalikot",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000086",
    "contact_email": "info.sch086@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_086",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kalikot"
  },
  {
    "id": "sch_087",
    "name": "Chhayanath Rara Technical Secondary School",
    "province": "Karnali",
    "district": "Mugu",
    "municipality": "Chhayanath Rara",
    "address": "Gamghadi, Mugu",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000087",
    "contact_email": "info.sch087@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_087",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Mugu"
  },
  {
    "id": "sch_088",
    "name": "Khatyad Technical Secondary School",
    "province": "Karnali",
    "district": "Mugu",
    "municipality": "Khatyad",
    "address": "Gamghadi, Mugu",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering",
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000088",
    "contact_email": "info.sch088@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_088",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Mugu"
  },
  {
    "id": "sch_089",
    "name": "Mugum Karmarong Technical Secondary School",
    "province": "Karnali",
    "district": "Mugu",
    "municipality": "Mugum Karmarong",
    "address": "Gamghadi, Mugu",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000089",
    "contact_email": "info.sch089@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_089",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Mugu"
  },
  {
    "id": "sch_090",
    "name": "Baijanath Technical Secondary School",
    "province": "Lumbini",
    "district": "Banke",
    "municipality": "Baijanath",
    "address": "Nepalganj, Banke",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000090",
    "contact_email": "info.sch090@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_090",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Banke"
  },
  {
    "id": "sch_091",
    "name": "Duduwa Technical Secondary School",
    "province": "Lumbini",
    "district": "Banke",
    "municipality": "Duduwa",
    "address": "Nepalganj, Banke",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science",
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000091",
    "contact_email": "info.sch091@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_091",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Banke"
  },
  {
    "id": "sch_092",
    "name": "Janaki Technical Secondary School",
    "province": "Lumbini",
    "district": "Banke",
    "municipality": "Janaki",
    "address": "Nepalganj, Banke",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000092",
    "contact_email": "info.sch092@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_092",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Banke"
  },
  {
    "id": "sch_093",
    "name": "Badhaiyatal Technical Secondary School",
    "province": "Lumbini",
    "district": "Bardiya",
    "municipality": "Badhaiyatal",
    "address": "Gulariya, Bardiya",
    "lat": null,
    "lng": null,
    "programs": [
      "animal_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000093",
    "contact_email": "info.sch093@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_093",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bardiya"
  },
  {
    "id": "sch_094",
    "name": "Bansagadhi Technical Secondary School",
    "province": "Lumbini",
    "district": "Bardiya",
    "municipality": "Bansagadhi",
    "address": "Gulariya, Bardiya",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science",
      "civil_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000094",
    "contact_email": "info.sch094@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_094",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bardiya"
  },
  {
    "id": "sch_095",
    "name": "Barbardiya Technical Secondary School",
    "province": "Lumbini",
    "district": "Bardiya",
    "municipality": "Barbardiya",
    "address": "Gulariya, Bardiya",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000095",
    "contact_email": "info.sch095@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_095",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bardiya"
  },
  {
    "id": "sch_096",
    "name": "Barahtaal Technical Secondary School",
    "province": "Karnali",
    "district": "Surkhet",
    "municipality": "Barahtaal",
    "address": "Birendranagar, Surkhet",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000096",
    "contact_email": "info.sch096@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_096",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Surkhet"
  },
  {
    "id": "sch_097",
    "name": "Aathbis Nagarpalika Technical Secondary School",
    "province": "Karnali",
    "district": "Dailekh",
    "municipality": "Aathbis Nagarpalika",
    "address": "Narayan, Dailekh",
    "lat": null,
    "lng": null,
    "programs": [
      "plant_science"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000097",
    "contact_email": "info.sch097@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_097",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dailekh"
  },
  {
    "id": "sch_098",
    "name": "Bhagawatimai Technical Secondary School",
    "province": "Karnali",
    "district": "Dailekh",
    "municipality": "Bhagawatimai",
    "address": "Narayan, Dailekh",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering",
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000098",
    "contact_email": "info.sch098@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_098",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dailekh"
  },
  {
    "id": "sch_099",
    "name": "Bardagariya Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Kailali",
    "municipality": "Bardagariya",
    "address": "Dhangadhi, Kailali",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000099",
    "contact_email": "info.sch099@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_099",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kailali"
  },
  {
    "id": "sch_100",
    "name": "Bhajani Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Kailali",
    "municipality": "Bhajani",
    "address": "Dhangadhi, Kailali",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering",
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000100",
    "contact_email": "info.sch100@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_100",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kailali"
  },
  {
    "id": "sch_101",
    "name": "Adharsha Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Doti",
    "municipality": "Adharsha",
    "address": "Dipayal-Silgadhi, Doti",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000101",
    "contact_email": "info.sch101@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_101",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Doti"
  },
  {
    "id": "sch_102",
    "name": "Badikedar Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Doti",
    "municipality": "Badikedar",
    "address": "Dipayal-Silgadhi, Doti",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering",
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000102",
    "contact_email": "info.sch102@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_102",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Doti"
  },
  {
    "id": "sch_103",
    "name": "Bogtan Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Doti",
    "municipality": "Bogtan",
    "address": "Dipayal-Silgadhi, Doti",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000103",
    "contact_email": "info.sch103@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_103",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Doti"
  },
  {
    "id": "sch_104",
    "name": "Bithadchir Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Bajhang",
    "municipality": "Bithadchir",
    "address": "Jayaprithvi, Bajhang",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000104",
    "contact_email": "info.sch104@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_104",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bajhang"
  },
  {
    "id": "sch_105",
    "name": "Badimalika Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Bajura",
    "municipality": "Badimalika",
    "address": "Martadi, Bajura",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000105",
    "contact_email": "info.sch105@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_105",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Bajura"
  },
  {
    "id": "sch_106",
    "name": "Bedkot Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Kanchanpur",
    "municipality": "Bedkot",
    "address": "Bhimdatta, Kanchanpur",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000106",
    "contact_email": "info.sch106@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_106",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kanchanpur"
  },
  {
    "id": "sch_107",
    "name": "Belauri Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Kanchanpur",
    "municipality": "Belauri",
    "address": "Bhimdatta, Kanchanpur",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering",
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000107",
    "contact_email": "info.sch107@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_107",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Kanchanpur"
  },
  {
    "id": "sch_108",
    "name": "Ajaymeru Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Dadeldhura",
    "municipality": "Ajaymeru",
    "address": "Amargadhi, Dadeldhura",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000108",
    "contact_email": "info.sch108@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_108",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dadeldhura"
  },
  {
    "id": "sch_109",
    "name": "Alital Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Dadeldhura",
    "municipality": "Alital",
    "address": "Amargadhi, Dadeldhura",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering",
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000109",
    "contact_email": "info.sch109@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_109",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dadeldhura"
  },
  {
    "id": "sch_110",
    "name": "Amargadhi Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Dadeldhura",
    "municipality": "Amargadhi",
    "address": "Amargadhi, Dadeldhura",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000110",
    "contact_email": "info.sch110@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_110",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Dadeldhura"
  },
  {
    "id": "sch_111",
    "name": "Dasarathchand Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Baitadi",
    "municipality": "Dasarathchand",
    "address": "Dasharathchand, Baitadi",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000111",
    "contact_email": "info.sch111@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_111",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Baitadi"
  },
  {
    "id": "sch_112",
    "name": "Apihimal Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Darchula",
    "municipality": "Apihimal",
    "address": "Darchula, Darchula",
    "lat": null,
    "lng": null,
    "programs": [
      "computer_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000112",
    "contact_email": "info.sch112@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_112",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Darchula"
  },
  {
    "id": "sch_113",
    "name": "Byas Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Darchula",
    "municipality": "Byas",
    "address": "Darchula, Darchula",
    "lat": null,
    "lng": null,
    "programs": [
      "civil_engineering",
      "agriculture"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000113",
    "contact_email": "info.sch113@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_113",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Darchula"
  },
  {
    "id": "sch_114",
    "name": "Dunhu Technical Secondary School",
    "province": "Sudurpashchim",
    "district": "Darchula",
    "municipality": "Dunhu",
    "address": "Darchula, Darchula",
    "lat": null,
    "lng": null,
    "programs": [
      "electrical_engineering"
    ],
    "admission_requirements": "Completed Grade 8; entrance interview",
    "course_structure": "Grades 9–12, technical stream",
    "contact_phone": "+977-9810000114",
    "contact_email": "info.sch114@example.edu.np",
    "official_link": "https://example.edu.np/schools/sch_114",
    "last_updated": "2026-08-01",
    "source": "District Education Office, Darchula"
  }
];

export type SchoolFilter = {
  provinceName?: string | null;
  districtTitle?: string | null;
  municipalityName?: string | null;
  query?: string | null;
  program?: ProgramSlug | "" | null;
};

export function getSchools(filter: SchoolFilter = {}): School[] {
  const {
    provinceName = null,
    districtTitle = null,
    municipalityName = null,
    query = null,
    program = null,
  } = filter;

  const q = query?.trim().toLowerCase() ?? "";

  let list = schools;

  if (provinceName) {
    list = list.filter((s) => s.province.toLowerCase() === provinceName.toLowerCase());
  }
  if (districtTitle) {
    list = list.filter((s) => s.district.toLowerCase() === districtTitle.toLowerCase());
  }
  if (municipalityName) {
    list = list.filter(
      (s) => s.municipality.toLowerCase() === municipalityName.toLowerCase(),
    );
  }
  if (program) {
    list = list.filter((s) => s.programs.includes(program));
  }
  if (q) {
    list = list.filter((s) => s.name.toLowerCase().includes(q));
  }

  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}

export function programLabel(slug: string): string {
  return PROGRAM_OPTIONS.find((p) => p.value === slug)?.label ?? slug;
}
