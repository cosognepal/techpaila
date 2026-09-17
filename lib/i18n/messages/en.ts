export type Messages = {
  nav: {
    homeAria: string;
    cleanView: string;
    showSchools: string;
    fullscreenEnter: string;
    fullscreenExit: string;
    language: string;
    english: string;
    nepali: string;
  };
  map: {
    loading: string;
    resizeAria: string;
    provinceFallback: string;
    municipalityFallback: string;
  };
  filters: {
    province: string;
    district: string;
    municipality: string;
    allProvinces: string;
    allDistricts: string;
    allMunicipalities: string;
    selectProvinceFirst: string;
    selectDistrictFirst: string;
  };
  schools: {
    titleIn: string;
    nepal: string;
    municipalityFallback: string;
    provinceFallback: string;
    search: string;
    searchPlaceholder: string;
    program: string;
    allPrograms: string;
    foundOne: string;
    foundMany: string;
    empty: string;
    programs: string;
    contact: string;
    website: string;
    facebook: string;
    googleMaps: string;
    lastUpdated: string;
    source: string;
    hideDetails: string;
    showDetails: string;
  };
  splash: {
    loadingAria: string;
  };
  programs: {
    agriculture: string;
    computer_engineering: string;
    civil_engineering: string;
    electrical_engineering: string;
    animal_science: string;
    plant_science: string;
    music: string;
  };
  recommend: {
    title: string;
    stepProgram: string;
    stepLocation: string;
    outsideNepal: string;
    locationDenied: string;
    districtLabel: string;
    programLabel: string;
    allDistricts: string;
    allPrograms: string;
    changeDistrict: string;
    tierLocal: string;
    tierNearby: string;
    noResults: string;
    noProgram: string;
  };
};

export const en: Messages = {
  nav: {
    homeAria: "TechPaila home",
    cleanView: "Clean view",
    showSchools: "Show schools",
    fullscreenEnter: "Enter fullscreen",
    fullscreenExit: "Exit fullscreen",
    language: "Language",
    english: "EN",
    nepali: "ने",
  },
  map: {
    loading: "Loading map…",
    resizeAria: "Resize map and school list",
    provinceFallback: "Province",
    municipalityFallback: "Municipality",
  },
  filters: {
    province: "Province",
    district: "District",
    municipality: "Municipality",
    allProvinces: "All provinces",
    allDistricts: "All districts",
    allMunicipalities: "All municipalities",
    selectProvinceFirst: "Select a province first",
    selectDistrictFirst: "Select a district first",
  },
  schools: {
    titleIn: "Schools in {scope}",
    nepal: "Nepal",
    municipalityFallback: "municipality",
    provinceFallback: "province",
    search: "Search",
    searchPlaceholder: "Search by school name",
    program: "Program",
    allPrograms: "All programs",
    foundOne: "Found {count} school",
    foundMany: "Found {count} schools",
    empty: "No schools match this search and filter selection.",
    programs: "Programs",
    contact: "Contact",
    website: "Website",
    facebook: "Facebook",
    googleMaps: "Google Maps",
    lastUpdated: "Last updated",
    source: "Source",
    hideDetails: "Hide details",
    showDetails: "Show more details",
  },
  splash: {
    loadingAria: "Loading TechPaila",
  },
  programs: {
    agriculture: "Agriculture",
    computer_engineering: "Computer Engineering",
    civil_engineering: "Civil Engineering",
    electrical_engineering: "Electrical Engineering",
    animal_science: "Animal Science",
    plant_science: "Plant Science",
    music: "Music",
  },
  recommend: {
    title: "Find a School",
    stepProgram: "What do you want to study?",
    stepLocation: "Detecting your location…",
    outsideNepal: "You're not in Nepal, but you can select a district to continue.",
    locationDenied: "Location access denied. Please select your district.",
    districtLabel: "Your district",
    programLabel: "Program",
    allDistricts: "Select district",
    allPrograms: "Select program",
    changeDistrict: "Change",
    tierLocal: "In your district",
    tierNearby: "Within 30 km",
    noResults: "No schools found offering this program in your area.",
    noProgram: "Select a program to get started.",
  },
};
