export type School = {
  id: string;
  name: string;
  program: string;
  district: string;
  province: number;
};

export const schoolsByDistrict: Record<string, School[]> = {
  "JHAPA": [
    {
      "id": "jhapa-1",
      "name": "Jhapa Technical School 1",
      "program": "Electrical Engineering",
      "district": "JHAPA",
      "province": 1
    },
    {
      "id": "jhapa-2",
      "name": "Jhapa Technical School 2",
      "program": "Civil Engineering",
      "district": "JHAPA",
      "province": 1
    },
    {
      "id": "jhapa-3",
      "name": "Jhapa Technical School 3",
      "program": "Agriculture",
      "district": "JHAPA",
      "province": 1
    }
  ],
  "ILAM": [
    {
      "id": "ilam-1",
      "name": "Ilam Technical School 1",
      "program": "Electrical Engineering",
      "district": "ILAM",
      "province": 1
    },
    {
      "id": "ilam-2",
      "name": "Ilam Technical School 2",
      "program": "Civil Engineering",
      "district": "ILAM",
      "province": 1
    }
  ],
  "PANCHTHAR": [
    {
      "id": "panchthar-1",
      "name": "Panchthar Technical School 1",
      "program": "Electrical Engineering",
      "district": "PANCHTHAR",
      "province": 1
    }
  ],
  "TAPLEJUNG": [
    {
      "id": "taplejung-1",
      "name": "Taplejung Technical School 1",
      "program": "Electrical Engineering",
      "district": "TAPLEJUNG",
      "province": 1
    }
  ],
  "MORANG": [
    {
      "id": "morang-1",
      "name": "Morang Technical School 1",
      "program": "Electrical Engineering",
      "district": "MORANG",
      "province": 1
    },
    {
      "id": "morang-2",
      "name": "Morang Technical School 2",
      "program": "Civil Engineering",
      "district": "MORANG",
      "province": 1
    }
  ],
  "SUNSARI": [],
  "BHOJPUR": [
    {
      "id": "bhojpur-1",
      "name": "Bhojpur Technical School 1",
      "program": "Electrical Engineering",
      "district": "BHOJPUR",
      "province": 1
    },
    {
      "id": "bhojpur-2",
      "name": "Bhojpur Technical School 2",
      "program": "Civil Engineering",
      "district": "BHOJPUR",
      "province": 1
    },
    {
      "id": "bhojpur-3",
      "name": "Bhojpur Technical School 3",
      "program": "Agriculture",
      "district": "BHOJPUR",
      "province": 1
    }
  ],
  "DHANKUTA": [
    {
      "id": "dhankuta-1",
      "name": "Dhankuta Technical School 1",
      "program": "Electrical Engineering",
      "district": "DHANKUTA",
      "province": 1
    }
  ],
  "TEHRATHUM": [
    {
      "id": "tehrathum-1",
      "name": "Tehrathum Technical School 1",
      "program": "Electrical Engineering",
      "district": "TEHRATHUM",
      "province": 1
    }
  ],
  "SANKHUWASABHA": [],
  "SAPTARI": [
    {
      "id": "saptari-1",
      "name": "Saptari Technical School 1",
      "program": "Civil Engineering",
      "district": "SAPTARI",
      "province": 2
    }
  ],
  "SIRAHA": [
    {
      "id": "siraha-1",
      "name": "Siraha Technical School 1",
      "program": "Civil Engineering",
      "district": "SIRAHA",
      "province": 2
    }
  ],
  "UDAYAPUR": [
    {
      "id": "udayapur-1",
      "name": "Udayapur Technical School 1",
      "program": "Electrical Engineering",
      "district": "UDAYAPUR",
      "province": 1
    },
    {
      "id": "udayapur-2",
      "name": "Udayapur Technical School 2",
      "program": "Civil Engineering",
      "district": "UDAYAPUR",
      "province": 1
    }
  ],
  "KHOTANG": [],
  "OKHALDHUNGA": [],
  "SOLUKHUMBU": [],
  "DHANUSA": [
    {
      "id": "dhanusa-1",
      "name": "Dhanusa Technical School 1",
      "program": "Civil Engineering",
      "district": "DHANUSA",
      "province": 2
    },
    {
      "id": "dhanusa-2",
      "name": "Dhanusa Technical School 2",
      "program": "Agriculture",
      "district": "DHANUSA",
      "province": 2
    }
  ],
  "MAHOTTARI": [
    {
      "id": "mahottari-1",
      "name": "Mahottari Technical School 1",
      "program": "Civil Engineering",
      "district": "MAHOTTARI",
      "province": 2
    },
    {
      "id": "mahottari-2",
      "name": "Mahottari Technical School 2",
      "program": "Agriculture",
      "district": "MAHOTTARI",
      "province": 2
    },
    {
      "id": "mahottari-3",
      "name": "Mahottari Technical School 3",
      "program": "Hotel Management",
      "district": "MAHOTTARI",
      "province": 2
    }
  ],
  "SARLAHI": [
    {
      "id": "sarlahi-1",
      "name": "Sarlahi Technical School 1",
      "program": "Civil Engineering",
      "district": "SARLAHI",
      "province": 2
    }
  ],
  "SINDHULI": [
    {
      "id": "sindhuli-1",
      "name": "Sindhuli Technical School 1",
      "program": "Agriculture",
      "district": "SINDHULI",
      "province": 3
    },
    {
      "id": "sindhuli-2",
      "name": "Sindhuli Technical School 2",
      "program": "Hotel Management",
      "district": "SINDHULI",
      "province": 3
    }
  ],
  "RAMECHHAP": [
    {
      "id": "ramechhap-1",
      "name": "Ramechhap Technical School 1",
      "program": "Agriculture",
      "district": "RAMECHHAP",
      "province": 3
    }
  ],
  "DOLAKHA": [
    {
      "id": "dolakha-1",
      "name": "Dolakha Technical School 1",
      "program": "Agriculture",
      "district": "DOLAKHA",
      "province": 3
    },
    {
      "id": "dolakha-2",
      "name": "Dolakha Technical School 2",
      "program": "Hotel Management",
      "district": "DOLAKHA",
      "province": 3
    },
    {
      "id": "dolakha-3",
      "name": "Dolakha Technical School 3",
      "program": "Animal Science",
      "district": "DOLAKHA",
      "province": 3
    }
  ],
  "BHAKTAPUR": [
    {
      "id": "bhaktapur-1",
      "name": "Bhaktapur Technical School 1",
      "program": "Agriculture",
      "district": "BHAKTAPUR",
      "province": 3
    }
  ],
  "DHADING": [
    {
      "id": "dhading-1",
      "name": "Dhading Technical School 1",
      "program": "Agriculture",
      "district": "DHADING",
      "province": 3
    },
    {
      "id": "dhading-2",
      "name": "Dhading Technical School 2",
      "program": "Hotel Management",
      "district": "DHADING",
      "province": 3
    },
    {
      "id": "dhading-3",
      "name": "Dhading Technical School 3",
      "program": "Animal Science",
      "district": "DHADING",
      "province": 3
    }
  ],
  "KATHMANDU": [
    {
      "id": "kathmandu-1",
      "name": "Kathmandu Technical School 1",
      "program": "Agriculture",
      "district": "KATHMANDU",
      "province": 3
    },
    {
      "id": "kathmandu-2",
      "name": "Kathmandu Technical School 2",
      "program": "Hotel Management",
      "district": "KATHMANDU",
      "province": 3
    }
  ],
  "KAVREPALANCHOWK": [
    {
      "id": "kavrepalanchowk-1",
      "name": "Kavrepalanchowk Technical School 1",
      "program": "Agriculture",
      "district": "KAVREPALANCHOWK",
      "province": 3
    },
    {
      "id": "kavrepalanchowk-2",
      "name": "Kavrepalanchowk Technical School 2",
      "program": "Hotel Management",
      "district": "KAVREPALANCHOWK",
      "province": 3
    }
  ],
  "LALITPUR": [
    {
      "id": "lalitpur-1",
      "name": "Lalitpur Technical School 1",
      "program": "Agriculture",
      "district": "LALITPUR",
      "province": 3
    },
    {
      "id": "lalitpur-2",
      "name": "Lalitpur Technical School 2",
      "program": "Hotel Management",
      "district": "LALITPUR",
      "province": 3
    },
    {
      "id": "lalitpur-3",
      "name": "Lalitpur Technical School 3",
      "program": "Animal Science",
      "district": "LALITPUR",
      "province": 3
    }
  ],
  "NUWAKOT": [
    {
      "id": "nuwakot-1",
      "name": "Nuwakot Technical School 1",
      "program": "Agriculture",
      "district": "NUWAKOT",
      "province": 3
    }
  ],
  "RASUWA": [
    {
      "id": "rasuwa-1",
      "name": "Rasuwa Technical School 1",
      "program": "Agriculture",
      "district": "RASUWA",
      "province": 3
    }
  ],
  "SINDHUPALCHOK": [
    {
      "id": "sindhupalchok-1",
      "name": "Sindhupalchok Technical School 1",
      "program": "Agriculture",
      "district": "SINDHUPALCHOK",
      "province": 3
    },
    {
      "id": "sindhupalchok-2",
      "name": "Sindhupalchok Technical School 2",
      "program": "Hotel Management",
      "district": "SINDHUPALCHOK",
      "province": 3
    }
  ],
  "BARA": [],
  "PARSA": [
    {
      "id": "parsa-1",
      "name": "Parsa Technical School 1",
      "program": "Civil Engineering",
      "district": "PARSA",
      "province": 2
    },
    {
      "id": "parsa-2",
      "name": "Parsa Technical School 2",
      "program": "Agriculture",
      "district": "PARSA",
      "province": 2
    }
  ],
  "RAUTAHAT": [],
  "CHITWAN": [
    {
      "id": "chitwan-1",
      "name": "Chitwan Technical School 1",
      "program": "Agriculture",
      "district": "CHITWAN",
      "province": 3
    },
    {
      "id": "chitwan-2",
      "name": "Chitwan Technical School 2",
      "program": "Hotel Management",
      "district": "CHITWAN",
      "province": 3
    }
  ],
  "MAKWANPUR": [],
  "GORKHA": [
    {
      "id": "gorkha-1",
      "name": "Gorkha Technical School 1",
      "program": "Hotel Management",
      "district": "GORKHA",
      "province": 4
    },
    {
      "id": "gorkha-2",
      "name": "Gorkha Technical School 2",
      "program": "Animal Science",
      "district": "GORKHA",
      "province": 4
    },
    {
      "id": "gorkha-3",
      "name": "Gorkha Technical School 3",
      "program": "Plant Science",
      "district": "GORKHA",
      "province": 4
    }
  ],
  "KASKI": [
    {
      "id": "kaski-1",
      "name": "Kaski Technical School 1",
      "program": "Hotel Management",
      "district": "KASKI",
      "province": 4
    },
    {
      "id": "kaski-2",
      "name": "Kaski Technical School 2",
      "program": "Animal Science",
      "district": "KASKI",
      "province": 4
    },
    {
      "id": "kaski-3",
      "name": "Kaski Technical School 3",
      "program": "Plant Science",
      "district": "KASKI",
      "province": 4
    }
  ],
  "LAMJUNG": [],
  "SYANGJA": [
    {
      "id": "syangja-1",
      "name": "Syangja Technical School 1",
      "program": "Hotel Management",
      "district": "SYANGJA",
      "province": 4
    },
    {
      "id": "syangja-2",
      "name": "Syangja Technical School 2",
      "program": "Animal Science",
      "district": "SYANGJA",
      "province": 4
    },
    {
      "id": "syangja-3",
      "name": "Syangja Technical School 3",
      "program": "Plant Science",
      "district": "SYANGJA",
      "province": 4
    }
  ],
  "TANAHU": [],
  "MANANG": [
    {
      "id": "manang-1",
      "name": "Manang Technical School 1",
      "program": "Hotel Management",
      "district": "MANANG",
      "province": 4
    }
  ],
  "KAPILVASTU": [],
  "NAWALPUR": [
    {
      "id": "nawalpur-1",
      "name": "Nawalpur Technical School 1",
      "program": "Hotel Management",
      "district": "NAWALPUR",
      "province": 4
    },
    {
      "id": "nawalpur-2",
      "name": "Nawalpur Technical School 2",
      "program": "Animal Science",
      "district": "NAWALPUR",
      "province": 4
    }
  ],
  "PARASI": [
    {
      "id": "parasi-1",
      "name": "Parasi Technical School 1",
      "program": "Animal Science",
      "district": "PARASI",
      "province": 5
    }
  ],
  "RUPANDEHI": [
    {
      "id": "rupandehi-1",
      "name": "Rupandehi Technical School 1",
      "program": "Animal Science",
      "district": "RUPANDEHI",
      "province": 5
    },
    {
      "id": "rupandehi-2",
      "name": "Rupandehi Technical School 2",
      "program": "Plant Science",
      "district": "RUPANDEHI",
      "province": 5
    },
    {
      "id": "rupandehi-3",
      "name": "Rupandehi Technical School 3",
      "program": "Computer Engineering",
      "district": "RUPANDEHI",
      "province": 5
    }
  ],
  "ARGHAKHANCHI": [
    {
      "id": "arghakhanchi-1",
      "name": "Arghakhanchi Technical School 1",
      "program": "Animal Science",
      "district": "ARGHAKHANCHI",
      "province": 5
    },
    {
      "id": "arghakhanchi-2",
      "name": "Arghakhanchi Technical School 2",
      "program": "Plant Science",
      "district": "ARGHAKHANCHI",
      "province": 5
    }
  ],
  "GULMI": [],
  "PALPA": [
    {
      "id": "palpa-1",
      "name": "Palpa Technical School 1",
      "program": "Animal Science",
      "district": "PALPA",
      "province": 5
    }
  ],
  "BAGLUNG": [
    {
      "id": "baglung-1",
      "name": "Baglung Technical School 1",
      "program": "Hotel Management",
      "district": "BAGLUNG",
      "province": 4
    },
    {
      "id": "baglung-2",
      "name": "Baglung Technical School 2",
      "program": "Animal Science",
      "district": "BAGLUNG",
      "province": 4
    }
  ],
  "MYAGDI": [
    {
      "id": "myagdi-1",
      "name": "Myagdi Technical School 1",
      "program": "Hotel Management",
      "district": "MYAGDI",
      "province": 4
    }
  ],
  "PARBAT": [],
  "MUSTANG": [
    {
      "id": "mustang-1",
      "name": "Mustang Technical School 1",
      "program": "Hotel Management",
      "district": "MUSTANG",
      "province": 4
    }
  ],
  "DANG": [
    {
      "id": "dang-1",
      "name": "Dang Technical School 1",
      "program": "Animal Science",
      "district": "DANG",
      "province": 5
    }
  ],
  "PYUTHAN": [
    {
      "id": "pyuthan-1",
      "name": "Pyuthan Technical School 1",
      "program": "Animal Science",
      "district": "PYUTHAN",
      "province": 5
    }
  ],
  "ROLPA": [
    {
      "id": "rolpa-1",
      "name": "Rolpa Technical School 1",
      "program": "Animal Science",
      "district": "ROLPA",
      "province": 5
    },
    {
      "id": "rolpa-2",
      "name": "Rolpa Technical School 2",
      "program": "Plant Science",
      "district": "ROLPA",
      "province": 5
    },
    {
      "id": "rolpa-3",
      "name": "Rolpa Technical School 3",
      "program": "Computer Engineering",
      "district": "ROLPA",
      "province": 5
    }
  ],
  "EASTERN RUKUM": [
    {
      "id": "eastern rukum-1",
      "name": "Eastern rukum Technical School 1",
      "program": "Animal Science",
      "district": "EASTERN RUKUM",
      "province": 5
    },
    {
      "id": "eastern rukum-2",
      "name": "Eastern rukum Technical School 2",
      "program": "Plant Science",
      "district": "EASTERN RUKUM",
      "province": 5
    }
  ],
  "WESTERN RUKUM": [
    {
      "id": "western rukum-1",
      "name": "Western rukum Technical School 1",
      "program": "Plant Science",
      "district": "WESTERN RUKUM",
      "province": 6
    }
  ],
  "SALYAN": [
    {
      "id": "salyan-1",
      "name": "Salyan Technical School 1",
      "program": "Plant Science",
      "district": "SALYAN",
      "province": 6
    }
  ],
  "DOLPA": [
    {
      "id": "dolpa-1",
      "name": "Dolpa Technical School 1",
      "program": "Plant Science",
      "district": "DOLPA",
      "province": 6
    },
    {
      "id": "dolpa-2",
      "name": "Dolpa Technical School 2",
      "program": "Computer Engineering",
      "district": "DOLPA",
      "province": 6
    }
  ],
  "HUMLA": [
    {
      "id": "humla-1",
      "name": "Humla Technical School 1",
      "program": "Plant Science",
      "district": "HUMLA",
      "province": 6
    },
    {
      "id": "humla-2",
      "name": "Humla Technical School 2",
      "program": "Computer Engineering",
      "district": "HUMLA",
      "province": 6
    }
  ],
  "JUMLA": [],
  "KALIKOT": [
    {
      "id": "kalikot-1",
      "name": "Kalikot Technical School 1",
      "program": "Plant Science",
      "district": "KALIKOT",
      "province": 6
    }
  ],
  "MUGU": [
    {
      "id": "mugu-1",
      "name": "Mugu Technical School 1",
      "program": "Plant Science",
      "district": "MUGU",
      "province": 6
    },
    {
      "id": "mugu-2",
      "name": "Mugu Technical School 2",
      "program": "Computer Engineering",
      "district": "MUGU",
      "province": 6
    },
    {
      "id": "mugu-3",
      "name": "Mugu Technical School 3",
      "program": "Electrical Engineering",
      "district": "MUGU",
      "province": 6
    }
  ],
  "BANKE": [
    {
      "id": "banke-1",
      "name": "Banke Technical School 1",
      "program": "Animal Science",
      "district": "BANKE",
      "province": 5
    },
    {
      "id": "banke-2",
      "name": "Banke Technical School 2",
      "program": "Plant Science",
      "district": "BANKE",
      "province": 5
    },
    {
      "id": "banke-3",
      "name": "Banke Technical School 3",
      "program": "Computer Engineering",
      "district": "BANKE",
      "province": 5
    }
  ],
  "BARDIYA": [
    {
      "id": "bardiya-1",
      "name": "Bardiya Technical School 1",
      "program": "Animal Science",
      "district": "BARDIYA",
      "province": 5
    },
    {
      "id": "bardiya-2",
      "name": "Bardiya Technical School 2",
      "program": "Plant Science",
      "district": "BARDIYA",
      "province": 5
    },
    {
      "id": "bardiya-3",
      "name": "Bardiya Technical School 3",
      "program": "Computer Engineering",
      "district": "BARDIYA",
      "province": 5
    }
  ],
  "SURKHET": [
    {
      "id": "surkhet-1",
      "name": "Surkhet Technical School 1",
      "program": "Plant Science",
      "district": "SURKHET",
      "province": 6
    }
  ],
  "DAILEKH": [
    {
      "id": "dailekh-1",
      "name": "Dailekh Technical School 1",
      "program": "Plant Science",
      "district": "DAILEKH",
      "province": 6
    },
    {
      "id": "dailekh-2",
      "name": "Dailekh Technical School 2",
      "program": "Computer Engineering",
      "district": "DAILEKH",
      "province": 6
    }
  ],
  "JAJARKOT": [],
  "KAILALI": [
    {
      "id": "kailali-1",
      "name": "Kailali Technical School 1",
      "program": "Computer Engineering",
      "district": "KAILALI",
      "province": 7
    },
    {
      "id": "kailali-2",
      "name": "Kailali Technical School 2",
      "program": "Electrical Engineering",
      "district": "KAILALI",
      "province": 7
    }
  ],
  "ACHHAM": [],
  "DOTI": [
    {
      "id": "doti-1",
      "name": "Doti Technical School 1",
      "program": "Computer Engineering",
      "district": "DOTI",
      "province": 7
    },
    {
      "id": "doti-2",
      "name": "Doti Technical School 2",
      "program": "Electrical Engineering",
      "district": "DOTI",
      "province": 7
    },
    {
      "id": "doti-3",
      "name": "Doti Technical School 3",
      "program": "Civil Engineering",
      "district": "DOTI",
      "province": 7
    }
  ],
  "BAJHANG": [
    {
      "id": "bajhang-1",
      "name": "Bajhang Technical School 1",
      "program": "Computer Engineering",
      "district": "BAJHANG",
      "province": 7
    }
  ],
  "BAJURA": [
    {
      "id": "bajura-1",
      "name": "Bajura Technical School 1",
      "program": "Computer Engineering",
      "district": "BAJURA",
      "province": 7
    }
  ],
  "KANCHANPUR": [
    {
      "id": "kanchanpur-1",
      "name": "Kanchanpur Technical School 1",
      "program": "Computer Engineering",
      "district": "KANCHANPUR",
      "province": 7
    },
    {
      "id": "kanchanpur-2",
      "name": "Kanchanpur Technical School 2",
      "program": "Electrical Engineering",
      "district": "KANCHANPUR",
      "province": 7
    }
  ],
  "DADELDHURA": [
    {
      "id": "dadeldhura-1",
      "name": "Dadeldhura Technical School 1",
      "program": "Computer Engineering",
      "district": "DADELDHURA",
      "province": 7
    },
    {
      "id": "dadeldhura-2",
      "name": "Dadeldhura Technical School 2",
      "program": "Electrical Engineering",
      "district": "DADELDHURA",
      "province": 7
    },
    {
      "id": "dadeldhura-3",
      "name": "Dadeldhura Technical School 3",
      "program": "Civil Engineering",
      "district": "DADELDHURA",
      "province": 7
    }
  ],
  "BAITADI": [
    {
      "id": "baitadi-1",
      "name": "Baitadi Technical School 1",
      "program": "Computer Engineering",
      "district": "BAITADI",
      "province": 7
    }
  ],
  "DARCHULA": [
    {
      "id": "darchula-1",
      "name": "Darchula Technical School 1",
      "program": "Computer Engineering",
      "district": "DARCHULA",
      "province": 7
    },
    {
      "id": "darchula-2",
      "name": "Darchula Technical School 2",
      "program": "Electrical Engineering",
      "district": "DARCHULA",
      "province": 7
    },
    {
      "id": "darchula-3",
      "name": "Darchula Technical School 3",
      "program": "Civil Engineering",
      "district": "DARCHULA",
      "province": 7
    }
  ]
};

export function getSchoolsForDistrict(district: string | null): School[] {
  if (!district) return [];
  return schoolsByDistrict[district] ?? [];
}
