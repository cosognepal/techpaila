export type School = {
  id: string;
  name: string;
  program: string;
  district: string;
  province: number;
  municipalityId: string | null;
  municipalityName: string | null;
};

export const schoolsByDistrict: Record<string, School[]> = {
  "JHAPA": [
    {
      "id": "jhapa-1",
      "name": "Jhapa Technical School 1",
      "program": "Electrical Engineering",
      "district": "JHAPA",
      "province": 1,
      "municipalityId": "arjundhara-jhapa",
      "municipalityName": "Arjundhara"
    },
    {
      "id": "jhapa-2",
      "name": "Jhapa Technical School 2",
      "program": "Civil Engineering",
      "district": "JHAPA",
      "province": 1,
      "municipalityId": "bhadrapur-jhapa",
      "municipalityName": "Bhadrapur"
    },
    {
      "id": "jhapa-3",
      "name": "Jhapa Technical School 3",
      "program": "Agriculture",
      "district": "JHAPA",
      "province": 1,
      "municipalityId": "birtamod-jhapa",
      "municipalityName": "Birtamod"
    }
  ],
  "ILAM": [
    {
      "id": "ilam-1",
      "name": "Ilam Technical School 1",
      "program": "Electrical Engineering",
      "district": "ILAM",
      "province": 1,
      "municipalityId": "chulachuli-ilam",
      "municipalityName": "Chulachuli"
    },
    {
      "id": "ilam-2",
      "name": "Ilam Technical School 2",
      "program": "Civil Engineering",
      "district": "ILAM",
      "province": 1,
      "municipalityId": "deumai-ilam",
      "municipalityName": "Deumai"
    }
  ],
  "PANCHTHAR": [
    {
      "id": "panchthar-1",
      "name": "Panchthar Technical School 1",
      "program": "Electrical Engineering",
      "district": "PANCHTHAR",
      "province": 1,
      "municipalityId": "falelung-panchthar",
      "municipalityName": "Falelung"
    }
  ],
  "TAPLEJUNG": [
    {
      "id": "taplejung-1",
      "name": "Taplejung Technical School 1",
      "program": "Electrical Engineering",
      "district": "TAPLEJUNG",
      "province": 1,
      "municipalityId": "aathrai -tribeni-tapleju",
      "municipalityName": "Aathrai Tribeni"
    }
  ],
  "MORANG": [
    {
      "id": "morang-1",
      "name": "Morang Technical School 1",
      "program": "Electrical Engineering",
      "district": "MORANG",
      "province": 1,
      "municipalityId": "belbari-morang",
      "municipalityName": "Belbari"
    },
    {
      "id": "morang-2",
      "name": "Morang Technical School 2",
      "program": "Civil Engineering",
      "district": "MORANG",
      "province": 1,
      "municipalityId": "biratnagar-morang",
      "municipalityName": "Biratnagar"
    }
  ],
  "SUNSARI": [],
  "BHOJPUR": [
    {
      "id": "bhojpur-1",
      "name": "Bhojpur Technical School 1",
      "program": "Electrical Engineering",
      "district": "BHOJPUR",
      "province": 1,
      "municipalityId": "aamchowk-bhojpur",
      "municipalityName": "Aamchowk"
    },
    {
      "id": "bhojpur-2",
      "name": "Bhojpur Technical School 2",
      "program": "Civil Engineering",
      "district": "BHOJPUR",
      "province": 1,
      "municipalityId": "arun-bhojpur",
      "municipalityName": "Arun"
    },
    {
      "id": "bhojpur-3",
      "name": "Bhojpur Technical School 3",
      "program": "Agriculture",
      "district": "BHOJPUR",
      "province": 1,
      "municipalityId": "bhojpur-bhojpur",
      "municipalityName": "Bhojpur"
    }
  ],
  "DHANKUTA": [
    {
      "id": "dhankuta-1",
      "name": "Dhankuta Technical School 1",
      "program": "Electrical Engineering",
      "district": "DHANKUTA",
      "province": 1,
      "municipalityId": "chaubise-dhankuta",
      "municipalityName": "Chaubise"
    }
  ],
  "TEHRATHUM": [
    {
      "id": "tehrathum-1",
      "name": "Tehrathum Technical School 1",
      "program": "Electrical Engineering",
      "district": "TEHRATHUM",
      "province": 1,
      "municipalityId": "aathrai-terathum",
      "municipalityName": "Aathrai"
    }
  ],
  "SANKHUWASABHA": [],
  "SAPTARI": [
    {
      "id": "saptari-1",
      "name": "Saptari Technical School 1",
      "program": "Civil Engineering",
      "district": "SAPTARI",
      "province": 2,
      "municipalityId": "belhi -chapena-saptari",
      "municipalityName": "Belhi Chapena"
    }
  ],
  "SIRAHA": [
    {
      "id": "siraha-1",
      "name": "Siraha Technical School 1",
      "program": "Civil Engineering",
      "district": "SIRAHA",
      "province": 2,
      "municipalityId": "arnama-siraha",
      "municipalityName": "Arnama"
    }
  ],
  "UDAYAPUR": [
    {
      "id": "udayapur-1",
      "name": "Udayapur Technical School 1",
      "program": "Electrical Engineering",
      "district": "UDAYAPUR",
      "province": 1,
      "municipalityId": "belaka-udayapur",
      "municipalityName": "Belaka"
    },
    {
      "id": "udayapur-2",
      "name": "Udayapur Technical School 2",
      "program": "Civil Engineering",
      "district": "UDAYAPUR",
      "province": 1,
      "municipalityId": "chaudandigadi-udayapur",
      "municipalityName": "Chaudandigadi"
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
      "province": 2,
      "municipalityId": "aaurahi-dhanusa",
      "municipalityName": "Aaurahi"
    },
    {
      "id": "dhanusa-2",
      "name": "Dhanusa Technical School 2",
      "program": "Agriculture",
      "district": "DHANUSA",
      "province": 2,
      "municipalityId": "bateshwor-dhanusa",
      "municipalityName": "Bateshwor"
    }
  ],
  "MAHOTTARI": [
    {
      "id": "mahottari-1",
      "name": "Mahottari Technical School 1",
      "program": "Civil Engineering",
      "district": "MAHOTTARI",
      "province": 2,
      "municipalityId": "aurahi-mahottari",
      "municipalityName": "Aurahi"
    },
    {
      "id": "mahottari-2",
      "name": "Mahottari Technical School 2",
      "program": "Agriculture",
      "district": "MAHOTTARI",
      "province": 2,
      "municipalityId": "balwa-mahottari",
      "municipalityName": "Balwa"
    },
    {
      "id": "mahottari-3",
      "name": "Mahottari Technical School 3",
      "program": "Hotel Management",
      "district": "MAHOTTARI",
      "province": 2,
      "municipalityId": "bardibas-mahottari",
      "municipalityName": "Bardibas"
    }
  ],
  "SARLAHI": [
    {
      "id": "sarlahi-1",
      "name": "Sarlahi Technical School 1",
      "program": "Civil Engineering",
      "district": "SARLAHI",
      "province": 2,
      "municipalityId": "bagmati-sarlahi",
      "municipalityName": "Bagmati"
    }
  ],
  "SINDHULI": [
    {
      "id": "sindhuli-1",
      "name": "Sindhuli Technical School 1",
      "program": "Agriculture",
      "district": "SINDHULI",
      "province": 3,
      "municipalityId": "dudhouli-sindhuli",
      "municipalityName": "Dudhouli"
    },
    {
      "id": "sindhuli-2",
      "name": "Sindhuli Technical School 2",
      "program": "Hotel Management",
      "district": "SINDHULI",
      "province": 3,
      "municipalityId": "ghyanglekh-sindhuli",
      "municipalityName": "Ghyanglekh"
    }
  ],
  "RAMECHHAP": [
    {
      "id": "ramechhap-1",
      "name": "Ramechhap Technical School 1",
      "program": "Agriculture",
      "district": "RAMECHHAP",
      "province": 3,
      "municipalityId": "doraamba-ramechhap",
      "municipalityName": "Doraamba"
    }
  ],
  "DOLAKHA": [
    {
      "id": "dolakha-1",
      "name": "Dolakha Technical School 1",
      "program": "Agriculture",
      "district": "DOLAKHA",
      "province": 3,
      "municipalityId": "baiteshwor-dolakha",
      "municipalityName": "Baiteshwor"
    },
    {
      "id": "dolakha-2",
      "name": "Dolakha Technical School 2",
      "program": "Hotel Management",
      "district": "DOLAKHA",
      "province": 3,
      "municipalityId": "bhimeshwor-dolakha",
      "municipalityName": "Bhimeshwor"
    },
    {
      "id": "dolakha-3",
      "name": "Dolakha Technical School 3",
      "program": "Animal Science",
      "district": "DOLAKHA",
      "province": 3,
      "municipalityId": "bigu-dolakha",
      "municipalityName": "Bigu"
    }
  ],
  "BHAKTAPUR": [
    {
      "id": "bhaktapur-1",
      "name": "Bhaktapur Technical School 1",
      "program": "Agriculture",
      "district": "BHAKTAPUR",
      "province": 3,
      "municipalityId": "bhaktapur-bhaktapur",
      "municipalityName": "Bhaktapur"
    }
  ],
  "DHADING": [
    {
      "id": "dhading-1",
      "name": "Dhading Technical School 1",
      "program": "Agriculture",
      "district": "DHADING",
      "province": 3,
      "municipalityId": "benighat -rorang-dhading",
      "municipalityName": "Benighat Rorang"
    },
    {
      "id": "dhading-2",
      "name": "Dhading Technical School 2",
      "program": "Hotel Management",
      "district": "DHADING",
      "province": 3,
      "municipalityId": "dhunibesi-dhading",
      "municipalityName": "Dhunibesi"
    },
    {
      "id": "dhading-3",
      "name": "Dhading Technical School 3",
      "program": "Animal Science",
      "district": "DHADING",
      "province": 3,
      "municipalityId": "gajuri-dhading",
      "municipalityName": "Gajuri"
    }
  ],
  "KATHMANDU": [
    {
      "id": "kathmandu-1",
      "name": "Kathmandu Technical School 1",
      "program": "Agriculture",
      "district": "KATHMANDU",
      "province": 3,
      "municipalityId": "budhanilakantha-kathmand",
      "municipalityName": "Budhanilakantha"
    },
    {
      "id": "kathmandu-2",
      "name": "Kathmandu Technical School 2",
      "program": "Hotel Management",
      "district": "KATHMANDU",
      "province": 3,
      "municipalityId": "chandragiri-kathmandu",
      "municipalityName": "Chandragiri"
    }
  ],
  "KAVREPALANCHOWK": [
    {
      "id": "kavrepalanchowk-1",
      "name": "Kavrepalanchowk Technical School 1",
      "program": "Agriculture",
      "district": "KAVREPALANCHOWK",
      "province": 3,
      "municipalityId": "banepa-kavrepalanchok",
      "municipalityName": "Banepa"
    },
    {
      "id": "kavrepalanchowk-2",
      "name": "Kavrepalanchowk Technical School 2",
      "program": "Hotel Management",
      "district": "KAVREPALANCHOWK",
      "province": 3,
      "municipalityId": "bethanchowk-kavrepalanch",
      "municipalityName": "Bethanchowk"
    }
  ],
  "LALITPUR": [
    {
      "id": "lalitpur-1",
      "name": "Lalitpur Technical School 1",
      "program": "Agriculture",
      "district": "LALITPUR",
      "province": 3,
      "municipalityId": "bagmati-lalitpur",
      "municipalityName": "Bagmati"
    },
    {
      "id": "lalitpur-2",
      "name": "Lalitpur Technical School 2",
      "program": "Hotel Management",
      "district": "LALITPUR",
      "province": 3,
      "municipalityId": "godawari-lalitpur",
      "municipalityName": "Godawari"
    },
    {
      "id": "lalitpur-3",
      "name": "Lalitpur Technical School 3",
      "program": "Animal Science",
      "district": "LALITPUR",
      "province": 3,
      "municipalityId": "konjyosom-lalitpur",
      "municipalityName": "Konjyosom"
    }
  ],
  "NUWAKOT": [
    {
      "id": "nuwakot-1",
      "name": "Nuwakot Technical School 1",
      "program": "Agriculture",
      "district": "NUWAKOT",
      "province": 3,
      "municipalityId": "belkotgadhi-nuwakot",
      "municipalityName": "Belkotgadhi"
    }
  ],
  "RASUWA": [
    {
      "id": "rasuwa-1",
      "name": "Rasuwa Technical School 1",
      "program": "Agriculture",
      "district": "RASUWA",
      "province": 3,
      "municipalityId": "gosaikunda-rasuwa",
      "municipalityName": "Gosaikunda"
    }
  ],
  "SINDHUPALCHOK": [
    {
      "id": "sindhupalchok-1",
      "name": "Sindhupalchok Technical School 1",
      "program": "Agriculture",
      "district": "SINDHUPALCHOK",
      "province": 3,
      "municipalityId": "balefi-sindhupalchowk",
      "municipalityName": "Balefi"
    },
    {
      "id": "sindhupalchok-2",
      "name": "Sindhupalchok Technical School 2",
      "program": "Hotel Management",
      "district": "SINDHUPALCHOK",
      "province": 3,
      "municipalityId": "barhabise-sindhupalchowk",
      "municipalityName": "Barhabise"
    }
  ],
  "BARA": [],
  "PARSA": [
    {
      "id": "parsa-1",
      "name": "Parsa Technical School 1",
      "program": "Civil Engineering",
      "district": "PARSA",
      "province": 2,
      "municipalityId": "bahudaramai-parsa",
      "municipalityName": "Bahudaramai"
    },
    {
      "id": "parsa-2",
      "name": "Parsa Technical School 2",
      "program": "Agriculture",
      "district": "PARSA",
      "province": 2,
      "municipalityId": "belwa-parsa",
      "municipalityName": "Belwa"
    }
  ],
  "RAUTAHAT": [],
  "CHITWAN": [
    {
      "id": "chitwan-1",
      "name": "Chitwan Technical School 1",
      "program": "Agriculture",
      "district": "CHITWAN",
      "province": 3,
      "municipalityId": "bharatpur-chitwan",
      "municipalityName": "Bharatpur"
    },
    {
      "id": "chitwan-2",
      "name": "Chitwan Technical School 2",
      "program": "Hotel Management",
      "district": "CHITWAN",
      "province": 3,
      "municipalityId": "chitwan -national -park-",
      "municipalityName": "Chitwan National Park"
    }
  ],
  "MAKWANPUR": [],
  "GORKHA": [
    {
      "id": "gorkha-1",
      "name": "Gorkha Technical School 1",
      "program": "Hotel Management",
      "district": "GORKHA",
      "province": 4,
      "municipalityId": "aarughat-gorkha",
      "municipalityName": "Aarughat"
    },
    {
      "id": "gorkha-2",
      "name": "Gorkha Technical School 2",
      "program": "Animal Science",
      "district": "GORKHA",
      "province": 4,
      "municipalityId": "ajirkot-gorkha",
      "municipalityName": "Ajirkot"
    },
    {
      "id": "gorkha-3",
      "name": "Gorkha Technical School 3",
      "program": "Plant Science",
      "district": "GORKHA",
      "province": 4,
      "municipalityId": "bhimsen-gorkha",
      "municipalityName": "Bhimsen"
    }
  ],
  "KASKI": [
    {
      "id": "kaski-1",
      "name": "Kaski Technical School 1",
      "program": "Hotel Management",
      "district": "KASKI",
      "province": 4,
      "municipalityId": "annapurna-kaski",
      "municipalityName": "Annapurna"
    },
    {
      "id": "kaski-2",
      "name": "Kaski Technical School 2",
      "program": "Animal Science",
      "district": "KASKI",
      "province": 4,
      "municipalityId": "machhapuchchhre-kaski",
      "municipalityName": "Machhapuchchhre"
    },
    {
      "id": "kaski-3",
      "name": "Kaski Technical School 3",
      "program": "Plant Science",
      "district": "KASKI",
      "province": 4,
      "municipalityId": "madi-kaski",
      "municipalityName": "Madi"
    }
  ],
  "LAMJUNG": [],
  "SYANGJA": [
    {
      "id": "syangja-1",
      "name": "Syangja Technical School 1",
      "program": "Hotel Management",
      "district": "SYANGJA",
      "province": 4,
      "municipalityId": "aandhikhola-syangja",
      "municipalityName": "Aandhikhola"
    },
    {
      "id": "syangja-2",
      "name": "Syangja Technical School 2",
      "program": "Animal Science",
      "district": "SYANGJA",
      "province": 4,
      "municipalityId": "arjunchaupri-syangja",
      "municipalityName": "Arjunchaupri"
    },
    {
      "id": "syangja-3",
      "name": "Syangja Technical School 3",
      "program": "Plant Science",
      "district": "SYANGJA",
      "province": 4,
      "municipalityId": "bhirkot-syangja",
      "municipalityName": "Bhirkot"
    }
  ],
  "TANAHU": [],
  "MANANG": [
    {
      "id": "manang-1",
      "name": "Manang Technical School 1",
      "program": "Hotel Management",
      "district": "MANANG",
      "province": 4,
      "municipalityId": "chame-manag",
      "municipalityName": "Chame"
    }
  ],
  "KAPILVASTU": [],
  "NAWALPUR": [
    {
      "id": "nawalpur-1",
      "name": "Nawalpur Technical School 1",
      "program": "Hotel Management",
      "district": "NAWALPUR",
      "province": 4,
      "municipalityId": "bardaghat-nawalparasi",
      "municipalityName": "Bardaghat"
    },
    {
      "id": "nawalpur-2",
      "name": "Nawalpur Technical School 2",
      "program": "Animal Science",
      "district": "NAWALPUR",
      "province": 4,
      "municipalityId": "binayee-nawalparasi",
      "municipalityName": "Binayee"
    }
  ],
  "PARASI": [
    {
      "id": "parasi-1",
      "name": "Parasi Technical School 1",
      "program": "Animal Science",
      "district": "PARASI",
      "province": 5,
      "municipalityId": "bardaghat-nawalparasi",
      "municipalityName": "Bardaghat"
    }
  ],
  "RUPANDEHI": [
    {
      "id": "rupandehi-1",
      "name": "Rupandehi Technical School 1",
      "program": "Animal Science",
      "district": "RUPANDEHI",
      "province": 5,
      "municipalityId": "-rupandehi",
      "municipalityName": ""
    },
    {
      "id": "rupandehi-2",
      "name": "Rupandehi Technical School 2",
      "program": "Plant Science",
      "district": "RUPANDEHI",
      "province": 5,
      "municipalityId": "butwal-rupandehi",
      "municipalityName": "Butwal"
    },
    {
      "id": "rupandehi-3",
      "name": "Rupandehi Technical School 3",
      "program": "Computer Engineering",
      "district": "RUPANDEHI",
      "province": 5,
      "municipalityId": "devdaha-rupandehi",
      "municipalityName": "Devdaha"
    }
  ],
  "ARGHAKHANCHI": [
    {
      "id": "arghakhanchi-1",
      "name": "Arghakhanchi Technical School 1",
      "program": "Animal Science",
      "district": "ARGHAKHANCHI",
      "province": 5,
      "municipalityId": "bhumikasthan-arghakhanch",
      "municipalityName": "Bhumikasthan"
    },
    {
      "id": "arghakhanchi-2",
      "name": "Arghakhanchi Technical School 2",
      "program": "Plant Science",
      "district": "ARGHAKHANCHI",
      "province": 5,
      "municipalityId": "chattradev-arghakhanchi",
      "municipalityName": "Chattradev"
    }
  ],
  "GULMI": [],
  "PALPA": [
    {
      "id": "palpa-1",
      "name": "Palpa Technical School 1",
      "program": "Animal Science",
      "district": "PALPA",
      "province": 5,
      "municipalityId": "bagnaskali-palpa",
      "municipalityName": "Bagnaskali"
    }
  ],
  "BAGLUNG": [
    {
      "id": "baglung-1",
      "name": "Baglung Technical School 1",
      "program": "Hotel Management",
      "district": "BAGLUNG",
      "province": 4,
      "municipalityId": "badigad-baglung",
      "municipalityName": "Badigad"
    },
    {
      "id": "baglung-2",
      "name": "Baglung Technical School 2",
      "program": "Animal Science",
      "district": "BAGLUNG",
      "province": 4,
      "municipalityId": "baglung-baglung",
      "municipalityName": "Baglung"
    }
  ],
  "MYAGDI": [
    {
      "id": "myagdi-1",
      "name": "Myagdi Technical School 1",
      "program": "Hotel Management",
      "district": "MYAGDI",
      "province": 4,
      "municipalityId": "annapurna-myagdi",
      "municipalityName": "Annapurna"
    }
  ],
  "PARBAT": [],
  "MUSTANG": [
    {
      "id": "mustang-1",
      "name": "Mustang Technical School 1",
      "program": "Hotel Management",
      "district": "MUSTANG",
      "province": 4,
      "municipalityId": "barhagaun -muktichhetra-",
      "municipalityName": "Barhagaun Muktichhetra"
    }
  ],
  "DANG": [
    {
      "id": "dang-1",
      "name": "Dang Technical School 1",
      "program": "Animal Science",
      "district": "DANG",
      "province": 5,
      "municipalityId": "babai-dang",
      "municipalityName": "Babai"
    }
  ],
  "PYUTHAN": [
    {
      "id": "pyuthan-1",
      "name": "Pyuthan Technical School 1",
      "program": "Animal Science",
      "district": "PYUTHAN",
      "province": 5,
      "municipalityId": "airawati-pyuthan",
      "municipalityName": "Airawati"
    }
  ],
  "ROLPA": [
    {
      "id": "rolpa-1",
      "name": "Rolpa Technical School 1",
      "program": "Animal Science",
      "district": "ROLPA",
      "province": 5,
      "municipalityId": "duikholi-rolpa",
      "municipalityName": "Duikholi"
    },
    {
      "id": "rolpa-2",
      "name": "Rolpa Technical School 2",
      "program": "Plant Science",
      "district": "ROLPA",
      "province": 5,
      "municipalityId": "lungri-rolpa",
      "municipalityName": "Lungri"
    },
    {
      "id": "rolpa-3",
      "name": "Rolpa Technical School 3",
      "program": "Computer Engineering",
      "district": "ROLPA",
      "province": 5,
      "municipalityId": "madi-rolpa",
      "municipalityName": "Madi"
    }
  ],
  "EASTERN RUKUM": [
    {
      "id": "eastern rukum-1",
      "name": "Eastern rukum Technical School 1",
      "program": "Animal Science",
      "district": "EASTERN RUKUM",
      "province": 5,
      "municipalityId": "aathbiskot-rukum",
      "municipalityName": "Aathbiskot"
    },
    {
      "id": "eastern rukum-2",
      "name": "Eastern rukum Technical School 2",
      "program": "Plant Science",
      "district": "EASTERN RUKUM",
      "province": 5,
      "municipalityId": "banfikot-rukum",
      "municipalityName": "Banfikot"
    }
  ],
  "WESTERN RUKUM": [
    {
      "id": "western rukum-1",
      "name": "Western rukum Technical School 1",
      "program": "Plant Science",
      "district": "WESTERN RUKUM",
      "province": 6,
      "municipalityId": "aathbiskot-rukum",
      "municipalityName": "Aathbiskot"
    }
  ],
  "SALYAN": [
    {
      "id": "salyan-1",
      "name": "Salyan Technical School 1",
      "program": "Plant Science",
      "district": "SALYAN",
      "province": 6,
      "municipalityId": "bagchaur-salyan",
      "municipalityName": "Bagchaur"
    }
  ],
  "DOLPA": [
    {
      "id": "dolpa-1",
      "name": "Dolpa Technical School 1",
      "program": "Plant Science",
      "district": "DOLPA",
      "province": 6,
      "municipalityId": "chharka -tangsong-dolpa",
      "municipalityName": "Chharka Tangsong"
    },
    {
      "id": "dolpa-2",
      "name": "Dolpa Technical School 2",
      "program": "Computer Engineering",
      "district": "DOLPA",
      "province": 6,
      "municipalityId": "dolpo -buddha-dolpa",
      "municipalityName": "Dolpo Buddha"
    }
  ],
  "HUMLA": [
    {
      "id": "humla-1",
      "name": "Humla Technical School 1",
      "program": "Plant Science",
      "district": "HUMLA",
      "province": 6,
      "municipalityId": "adanchuli-humla",
      "municipalityName": "Adanchuli"
    },
    {
      "id": "humla-2",
      "name": "Humla Technical School 2",
      "program": "Computer Engineering",
      "district": "HUMLA",
      "province": 6,
      "municipalityId": "chankheli-humla",
      "municipalityName": "Chankheli"
    }
  ],
  "JUMLA": [],
  "KALIKOT": [
    {
      "id": "kalikot-1",
      "name": "Kalikot Technical School 1",
      "program": "Plant Science",
      "district": "KALIKOT",
      "province": 6,
      "municipalityId": "kalika-kalikot",
      "municipalityName": "Kalika"
    }
  ],
  "MUGU": [
    {
      "id": "mugu-1",
      "name": "Mugu Technical School 1",
      "program": "Plant Science",
      "district": "MUGU",
      "province": 6,
      "municipalityId": "chhayanath -rara-mugu",
      "municipalityName": "Chhayanath Rara"
    },
    {
      "id": "mugu-2",
      "name": "Mugu Technical School 2",
      "program": "Computer Engineering",
      "district": "MUGU",
      "province": 6,
      "municipalityId": "khatyad-mugu",
      "municipalityName": "Khatyad"
    },
    {
      "id": "mugu-3",
      "name": "Mugu Technical School 3",
      "program": "Electrical Engineering",
      "district": "MUGU",
      "province": 6,
      "municipalityId": "mugum -karmarong-mugu",
      "municipalityName": "Mugum Karmarong"
    }
  ],
  "BANKE": [
    {
      "id": "banke-1",
      "name": "Banke Technical School 1",
      "program": "Animal Science",
      "district": "BANKE",
      "province": 5,
      "municipalityId": "baijanath-banke",
      "municipalityName": "Baijanath"
    },
    {
      "id": "banke-2",
      "name": "Banke Technical School 2",
      "program": "Plant Science",
      "district": "BANKE",
      "province": 5,
      "municipalityId": "duduwa-banke",
      "municipalityName": "Duduwa"
    },
    {
      "id": "banke-3",
      "name": "Banke Technical School 3",
      "program": "Computer Engineering",
      "district": "BANKE",
      "province": 5,
      "municipalityId": "janaki-banke",
      "municipalityName": "Janaki"
    }
  ],
  "BARDIYA": [
    {
      "id": "bardiya-1",
      "name": "Bardiya Technical School 1",
      "program": "Animal Science",
      "district": "BARDIYA",
      "province": 5,
      "municipalityId": "badhaiyatal-bardiya",
      "municipalityName": "Badhaiyatal"
    },
    {
      "id": "bardiya-2",
      "name": "Bardiya Technical School 2",
      "program": "Plant Science",
      "district": "BARDIYA",
      "province": 5,
      "municipalityId": "bansagadhi-bardiya",
      "municipalityName": "Bansagadhi"
    },
    {
      "id": "bardiya-3",
      "name": "Bardiya Technical School 3",
      "program": "Computer Engineering",
      "district": "BARDIYA",
      "province": 5,
      "municipalityId": "bansagadhi-bardiya",
      "municipalityName": "Bansagadhi"
    }
  ],
  "SURKHET": [
    {
      "id": "surkhet-1",
      "name": "Surkhet Technical School 1",
      "program": "Plant Science",
      "district": "SURKHET",
      "province": 6,
      "municipalityId": "barahtaal-surkhet",
      "municipalityName": "Barahtaal"
    }
  ],
  "DAILEKH": [
    {
      "id": "dailekh-1",
      "name": "Dailekh Technical School 1",
      "program": "Plant Science",
      "district": "DAILEKH",
      "province": 6,
      "municipalityId": "aathbis -nagarpalika-dai",
      "municipalityName": "Aathbis Nagarpalika"
    },
    {
      "id": "dailekh-2",
      "name": "Dailekh Technical School 2",
      "program": "Computer Engineering",
      "district": "DAILEKH",
      "province": 6,
      "municipalityId": "bhagawatimai-dailekh",
      "municipalityName": "Bhagawatimai"
    }
  ],
  "JAJARKOT": [],
  "KAILALI": [
    {
      "id": "kailali-1",
      "name": "Kailali Technical School 1",
      "program": "Computer Engineering",
      "district": "KAILALI",
      "province": 7,
      "municipalityId": "bardagariya-kailali",
      "municipalityName": "Bardagariya"
    },
    {
      "id": "kailali-2",
      "name": "Kailali Technical School 2",
      "program": "Electrical Engineering",
      "district": "KAILALI",
      "province": 7,
      "municipalityId": "bhajani-kailali",
      "municipalityName": "Bhajani"
    }
  ],
  "ACHHAM": [],
  "DOTI": [
    {
      "id": "doti-1",
      "name": "Doti Technical School 1",
      "program": "Computer Engineering",
      "district": "DOTI",
      "province": 7,
      "municipalityId": "adharsha-doti",
      "municipalityName": "Adharsha"
    },
    {
      "id": "doti-2",
      "name": "Doti Technical School 2",
      "program": "Electrical Engineering",
      "district": "DOTI",
      "province": 7,
      "municipalityId": "badikedar-doti",
      "municipalityName": "Badikedar"
    },
    {
      "id": "doti-3",
      "name": "Doti Technical School 3",
      "program": "Civil Engineering",
      "district": "DOTI",
      "province": 7,
      "municipalityId": "bogtan-doti",
      "municipalityName": "Bogtan"
    }
  ],
  "BAJHANG": [
    {
      "id": "bajhang-1",
      "name": "Bajhang Technical School 1",
      "program": "Computer Engineering",
      "district": "BAJHANG",
      "province": 7,
      "municipalityId": "bithadchir-bajhang",
      "municipalityName": "Bithadchir"
    }
  ],
  "BAJURA": [
    {
      "id": "bajura-1",
      "name": "Bajura Technical School 1",
      "program": "Computer Engineering",
      "district": "BAJURA",
      "province": 7,
      "municipalityId": "badimalika-bajura",
      "municipalityName": "Badimalika"
    }
  ],
  "KANCHANPUR": [
    {
      "id": "kanchanpur-1",
      "name": "Kanchanpur Technical School 1",
      "program": "Computer Engineering",
      "district": "KANCHANPUR",
      "province": 7,
      "municipalityId": "bedkot-kanchanpur",
      "municipalityName": "Bedkot"
    },
    {
      "id": "kanchanpur-2",
      "name": "Kanchanpur Technical School 2",
      "program": "Electrical Engineering",
      "district": "KANCHANPUR",
      "province": 7,
      "municipalityId": "belauri-kanchanpur",
      "municipalityName": "Belauri"
    }
  ],
  "DADELDHURA": [
    {
      "id": "dadeldhura-1",
      "name": "Dadeldhura Technical School 1",
      "program": "Computer Engineering",
      "district": "DADELDHURA",
      "province": 7,
      "municipalityId": "ajaymeru-dadeldhura",
      "municipalityName": "Ajaymeru"
    },
    {
      "id": "dadeldhura-2",
      "name": "Dadeldhura Technical School 2",
      "program": "Electrical Engineering",
      "district": "DADELDHURA",
      "province": 7,
      "municipalityId": "alital-dadeldhura",
      "municipalityName": "Alital"
    },
    {
      "id": "dadeldhura-3",
      "name": "Dadeldhura Technical School 3",
      "program": "Civil Engineering",
      "district": "DADELDHURA",
      "province": 7,
      "municipalityId": "amargadhi-dadeldhura",
      "municipalityName": "Amargadhi"
    }
  ],
  "BAITADI": [
    {
      "id": "baitadi-1",
      "name": "Baitadi Technical School 1",
      "program": "Computer Engineering",
      "district": "BAITADI",
      "province": 7,
      "municipalityId": "dasarathchand-baitadi",
      "municipalityName": "Dasarathchand"
    }
  ],
  "DARCHULA": [
    {
      "id": "darchula-1",
      "name": "Darchula Technical School 1",
      "program": "Computer Engineering",
      "district": "DARCHULA",
      "province": 7,
      "municipalityId": "apihimal-darchula",
      "municipalityName": "Apihimal"
    },
    {
      "id": "darchula-2",
      "name": "Darchula Technical School 2",
      "program": "Electrical Engineering",
      "district": "DARCHULA",
      "province": 7,
      "municipalityId": "byas-darchula",
      "municipalityName": "Byas"
    },
    {
      "id": "darchula-3",
      "name": "Darchula Technical School 3",
      "program": "Civil Engineering",
      "district": "DARCHULA",
      "province": 7,
      "municipalityId": "dunhu-darchula",
      "municipalityName": "Dunhu"
    }
  ]
};

export const allSchools: School[] = Object.values(schoolsByDistrict).flat();

export type SchoolFilter = {
  provinceId?: number | null;
  districtName?: string | null;
  municipalityId?: string | null;
};

export function getSchools(filter: SchoolFilter = {}): School[] {
  const { provinceId = null, districtName = null, municipalityId = null } = filter;

  let schools = allSchools;

  if (provinceId != null) {
    schools = schools.filter((s) => s.province === provinceId);
  }
  if (districtName) {
    schools = schools.filter((s) => s.district === districtName);
  }
  if (municipalityId) {
    schools = schools.filter((s) => s.municipalityId === municipalityId);
  }

  return [...schools].sort((a, b) => a.name.localeCompare(b.name));
}
