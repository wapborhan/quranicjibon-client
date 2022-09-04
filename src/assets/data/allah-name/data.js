const ALLAH_NAMES = [
  {
    fojilot: "প্রত্যহ ১০০০ বার এই নামের যিকির করলে ঈমান দৃঢ় ও মযবুত হয়।  ",
    id: 1,
    meaning_bn: "আল্লাহ",
    name_ar: "الله",
    name_bn: "আল্লাহ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_01_allah.mp3",
  },
  {
    fojilot:
      "প্রত্যেক নামাযের পর ১০০ বার পড়লে, ইনশাআল্লাহ্‌ তার অন্তর থেকে সব ধরনের কঠোরতা ও অলসতা দূর হয়ে যাবে।  ",
    id: 2,
    meaning_bn: "পরম দয়ালু",
    name_ar: "الرحمن",
    name_bn: "আর রাহমান",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_02_ar_rahman.mp3",
  },
  {
    fojilot:
      "প্রত্যেক নামাযের পর ১০০ বার করে পাঠ করলে, ইনশাআল্লাহ্‌ পৃথিবীর সকল বিপদ আপদ থেকে নিরাপদ থাকবে।",
    id: 3,
    meaning_bn: "অতিশয়-মেহেরবান",
    name_ar: "الرحيم",
    name_bn: "আর-রহী'ম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_03_ar_rahim.mp3",
  },
  {
    fojilot:
      "ফযরের নামাজের পর অধিকহারে পাঠ করবে, আল্লাহ্‌ তায়ালা তাকে ধনবান করে দিবেন। ",
    id: 4,
    meaning_bn: "সর্বকর্তৃত্বময়",
    name_ar: "الملك",
    name_bn: "আল-মালিক",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_04_al_malik.mp3",
  },
  {
    fojilot:
      "প্রত্যহ শেষ রাতে (উয়া কুদ্দূসু) নামুটি ১০০০ বার পড়লে রোগ ব্যধি থেকে মুক্ত থাকা যায়।  ",
    id: 5,
    meaning_bn: "নিষ্কলুষ, অতি পবিত্র",
    name_ar: "القدوس",
    name_bn: "আল-কুদ্দুস",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_05_al_kuddsh.mp3",
  },
  {
    fojilot:
      "এই নামটি ১১৫ বার কোন রুগির উপর পরে ফু দিবে, তাহলে আল্লাহ তায়ালা তাকে সুস্থতা ও আরোগ্য দান করবেন।  ",
    id: 6,
    meaning_bn: "নিরাপত্তা-দানকারী, শান্তি-দানকারী",
    name_ar: "السلام",
    name_bn: "আস-সালাম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_06_as_salam.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি কোন ভয়-ভীতির সময় ৬৩০ বার এ নামটি পাঠ করবে, ইনশাআল্লাহ্‌ সে সব ধরনের ভয়-ভীতি ও অনিষ্ঠ থেকে নিরাপদ থাকবে। যে ব্যক্তি এ নামটি পাঠ করবে বা লিখে নিজের সাথে রাখবে, আল্লাহ্‌ তায়ালা তাকে শয়তানের অন",
    id: 7,
    meaning_bn: "নিরাপত্তা ও ঈমান দানকারী",
    name_ar: "المؤمن",
    name_bn: "আল-মু'মিন",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_07_al_mu_min.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি গোসল করে ১১৫ বার এ নামটি পরবে, গোপন বিষয়াদি উপর অবগত হবে। সর্বদা পরলে সব বিপদ থেকে মুক্তি পাবে। ",
    id: 8,
    meaning_bn: "পরিপূর্ন রক্ষণাবেক্ষণকারী",
    name_ar: "المهيمن",
    name_bn: "আল-মুহাইমিন",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_08_al_muhaymin.mp3",
  },
  {
    fojilot:
      "৪০ দিন পর্যন্ত যে ব্যক্তি এ নামটি ৪০ বার পাঠ করবে, আল্লাহ তাকে সম্মানী ও অমুখাপেক্ষী বানিয়ে দিবেন। ",
    id: 9,
    meaning_bn: "পরাক্রমশালী, অপরাজেয়",
    name_ar: "العزيز",
    name_bn: "আল-আ'জীজ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_09_al_aziz.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি প্রতি দিন সকাল-বিকাল ২২৬ বার পড়লে যাবতীয় জুলুম থেকে মুক্তিপাবে।  ",
    id: 10,
    meaning_bn: "দুর্নিবার",
    name_ar: "الجبار",
    name_bn: "আল-জাব্বার",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_10_al_jabbar.mp3",
  },
  {
    fojilot: "এই নাম সর্বদা পড়লে মান সম্মান বৃদ্ধি পায় ও উন্নতি লাভ হয়।  ",
    id: 11,
    meaning_bn: "নিরঙ্কুশ শ্রেষ্ঠত্বের অধিকারী",
    name_ar: "المتكبر",
    name_bn: "আল-মুতাকাব্বিইর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_11_al_mutakabbir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি সাত দিন পর্যন্ত ধারাবাহিক ১০০ বার এ নামটি পাঠ করবে, ইনশাআল্লাহ্‌ সকল বিপদআপদ থেকে নিরাপদ থাকবে। ",
    id: 12,
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
  {
    fojilot:
      "নিয়মিত এ নামের যিকির করলে তার মর্যাদা, সম্মান ও শ্রেষ্ঠত্ব লাভ হবে।  ",
    id: "34",
    meaning_bn: "সর্বোচ্চ-মর্যাদাশীল",
    name_ar: "العظيم",
    name_bn: "আল-আ'জীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_34_al_azim.mp3",
  },
  {
    fojilot:
      "অধিকহারে এই নাম পাঠ করলে, সব রোগবালাই, দুঃখ ও দুর্দশা অপসারণ করা হয়, আল্লাহ্‌র দোয়া তার সম্পদ এবং সন্তানাদির উপর পরবে। ইনশাআল্লাহ্‌  ",
    id: "35",
    meaning_bn: "পরম ক্ষমাশীল",
    name_ar: "الغفور",
    name_bn: "আল-গফুর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_35_al_gofur.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি যদি, আর্থিক, মানসিক, শারীরিক ও আধ্যাত্মিক সমস্যার সম্মুখিন হন, ৪১ বার আল্লাহ্‌ এর এই নাম পাঠ করলে, আল্লাহ্‌ শীঘ্রই উদ্ধার প্রদান করবেন। ইনশাআল্লাহ্‌ ",
    id: "36",
    meaning_bn: "গুনগ্রাহী",
    name_ar: "الشكور",
    name_bn: "আশ্-শাকুর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_36_as_shakoor.mp3",
  },
  {
    fojilot:
      "এ নাম সর্বদা পাঠ করলে ও লিখে সঙ্গে রাখলে ইনশাআল্লাহ্‌ মর্যাদার উচ্চতা, সচ্ছলতা ও উদ্দেশ্যে সফলতা লাভ করবে। ",
    id: "37",
    meaning_bn: "উচ্চ-মর্যাদাশীল",
    name_ar: "العلي",
    name_bn: "আল-আ'লিইউ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_37_al_ali.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি কে যদি তার পদ থেকে বরখাস্ত করা হয়, তাহলে ৭ দিন রোযা রেখে এবং প্রতি দিন এই নাম ১০০০ বার পাঠ করলে, আল্লাহ্‌ তার পদ কে সম্মান এবং মর্যাদা দিয়ে পুনরায় ফিরিয়ে দিবেন। ইনশাআল্লাহ্‌   ",
    id: "38",
    meaning_bn: "সুমহান",
    name_ar: "الكبير",
    name_bn: "আল-কাবিইর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_38_al_kabir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি অধিক হারে পাঠ করবে এবং লিখে নিজের কাছে রেখে দিবে, ইনশাআল্লাহ্‌ সে সব ধরনের ভয়-ভীতি ও অনিষ্ঠ থেকে নিরাপদে থাকবে। ",
    id: "39",
    meaning_bn: "সংরক্ষণকারী",
    name_ar: "الحفيظ",
    name_bn: "আল-হা'ফীজ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_39_al_hafiz.mp3",
  },
  {
    fojilot:
      "৭ বার পড়ে পানিতে ফু দিয়ে সে পানি শিশুকে খাওয়ালে তার কান্না বন্ধ হয়।  ",
    id: "40",
    meaning_bn: "সকলের জীবনোপকরণ-দানকারী",
    name_ar: "المقيت",
    name_bn: "আল-মুক্বীত",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_40_al_muqeet.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি যদি কোন মানুষ বা কোন জিনিস কে ভয় পান, তাহলে বৃহস্পতিবার থেকে শুরু আট দিনের জন্য রাতে ও সকালে ৭০ বার এবং ৭০ বার (হাসবিয়াল্লাহুল-সাসিবু) পাঠ করলে, আল্লাহ্‌ তার ভয় ও মন্দ জিনিসের বিরুদ্ধে সুর",
    id: "41",
    meaning_bn: "হিসাব-গ্রহণকারী",
    name_ar: "الحسيب",
    name_bn: "আল-হাসীব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_41_al_hasib.mp3",
  },
  {
    fojilot:
      "এই নামটি মেশক ও জাফরান দিয়ে লিখে নিজের কাছে রাখবে বা ধুয়ে খেলে, তার সম্মান, মহিমা এবং মর্যাদা দিবে। ইনশাআল্লাহ্‌   ",
    id: "42",
    meaning_bn: "পরম মর্যাদার অধিকারী",
    name_ar: "الجليل",
    name_bn: "আল-জালীল",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_42_al_jalil.mp3",
  },
  {
    fojilot: "ঘুমানোর পূবে এ নামের যিকির করলে আলেম ও সৎ লোকের মর্যাদা লাভ হয়।",
    id: "43",
    meaning_bn: "সুমহান দাতা",
    name_ar: "الكريم",
    name_bn: "আল-কারীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_43_al_karim.mp3",
  },
  {
    fojilot:
      "এই নাম ৭ বার প্রতিদিন পাঠ করলে এবং নিজের ও তার পরিবারের উপর ফুঁ দিলে, আল্লাহ্‌ ধ্বংস ও বিপর্যয় থেকে আপনাকে এবং আপনার সম্পদ রক্ষা করবেন। ইনশাআল্লাহ্‌  ",
    id: "44",
    meaning_bn: "তত্ত্বাবধায়ক",
    name_ar: "الرقيب",
    name_bn: "আর-রক্বীব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_44_ar_rakib.mp3",
  },
  {
    fojilot:
      "সর্বদা এই নাম পাঠ করলে আল্লাহ্‌ তায়ালা তার দোয়া কবুল করেন আর নামটি লিখে নিজের কাছে রাখলে সে বিপদ থেকে মুক্তি পাবে।  ",
    id: "45",
    meaning_bn: "জবাব-দানকারী, কবুলকারী",
    name_ar: "المجيب",
    name_bn: "আল-মুজীব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_45_al_muzib.mp3",
  },
  {
    fojilot:
      "অধিক পরিমাণে এ নামের যিকির করলে আল্লাহ্‌ তায়ালা তাকে প্রকাশ্য ও ভিতরগত অমুখাপেক্ষিতা ও বরকত দান করবে। ",
    id: "46",
    meaning_bn: "সর্ব-ব্যাপী, সর্বত্র-বিরাজমান",
    name_ar: "الواسع",
    name_bn: "আল-ওয়াসি'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_46_al_washi.mp3",
  },
  {
    fojilot:
      "ক্রমাগত এই নাম পাঠ করলে, আল্লাহ্‌ তায়ালা তার জন্য জ্ঞান বিজ্ঞানের দ্বার খুলে দিবেন। ",
    id: "47",
    meaning_bn: "পরম-প্রজ্ঞাময়",
    name_ar: "الحكيم",
    name_bn: "আল-হাকীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_47__al_hakim.mp3",
  },
  {
    fojilot:
      "১০০ বার পড়ে খাদ্যে ফু দিয়ে স্বামী স্ত্রী থেলে তাদের মধ্যে ভালবাসা সৃষ্টি হয়। ",
    id: "48",
    meaning_bn: "(বান্দাদের প্রতি) সদয়",
    name_ar: "الودود",
    name_bn: "আল-ওয়াদুদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_48_al_wadud.mp3",
  },
  {
    fojilot:
      "প্রত্যহ সকালে ও সন্ধ্যায় ১০০ বার পড়ে শরীরে ফু দিলে সমাজে মর্যাদা বৃদ্ধি পায়।  ",
    id: "49",
    meaning_bn: "সকল-মর্যাদার-অধিকারী",
    name_ar: "المجيد",
    name_bn: "আল-মাজীদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_49_al_majid.mp3",
  },
  {
    fojilot:
      "নিদ্রার পূর্বে বুকের উপর হাত রেখে ১০০০ বার পড়লে জ্ঞান ও হেকমত বৃদ্ধি পায়।  ",
    id: "50",
    meaning_bn: "পুনুরুজ্জীবিতকারী",
    name_ar: "الباعث",
    name_bn: "আল-বাই'ছ'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_50_al_ba_ith.mp3",
  },
  {
    fojilot: "এ নামের যিকির বেশী বেশী পড়লে অন্তরের খারাপ বাসনা দূর হয়। ",
    id: "51",
    meaning_bn: "সর্বজ্ঞ-স্বাক্ষী",
    name_ar: "الشهيد",
    name_bn: "আশ্-শাহীদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_51_as_sahid.mp3",
  },
];

export default ALLAH_NAMES;
