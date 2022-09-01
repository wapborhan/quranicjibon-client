const ALLAH_NAMES = [
  {
    fojilot: "প্রত্যহ ১০০০ বার এই নামের যিকির করলে ঈমান দৃঢ় ও মযবুত হয়।  ",
    id: "1",
    meaning_bn: "আল্লাহ",
    name_ar: "الله",
    name_bn: "আল্লাহ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_01_allah.mp3",
  },
  {
    fojilot:
      "প্রত্যেক নামাযের পর ১০০ বার পড়লে, ইনশাআল্লাহ্‌ তার অন্তর থেকে সব ধরনের কঠোরতা ও অলসতা দূর হয়ে যাবে।  ",
    id: "2",
    meaning_bn: "পরম দয়ালু",
    name_ar: "الرحمن",
    name_bn: "আর রাহমান",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_02_ar_rahman.mp3",
  },
  {
    fojilot:
      "প্রত্যেক নামাযের পর ১০০ বার করে পাঠ করলে, ইনশাআল্লাহ্‌ পৃথিবীর সকল বিপদ আপদ থেকে নিরাপদ থাকবে।",
    id: "3",
    meaning_bn: "অতিশয়-মেহেরবান",
    name_ar: "الرحيم",
    name_bn: "আর-রহী'ম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_03_ar_rahim.mp3",
  },
  {
    fojilot:
      "ফযরের নামাজের পর অধিকহারে পাঠ করবে, আল্লাহ্‌ তায়ালা তাকে ধনবান করে দিবেন। ",
    id: "4",
    meaning_bn: "সর্বকর্তৃত্বময়",
    name_ar: "الملك",
    name_bn: "আল-মালিক",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_04_al_malik.mp3",
  },
  {
    fojilot:
      "প্রত্যহ শেষ রাতে (উয়া কুদ্দূসু) নামুটি ১০০০ বার পড়লে রোগ ব্যধি থেকে মুক্ত থাকা যায়।  ",
    id: "5",
    meaning_bn: "নিষ্কলুষ, অতি পবিত্র",
    name_ar: "القدوس",
    name_bn: "আল-কুদ্দুস",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_05_al_kuddsh.mp3",
  },
  {
    fojilot:
      "এই নামটি ১১৫ বার কোন রুগির উপর পরে ফু দিবে, তাহলে আল্লাহ তায়ালা তাকে সুস্থতা ও আরোগ্য দান করবেন।  ",
    id: "6",
    meaning_bn: "নিরাপত্তা-দানকারী, শান্তি-দানকারী",
    name_ar: "السلام",
    name_bn: "আস-সালাম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_06_as_salam.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি কোন ভয়-ভীতির সময় ৬৩০ বার এ নামটি পাঠ করবে, ইনশাআল্লাহ্‌ সে সব ধরনের ভয়-ভীতি ও অনিষ্ঠ থেকে নিরাপদ থাকবে। যে ব্যক্তি এ নামটি পাঠ করবে বা লিখে নিজের সাথে রাখবে, আল্লাহ্‌ তায়ালা তাকে শয়তানের অন",
    id: "7",
    meaning_bn: "নিরাপত্তা ও ঈমান দানকারী",
    name_ar: "المؤمن",
    name_bn: "আল-মু'মিন",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_07_al_mu_min.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি গোসল করে ১১৫ বার এ নামটি পরবে, গোপন বিষয়াদি উপর অবগত হবে। সর্বদা পরলে সব বিপদ থেকে মুক্তি পাবে। ",
    id: "8",
    meaning_bn: "পরিপূর্ন রক্ষণাবেক্ষণকারী",
    name_ar: "المهيمن",
    name_bn: "আল-মুহাইমিন",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_08_al_muhaymin.mp3",
  },
  {
    fojilot:
      "৪০ দিন পর্যন্ত যে ব্যক্তি এ নামটি ৪০ বার পাঠ করবে, আল্লাহ তাকে সম্মানী ও অমুখাপেক্ষী বানিয়ে দিবেন। ",
    id: "9",
    meaning_bn: "পরাক্রমশালী, অপরাজেয়",
    name_ar: "العزيز",
    name_bn: "আল-আ'জীজ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_09_al_aziz.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি প্রতি দিন সকাল-বিকাল ২২৬ বার পড়লে যাবতীয় জুলুম থেকে মুক্তিপাবে।  ",
    id: "10",
    meaning_bn: "দুর্নিবার",
    name_ar: "الجبار",
    name_bn: "আল-জাব্বার",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_10_al_jabbar.mp3",
  },
  {
    fojilot: "এই নাম সর্বদা পড়লে মান সম্মান বৃদ্ধি পায় ও উন্নতি লাভ হয়।  ",
    id: "11",
    meaning_bn: "নিরঙ্কুশ শ্রেষ্ঠত্বের অধিকারী",
    name_ar: "المتكبر",
    name_bn: "আল-মুতাকাব্বিইর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_11_al_mutakabbir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি সাত দিন পর্যন্ত ধারাবাহিক ১০০ বার এ নামটি পাঠ করবে, ইনশাআল্লাহ্‌ সকল বিপদআপদ থেকে নিরাপদ থাকবে। ",
    id: "12",
    meaning_bn: "সৃষ্টিকর্তা",
    name_ar: "الخالق",
    name_bn: "আল-খালিক্ব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_12_al_khalik.mp3",
  },
  {
    fojilot:
      "বন্ধ্যা নারী যদি সাতদিন রোযা রাখে এবং পানি দ্বারা ইফতার করার পর (ইয়া বারী-উল মুছউইর) ২১ বার পাঠ করবে, তাহলে ইনশাআল্লাহ্‌ তার পুত্র সন্তান লাভ হবে।  ",
    id: "13",
    meaning_bn: "সঠিকভাবে সৃষ্টিকারী",
    name_ar: "البارئ",
    name_bn: "আল-বারী",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_13_al_bari.mp3",
  },
  {
    fojilot:
      "বন্ধ্যা নারী যদি সাতদিন রোযা রাখে এবং পানি দ্বারা ইফতার করার পর (ইয়া বারী-উল মুছউইর) ২১ বার পাঠ করবে, তাহলে ইনশাআল্লাহ্‌ তার পুত্র সন্তান লাভ হবে। ",
    id: "14",
    meaning_bn: "আকৃতি-দানকারী",
    name_ar: "المصور",
    name_bn: "আল-মুছউইর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_14_al_musawir.mp3",
  },
  {
    fojilot: "জুম্মার নামাযের পর ১০০ বার পড়লে গুনাহ মাফ হয় ও অভাব দূর হয়।  ",
    id: "15",
    meaning_bn: "পরম ক্ষমাশীল",
    name_ar: "الغفار",
    name_bn: "আল-গফ্ফার",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_15_al_goffar.mp3",
  },
  {
    fojilot:
      "ক্রমাগত আল্লাহ্‌র এই নাম পাঠ করলে, পার্থিব ভালবাসা থেকে আপনি মুক্তি পাবেন এবং পরিবর্তে আল্লাহ্‌র ভালবাসা আপানার হৃদয়ে সহজাত হয়ে যাবে। ইনশাআল্লাহ্‌ ",
    id: "16",
    meaning_bn: "কঠোর",
    name_ar: "القهار",
    name_bn: "আল-ক্বাহার",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_16_al_kohhar.mp3",
  },
  {
    fojilot:
      "চাশতের নামাযের পর সেজদায় গিয়ে ১০০ বার পড়লে অর্থ ও প্রভাব বৃদ্ধি পায়।   ",
    id: "17",
    meaning_bn: "সবকিছু দানকারী",
    name_ar: "الوهاب",
    name_bn: "আল-ওয়াহ্হাব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_17_al_wahhav.mp3",
  },
  {
    fojilot: "ফজরের নামাযের পূবে এই নামের যিকির করলে রিযিক বৃদ্ধি পায়। ",
    id: "18",
    meaning_bn: "রিযকদাতা",
    name_ar: "الرزاق",
    name_bn: "আর-রজ্জাক্ব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_18_ar_razzak.mp3",
  },
  {
    fojilot:
      "ফযরের নামাজের পর দুই হাত বুকের উপর রেখে ৭০ বার এই নাম পাঠ করলে, ইনশাআল্লাহ্‌ তার অন্তর ঈমানের জ্যোতি দ্বারা আলোকিত হবে।   ",
    id: "19",
    meaning_bn: "বিজয়দানকারী",
    name_ar: "الفتاح",
    name_bn: "আল ফাত্তাহ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_19_al_fettah.mp3",
  },
  {
    fojilot:
      "এ নাম সর্বদা পড়লে জ্ঞান বৃদ্ধি পায় গুনাহ মাফ হয় ও মনের কপাট খুলে যায়।  ",
    id: "20",
    meaning_bn: "সর্বজ্ঞ",
    name_ar: "العليم",
    name_bn: "আল-আ'লীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_20_al_alim.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি ৪০ দিন এই নামটি ৪ টুকরা রুটির উপর লিখে খাবে, তিনি ক্ষুদা, পিপাসা ও ব্যথা বেদনা থেকে রক্ষা পাবে।",
    id: "21",
    meaning_bn: "সংকীর্ণকারী",
    name_ar: "القابض",
    name_bn: "আল-ক্ববিদ্ব'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_21_al_kobid.mp3",
  },
  {
    fojilot:
      "প্রতিদিন নামাজের পর মুনাজাত করে ১০ বার আল্লাহ্‌র এই নাম পাঠ করেন, আল্লাহ্‌ তায়ালা তাকে ধনী বনিয়ে দিবেন এবং কখন কার মুখাপেক্ষী হবে না। ",
    id: "22",
    meaning_bn: "প্রশস্তকারী",
    name_ar: "الباسط",
    name_bn: "আল-বাসিত",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_22_al_basit.mp3",
  },
  {
    fojilot:
      "প্রত্যহ ৫০০ বার এ নামের ‍পাঠ করলে আল্লাহ্‌ তায়ালা তার প্রয়োজন পূর্ণ করবেন ও সকল সমস্যা দূর করে দিবেন।  ",
    id: "23",
    meaning_bn: "অবনতকারী",
    name_ar: "الخافض",
    name_bn: "আল-খফিদ্বু",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_23_al_khafid.mp3",
  },
  {
    fojilot:
      "১০০ বার পড়লে, আল্লাহ্‌ আপানকে স্বয়ংসম্পূর্ণতা এবং সমগ্র সৃষ্টির স্বাধীনতা প্রদান করা হবে। ইনশাআল্লাহ্‌",
    id: "24",
    meaning_bn: "উন্নতকারী",
    name_ar: "الرافع",
    name_bn: "আর-রফীই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_24_ar_rofiu.mp3",
  },
  {
    fojilot:
      "প্রতি সোমবার ও শুক্রুবার মাগরিব নামাজ পরে এই নাম্ ৪০ বার পড়লে মর্যাদা বৃদ্ধি পায় ও সকলের নিকট সম্মানের পাত্র হয়।",
    id: "25",
    meaning_bn: "সম্মান-দানকারী",
    name_ar: "المعز",
    name_bn: "আল-মুই'জ্ব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_25_al_muaiz.mp3",
  },
  {
    fojilot:
      "নামাযের পর সেজদায় গিয়ে ৭৫ বার পড়ে দোয়া করলে শত্রুতা হতে মুক্তি পাওয়া যায় ।  ",
    id: "26",
    meaning_bn: "(অবিশ্বাসীদের) বেইজ্জতকারী",
    name_ar: "المذل",
    name_bn: "আল-মুদ্বি'ল্লু",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_26_al_muzil.mp3",
  },
  {
    fojilot:
      "শুক্রুবার চাশতের পর ৫০০/১০০/৫০ বার পড়ে দোয়া করলে দোয়া কবুল হয়।   ",
    id: "27",
    meaning_bn: "সর্বশ্রোতা",
    name_ar: "السميع",
    name_bn: "আস্-সামিই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_27_as_sami.mp3",
  },
  {
    fojilot:
      "জুম্মার নামাযের পর ১০০ বার পড়লে দৃষ্টিতে আলো ও অন্তরে জ্যোতি সৃষ্টি হবে।  ",
    id: "28",
    meaning_bn: "সর্ববিষয়-দর্শনকারী",
    name_ar: "البصير",
    name_bn: "আল-বাছীর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_28_al_basir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি অধিক হারে পাঠ করবে, আল্লাহ্‌ তালা তার জন্য জ্ঞান-বিজ্ঞানের দ্বার খুলে দিবেন। ",
    id: "29",
    meaning_bn: "অটল বিচারক",
    name_ar: "الحكم",
    name_bn: "আল-হা'কাম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_29_al_hakam.mp3",
  },
  {
    fojilot:
      "শুক্রবার রাতে বিশ টুকরা রুটির উপর লিখে খেলে আল্লাহ্‌ তায়ালা সৃষ্টজীবকে তার অনুগত করে দিবেন। ",
    id: "30",
    meaning_bn: "পরিপূর্ণ-ন্যায়বিচারক",
    name_ar: "العدل",
    name_bn: "আল-আ'দল",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_30_al_adl.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি ১৩৩ বার পাঠ করবে, ইনশাআল্লাহ্‌ তার খাদ্যে বরকত হবে এবং তার সব কাজ সুন্দরভাবে পূর্ণ হবে। ",
    id: "31",
    meaning_bn: "সকল-গোপন-বিষয়ে-অবগত",
    name_ar: "اللطيف",
    name_bn: "আল-লাতীফ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_31_al_latif.mp3",
  },
  {
    fojilot: "৭ দিন পর্যন্ত এ নাম পড়তে থাকলে গোপন তথ্য অবগত হওয়া যায়।   ",
    id: "32",
    meaning_bn: "সকল ব্যাপারে জ্ঞাত",
    name_ar: "الخبير",
    name_bn: "আল-খ'বীর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_32_al_khobir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি এই নামটি কাগজে লিখে, পানিতে এটি ডুবিয়ে রেখে এবং সে পানি শস্য ক্ষেত্রে অথবা কোন জিনিসের উপর ছিটিয়ে দিবে, আল্লাহ্‌ তায়ালা তার ফসল নষ্ট করবেনা, বরং সংরক্ষন করবেন। ",
    id: "33",
    meaning_bn: "অত্যন্ত ধৈর্যশীল",
    name_ar: "الحليم",
    name_bn: "আল-হা'লীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_33_al_halim.mp3",
  },
];

export default ALLAH_NAMES;
