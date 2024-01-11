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
    id: 13,
    meaning_bn: "সঠিকভাবে সৃষ্টিকারী",
    name_ar: "البارئ",
    name_bn: "আল-বারী",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_13_al_bari.mp3",
  },
  {
    fojilot:
      "বন্ধ্যা নারী যদি সাতদিন রোযা রাখে এবং পানি দ্বারা ইফতার করার পর (ইয়া বারী-উল মুছউইর) ২১ বার পাঠ করবে, তাহলে ইনশাআল্লাহ্‌ তার পুত্র সন্তান লাভ হবে। ",
    id: 14,
    meaning_bn: "আকৃতি-দানকারী",
    name_ar: "المصور",
    name_bn: "আল-মুছউইর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_14_al_musawir.mp3",
  },
  {
    fojilot: "জুম্মার নামাযের পর ১০০ বার পড়লে গুনাহ মাফ হয় ও অভাব দূর হয়।  ",
    id: 15,
    meaning_bn: "পরম ক্ষমাশীল",
    name_ar: "الغفار",
    name_bn: "আল-গফ্ফার",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_15_al_goffar.mp3",
  },
  {
    fojilot:
      "ক্রমাগত আল্লাহ্‌র এই নাম পাঠ করলে, পার্থিব ভালবাসা থেকে আপনি মুক্তি পাবেন এবং পরিবর্তে আল্লাহ্‌র ভালবাসা আপানার হৃদয়ে সহজাত হয়ে যাবে। ইনশাআল্লাহ্‌ ",
    id: 16,
    meaning_bn: "কঠোর",
    name_ar: "القهار",
    name_bn: "আল-ক্বাহার",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_16_al_kohhar.mp3",
  },
  {
    fojilot:
      "চাশতের নামাযের পর সেজদায় গিয়ে ১০০ বার পড়লে অর্থ ও প্রভাব বৃদ্ধি পায়।   ",
    id: 17,
    meaning_bn: "সবকিছু দানকারী",
    name_ar: "الوهاب",
    name_bn: "আল-ওয়াহ্হাব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_17_al_wahhav.mp3",
  },
  {
    fojilot: "ফজরের নামাযের পূবে এই নামের যিকির করলে রিযিক বৃদ্ধি পায়। ",
    id: 18,
    meaning_bn: "রিযকদাতা",
    name_ar: "الرزاق",
    name_bn: "আর-রজ্জাক্ব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_18_ar_razzak.mp3",
  },
  {
    fojilot:
      "ফযরের নামাজের পর দুই হাত বুকের উপর রেখে ৭০ বার এই নাম পাঠ করলে, ইনশাআল্লাহ্‌ তার অন্তর ঈমানের জ্যোতি দ্বারা আলোকিত হবে।   ",
    id: 19,
    meaning_bn: "বিজয়দানকারী",
    name_ar: "الفتاح",
    name_bn: "আল ফাত্তাহ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_19_al_fettah.mp3",
  },
  {
    fojilot:
      "এ নাম সর্বদা পড়লে জ্ঞান বৃদ্ধি পায় গুনাহ মাফ হয় ও মনের কপাট খুলে যায়।  ",
    id: 20,
    meaning_bn: "সর্বজ্ঞ",
    name_ar: "العليم",
    name_bn: "আল-আ'লীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_20_al_alim.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি ৪০ দিন এই নামটি ৪ টুকরা রুটির উপর লিখে খাবে, তিনি ক্ষুদা, পিপাসা ও ব্যথা বেদনা থেকে রক্ষা পাবে।",
    id: 21,
    meaning_bn: "সংকীর্ণকারী",
    name_ar: "القابض",
    name_bn: "আল-ক্ববিদ্ব'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_21_al_kobid.mp3",
  },
  {
    fojilot:
      "প্রতিদিন নামাজের পর মুনাজাত করে ১০ বার আল্লাহ্‌র এই নাম পাঠ করেন, আল্লাহ্‌ তায়ালা তাকে ধনী বনিয়ে দিবেন এবং কখন কার মুখাপেক্ষী হবে না। ",
    id: 22,
    meaning_bn: "প্রশস্তকারী",
    name_ar: "الباسط",
    name_bn: "আল-বাসিত",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_22_al_basit.mp3",
  },
  {
    fojilot:
      "প্রত্যহ ৫০০ বার এ নামের ‍পাঠ করলে আল্লাহ্‌ তায়ালা তার প্রয়োজন পূর্ণ করবেন ও সকল সমস্যা দূর করে দিবেন।  ",
    id: 23,
    meaning_bn: "অবনতকারী",
    name_ar: "الخافض",
    name_bn: "আল-খফিদ্বু",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_23_al_khafid.mp3",
  },
  {
    fojilot:
      "১০০ বার পড়লে, আল্লাহ্‌ আপানকে স্বয়ংসম্পূর্ণতা এবং সমগ্র সৃষ্টির স্বাধীনতা প্রদান করা হবে। ইনশাআল্লাহ্‌",
    id: 24,
    meaning_bn: "উন্নতকারী",
    name_ar: "الرافع",
    name_bn: "আর-রফীই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_24_ar_rofiu.mp3",
  },
  {
    fojilot:
      "প্রতি সোমবার ও শুক্রুবার মাগরিব নামাজ পরে এই নাম্ ৪০ বার পড়লে মর্যাদা বৃদ্ধি পায় ও সকলের নিকট সম্মানের পাত্র হয়।",
    id: 25,
    meaning_bn: "সম্মান-দানকারী",
    name_ar: "المعز",
    name_bn: "আল-মুই'জ্ব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_25_al_muaiz.mp3",
  },
  {
    fojilot:
      "নামাযের পর সেজদায় গিয়ে ৭৫ বার পড়ে দোয়া করলে শত্রুতা হতে মুক্তি পাওয়া যায় ।  ",
    id: 26,
    meaning_bn: "(অবিশ্বাসীদের) বেইজ্জতকারী",
    name_ar: "المذل",
    name_bn: "আল-মুদ্বি'ল্লু",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_26_al_muzil.mp3",
  },
  {
    fojilot:
      "শুক্রুবার চাশতের পর ৫০০/১০০/৫০ বার পড়ে দোয়া করলে দোয়া কবুল হয়।   ",
    id: 27,
    meaning_bn: "সর্বশ্রোতা",
    name_ar: "السميع",
    name_bn: "আস্-সামিই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_27_as_sami.mp3",
  },
  {
    fojilot:
      "জুম্মার নামাযের পর ১০০ বার পড়লে দৃষ্টিতে আলো ও অন্তরে জ্যোতি সৃষ্টি হবে।  ",
    id: 28,
    meaning_bn: "সর্ববিষয়-দর্শনকারী",
    name_ar: "البصير",
    name_bn: "আল-বাছীর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_28_al_basir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি অধিক হারে পাঠ করবে, আল্লাহ্‌ তালা তার জন্য জ্ঞান-বিজ্ঞানের দ্বার খুলে দিবেন। ",
    id: 29,
    meaning_bn: "অটল বিচারক",
    name_ar: "الحكم",
    name_bn: "আল-হা'কাম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_29_al_hakam.mp3",
  },
  {
    fojilot:
      "শুক্রবার রাতে বিশ টুকরা রুটির উপর লিখে খেলে আল্লাহ্‌ তায়ালা সৃষ্টজীবকে তার অনুগত করে দিবেন। ",
    id: 30,
    meaning_bn: "পরিপূর্ণ-ন্যায়বিচারক",
    name_ar: "العدل",
    name_bn: "আল-আ'দল",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_30_al_adl.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি ১৩৩ বার পাঠ করবে, ইনশাআল্লাহ্‌ তার খাদ্যে বরকত হবে এবং তার সব কাজ সুন্দরভাবে পূর্ণ হবে। ",
    id: 31,
    meaning_bn: "সকল-গোপন-বিষয়ে-অবগত",
    name_ar: "اللطيف",
    name_bn: "আল-লাতীফ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_31_al_latif.mp3",
  },
  {
    fojilot: "৭ দিন পর্যন্ত এ নাম পড়তে থাকলে গোপন তথ্য অবগত হওয়া যায়।   ",
    id: 32,
    meaning_bn: "সকল ব্যাপারে জ্ঞাত",
    name_ar: "الخبير",
    name_bn: "আল-খ'বীর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_32_al_khobir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি এই নামটি কাগজে লিখে, পানিতে এটি ডুবিয়ে রেখে এবং সে পানি শস্য ক্ষেত্রে অথবা কোন জিনিসের উপর ছিটিয়ে দিবে, আল্লাহ্‌ তায়ালা তার ফসল নষ্ট করবেনা, বরং সংরক্ষন করবেন। ",
    id: 33,
    meaning_bn: "অত্যন্ত ধৈর্যশীল",
    name_ar: "الحليم",
    name_bn: "আল-হা'লীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_33_al_halim.mp3",
  },
  {
    fojilot:
      "নিয়মিত এ নামের যিকির করলে তার মর্যাদা, সম্মান ও শ্রেষ্ঠত্ব লাভ হবে।  ",
    id: 34,
    meaning_bn: "সর্বোচ্চ-মর্যাদাশীল",
    name_ar: "العظيم",
    name_bn: "আল-আ'জীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_34_al_azim.mp3",
  },
  {
    fojilot:
      "অধিকহারে এই নাম পাঠ করলে, সব রোগবালাই, দুঃখ ও দুর্দশা অপসারণ করা হয়, আল্লাহ্‌র দোয়া তার সম্পদ এবং সন্তানাদির উপর পরবে। ইনশাআল্লাহ্‌  ",
    id: 35,
    meaning_bn: "পরম ক্ষমাশীল",
    name_ar: "الغفور",
    name_bn: "আল-গফুর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_35_al_gofur.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি যদি, আর্থিক, মানসিক, শারীরিক ও আধ্যাত্মিক সমস্যার সম্মুখিন হন, ৪১ বার আল্লাহ্‌ এর এই নাম পাঠ করলে, আল্লাহ্‌ শীঘ্রই উদ্ধার প্রদান করবেন। ইনশাআল্লাহ্‌ ",
    id: 36,
    meaning_bn: "গুনগ্রাহী",
    name_ar: "الشكور",
    name_bn: "আশ্-শাকুর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_36_as_shakoor.mp3",
  },
  {
    fojilot:
      "এ নাম সর্বদা পাঠ করলে ও লিখে সঙ্গে রাখলে ইনশাআল্লাহ্‌ মর্যাদার উচ্চতা, সচ্ছলতা ও উদ্দেশ্যে সফলতা লাভ করবে। ",
    id: 37,
    meaning_bn: "উচ্চ-মর্যাদাশীল",
    name_ar: "العلي",
    name_bn: "আল-আ'লিইউ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_37_al_ali.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি কে যদি তার পদ থেকে বরখাস্ত করা হয়, তাহলে ৭ দিন রোযা রেখে এবং প্রতি দিন এই নাম ১০০০ বার পাঠ করলে, আল্লাহ্‌ তার পদ কে সম্মান এবং মর্যাদা দিয়ে পুনরায় ফিরিয়ে দিবেন। ইনশাআল্লাহ্‌   ",
    id: 38,
    meaning_bn: "সুমহান",
    name_ar: "الكبير",
    name_bn: "আল-কাবিইর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_38_al_kabir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি অধিক হারে পাঠ করবে এবং লিখে নিজের কাছে রেখে দিবে, ইনশাআল্লাহ্‌ সে সব ধরনের ভয়-ভীতি ও অনিষ্ঠ থেকে নিরাপদে থাকবে। ",
    id: 39,
    meaning_bn: "সংরক্ষণকারী",
    name_ar: "الحفيظ",
    name_bn: "আল-হা'ফীজ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_39_al_hafiz.mp3",
  },
  {
    fojilot:
      "৭ বার পড়ে পানিতে ফু দিয়ে সে পানি শিশুকে খাওয়ালে তার কান্না বন্ধ হয়।  ",
    id: 40,
    meaning_bn: "সকলের জীবনোপকরণ-দানকারী",
    name_ar: "المقيت",
    name_bn: "আল-মুক্বীত",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_40_al_muqeet.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি যদি কোন মানুষ বা কোন জিনিস কে ভয় পান, তাহলে বৃহস্পতিবার থেকে শুরু আট দিনের জন্য রাতে ও সকালে ৭০ বার এবং ৭০ বার (হাসবিয়াল্লাহুল-সাসিবু) পাঠ করলে, আল্লাহ্‌ তার ভয় ও মন্দ জিনিসের বিরুদ্ধে সুর",
    id: 41,
    meaning_bn: "হিসাব-গ্রহণকারী",
    name_ar: "الحسيب",
    name_bn: "আল-হাসীব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_41_al_hasib.mp3",
  },
  {
    fojilot:
      "এই নামটি মেশক ও জাফরান দিয়ে লিখে নিজের কাছে রাখবে বা ধুয়ে খেলে, তার সম্মান, মহিমা এবং মর্যাদা দিবে। ইনশাআল্লাহ্‌   ",
    id: 42,
    meaning_bn: "পরম মর্যাদার অধিকারী",
    name_ar: "الجليل",
    name_bn: "আল-জালীল",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_42_al_jalil.mp3",
  },
  {
    fojilot: "ঘুমানোর পূবে এ নামের যিকির করলে আলেম ও সৎ লোকের মর্যাদা লাভ হয়।",
    id: 43,
    meaning_bn: "সুমহান দাতা",
    name_ar: "الكريم",
    name_bn: "আল-কারীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_43_al_karim.mp3",
  },
  {
    fojilot:
      "এই নাম ৭ বার প্রতিদিন পাঠ করলে এবং নিজের ও তার পরিবারের উপর ফুঁ দিলে, আল্লাহ্‌ ধ্বংস ও বিপর্যয় থেকে আপনাকে এবং আপনার সম্পদ রক্ষা করবেন। ইনশাআল্লাহ্‌  ",
    id: 44,
    meaning_bn: "তত্ত্বাবধায়ক",
    name_ar: "الرقيب",
    name_bn: "আর-রক্বীব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_44_ar_rakib.mp3",
  },
  {
    fojilot:
      "সর্বদা এই নাম পাঠ করলে আল্লাহ্‌ তায়ালা তার দোয়া কবুল করেন আর নামটি লিখে নিজের কাছে রাখলে সে বিপদ থেকে মুক্তি পাবে।  ",
    id: 45,
    meaning_bn: "জবাব-দানকারী, কবুলকারী",
    name_ar: "المجيب",
    name_bn: "আল-মুজীব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_45_al_muzib.mp3",
  },
  {
    fojilot:
      "অধিক পরিমাণে এ নামের যিকির করলে আল্লাহ্‌ তায়ালা তাকে প্রকাশ্য ও ভিতরগত অমুখাপেক্ষিতা ও বরকত দান করবে। ",
    id: 46,
    meaning_bn: "সর্ব-ব্যাপী, সর্বত্র-বিরাজমান",
    name_ar: "الواسع",
    name_bn: "আল-ওয়াসি'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_46_al_washi.mp3",
  },
  {
    fojilot:
      "ক্রমাগত এই নাম পাঠ করলে, আল্লাহ্‌ তায়ালা তার জন্য জ্ঞান বিজ্ঞানের দ্বার খুলে দিবেন। ",
    id: 47,
    meaning_bn: "পরম-প্রজ্ঞাময়",
    name_ar: "الحكيم",
    name_bn: "আল-হাকীম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_47__al_hakim.mp3",
  },
  {
    fojilot:
      "১০০ বার পড়ে খাদ্যে ফু দিয়ে স্বামী স্ত্রী থেলে তাদের মধ্যে ভালবাসা সৃষ্টি হয়। ",
    id: 48,
    meaning_bn: "(বান্দাদের প্রতি) সদয়",
    name_ar: "الودود",
    name_bn: "আল-ওয়াদুদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_48_al_wadud.mp3",
  },
  {
    fojilot:
      "প্রত্যহ সকালে ও সন্ধ্যায় ১০০ বার পড়ে শরীরে ফু দিলে সমাজে মর্যাদা বৃদ্ধি পায়।  ",
    id: 49,
    meaning_bn: "সকল-মর্যাদার-অধিকারী",
    name_ar: "المجيد",
    name_bn: "আল-মাজীদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_49_al_majid.mp3",
  },
  {
    fojilot:
      "নিদ্রার পূর্বে বুকের উপর হাত রেখে ১০০০ বার পড়লে জ্ঞান ও হেকমত বৃদ্ধি পায়।  ",
    id: 50,
    meaning_bn: "পুনুরুজ্জীবিতকারী",
    name_ar: "الباعث",
    name_bn: "আল-বাই'ছ'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_50_al_ba_ith.mp3",
  },
  {
    fojilot: "এ নামের যিকির বেশী বেশী পড়লে অন্তরের খারাপ বাসনা দূর হয়। ",
    id: 51,
    meaning_bn: "সর্বজ্ঞ-স্বাক্ষী",
    name_ar: "الشهيد",
    name_bn: "আশ্-শাহীদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_51_as_sahid.mp3",
  },
  {
    fojilot:
      "যদি, পরিবারের কোন সদস্য নিখোঁজ বা পলাতক বা জিনিসপত্র চুরি হয়ে থাকলে, চারকোণ বিশিষ্ট কাগজের চতুষ্কোণে নামটি লিখে সেহরীর সময় হাতের তালুর উপর রেখে আকাশের দিকে উঠিয়ে দোয়া করবে, ইনশাআল্লাহ্‌ যে কোন ব্যক্তি",
    id: 52,
    meaning_bn: "পরম সত্য",
    name_ar: "الحق",
    name_bn: "আল-হা'ক্ব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_52_al_hakk.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি বিপদ আপদের সময় ভয়ে অধিক হারে এই নামটি পাঠ করবে, ইনশাআল্লাহ্‌ বিপদ আপদ থেকে নিরাপদ থাকবে।",
    id: 53,
    meaning_bn: "পরম নির্ভরযোগ্য কর্ম-সম্পাদনকারী",
    name_ar: "الوكيل",
    name_bn: "আল-ওয়াকিল",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_53_al_wakil.mp3",
  },
  {
    fojilot: "জুম্মার পর এ নামের যিকির করলে যুলুম থেকে বাচা যায়। ",
    id: 54,
    meaning_bn: "পরম-শক্তির-অধিকারী",
    name_ar: "القوي",
    name_bn: "আল-ক্বউইউ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_54_al_qawiy.mp3",
  },
  {
    fojilot:
      "যে কোন ভদ্রমহিলা এর বুকের দুধের না থাকলে এক টুকরো কাগজের উপর আল্লাহ্‌ এর এই নাম লিখে পানিতে ডুবিয়ে রেখে তারপর এটি পান করলে তার বুকের মধ্যে দুধ আসবে ইনশাআল্লাহ্‌",
    id: 55,
    meaning_bn: "সুদৃঢ়",
    name_ar: "المتين",
    name_bn: "আল-মাতীন",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_55_al_matin.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি অধিক হারে এই নামটি পড়বে সে সৃষ্ট জীবের গোপন তথ্য সম্পর্কে জানবে।",
    id: 56,
    meaning_bn: "অভিভাবক ও সাহায্যকারী",
    name_ar: "الولي",
    name_bn: "আল-ওয়ালিইউ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_56_al_waali.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি ৪৫ দিন পর্যন্ত ধারাবাহিক ৯৩ বার নির্জনতায় নামটি পাঠ করবে, ইনশাআল্লাহ্‌ সকল অসৎ স্বভাব দূর হয়ে যাবে এবং তার থেকে উত্তম কার্যাবলী প্রকাশ পাবে। ",
    id: 57,
    meaning_bn: "সকল প্রশংসার অধিকারী",
    name_ar: "الحميد",
    name_bn: "আল-হা'মীদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_57_al_hamid.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি রুটির ২০ টি টুকরোর উপর প্রতিদিন ২০ বার এই নামটি পড়ে ফু দিবে এবং খাবে তাহলে ইনশাআল্লাহ্‌ সৃষ্টি জগত তার অনুগত হয়ে যাবে।",
    id: 58,
    meaning_bn: "সকল সৃষ্টির ব্যপারে অবগত",
    name_ar: "المحصي",
    name_bn: "আল-মুহছী",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_58_al_muhsi.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি সেহরীর সময় গর্ভবতি নারীর পেটের উপর হাত রেখে ৯৯ বার এই নামটি পাঠ করবে, ইনশাআল্লাহ্‌ না তার গর্ভপাত হবে, না সময়ের আগে বাচ্চা ভূমিষ্ঠ হবে। ",
    id: 59,
    meaning_bn: "প্রথমবার-সৃষ্টিকর্তা",
    name_ar: "المبدئ",
    name_bn: "আল-মুব্দি'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_59_al_mubdi.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি হারিয়ে গেলে যখন গৃহের সকল ব্যক্তি ঘুমিয়ে পড়বে তখন হারানো ব্যক্তিকে ফেরত আনার জন্য গৃহের ৪ কোণে ৭০ বার নামটি পড়বে, ইনশাআল্লাহ্‌ হারানো ব্যক্তি ৭ দিনের মধ্যে ফেরত আসবে অথবা তার কোন খবর পাওয়া",
    id: 60,
    meaning_bn: "পুনরায়-সৃষ্টিকর্তা",
    name_ar: "المعيد",
    name_bn: "আল-মুঈ'দ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_60_al_mueed.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি অসুস্থ হবে সে অধিক হারে পাঠ করবে অথবা কোন রোগীর উপর ফু দিবে তাহলে ইনশাআল্লাহ্‌ সুস্থ হয়ে যাবে।",
    id: 61,
    meaning_bn: "জীবন-দানকারী",
    name_ar: "المحيي",
    name_bn: "আল-মুহ'য়ী",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_61_al_muhi.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি আত্মার নিয়ন্ত্রনে না থাকে সে শয়ন কালে বক্ষদেশে হাত রেখে এই নামটি পড়তে পড়তে ঘুমিয়ে পড়বে। আল্লাহ্‌ চান তো তার নফস বাধ্য ও অনুগত হয়ে যাবে।  ",
    id: 62,
    meaning_bn: "মৃত্যু-দানকারী",
    name_ar: "المميت",
    name_bn: "আল-মুমীত",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_62_al_mumit.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি প্রতিদিন ৩০০০ বার এই নামটি পাঠ করবে ইনশাআল্লাহ্‌ সে কখনও অসুস্থ হবেনা।",
    id: 63,
    meaning_bn: "চিরঞ্জীব",
    name_ar: "الحي",
    name_bn: "আল-হাইয়্যু",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_63_al_haiyou.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি এই নামটি শেষ রাতে অধিকবার পড়বে, ইনশাআল্লাহ্‌ মানুষের হৃদয়ে তার মর্যাদা বৃদ্ধি পাবে।",
    id: 64,
    meaning_bn: "সমস্তকিছুর ধারক ও সংরক্ষণকারী",
    name_ar: "القيوم",
    name_bn: "আল-ক্বাইয়্যুম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_64_al_kaiyoum.mp3",
  },
  {
    fojilot: "খাওয়ার সময় পড়লে ওই খাদ্য কলবের শক্তি ও নূর সৃষ্টির সহায়ক হবে। ",
    id: 65,
    meaning_bn: "অফুরন্ত ভান্ডারের অধিকারী",
    name_ar: "الواجد",
    name_bn: "আল-ওয়াজিদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_65_al_wazid.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি নির্জনতায় এই নামটি অধিক পাঠ করলে, ইনশাআল্লাহ্‌ তার অন্তরের ভিতর আল্লাহ্‌ এর জ্যোতি প্রকাশ হতে শুরু করবে।",
    id: 66,
    meaning_bn: "শ্রেষ্ঠত্বের অধিকারী",
    name_ar: "الماجد",
    name_bn: "আল-মাজিদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_66_al_mazid.mp3",
  },
  {
    fojilot: "প্রত্যহ ১০০০ বার পাঠ করলে মন থেকে ভয় ভীতি দূর হয়ে যাবে।।  ",
    id: 67,
    meaning_bn: "এক ও অদ্বিতীয়",
    name_ar: "الواحد",
    name_bn: "আল-ওয়াহি'দ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_67_al_wahid.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি ভোর রাতে অথবা কিছু রাত থাকতে সেজদায় মাথা রেখে ১১৫ অথবা ১২৫ বার এই নামটি পড়বে, তার বাহ্যিক ও ভিতরগত ভাবে সত্যবাদিতা লাভ হবে এবং কোন অত্যাচারি দ্বারা পিষ্ট হবেনা।",
    id: 68,
    meaning_bn: "অমুখাপেক্ষী",
    name_ar: "الصمد",
    name_bn: "আছ্-ছমাদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_69_as_samad.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি ওজু করার সময় অঙ্গ প্রত্যঙ্গ ধৌত করার সময় প্রতিটি জোড়ার উপর এই নামটি পড়বে, সে কখন জালিমের থাবায় আবদ্ধ হবেনা। কোন শত্রু তার উপর বিজয় লাভ করতে পারবেনা।",
    id: 69,
    meaning_bn: "সর্বশক্তিমান",
    name_ar: "القادر",
    name_bn: "আল-ক্বদির",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_70_al_qaadir.mp3",
  },
  {
    fojilot:
      "যদি কেউ এই নামটি সর্বদা পড়ে তবে তার উদাসীনতা স্মরনের দ্বারা পরিবর্তিত হবে। যে ব্যক্তি নিদ্রা থেকে উঠার পর ২০ বার এই নামটি পড়বে, তবে তার সব কাজ ঠিক এবং সমাধান হয়ে যাবে।  ",
    id: 70,
    meaning_bn: "নিরঙ্কুশ-সিদ্বান্তের-অধিকারী",
    name_ar: "المقتدر",
    name_bn: "আল-মুক্ব্তাদির",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_71_al_muktadir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি যুদ্ধের সময় অধিক হারে পরবে অথবা লিখে নিজের কাছে রাখবে, আল্লাহ্‌ তায়ালা তাকে সামনে অগ্রসর হওয়ার ক্ষমতা দান করবেন এবং শত্রুদের থেকে নিরাপদ রাখবেন। ",
    id: 71,
    meaning_bn: "অগ্রসারক",
    name_ar: "المقدم",
    name_bn: "আল-মুক্বদ্দিম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_72_al_mu_koddim.mp3",
  },
  {
    fojilot:
      "প্রতিদিন ১০০ বার আল্লাহ্‌ এর নাম পাঠ করলে, তিনি দুর্মূল্য এবং আল্লাহর প্রিয় হয়ে যাবেন । ইনশাআল্লাহ্‌",
    id: 72,
    meaning_bn: "অবকাশ দানকারী",
    name_ar: "المؤخر",
    name_bn: "আল-মুয়াক্খির",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_73_al_muakhir.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি পুত্র সন্তান এর ইচ্ছা  পোষণ করলে, ৪০ দিনের জন্য ৪০ বার নামটি পাঠ করলে ইনশাআল্লাহ্‌ তার উদ্দেশ্য পুরন হবে। ",
    id: 73,
    meaning_bn: "সর্বপ্রথম ",
    name_ar: "الأول",
    name_bn: "আল-আউয়াল",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_74_al_auwal.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি প্রতিদিন ১০০০ বার পরবে, তার অন্তর থেকে আল্লাহ্‌ ছাড়া অন্য কিছুর ভালবাসা দূর হয়ে যাবে। ",
    id: 74,
    meaning_bn: "অনন্ত, সর্বশেষ",
    name_ar: "الأخر",
    name_bn: "আল-আখির",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_75_al_akhir.mp3",
  },
  {
    fojilot:
      "প্রত্যহ ইশরাক এর পর ৫০০ বার পড়লে চোখের দৃষ্টি শক্তি ও অন্তরে নূর লাভ হয় । ",
    id: 75,
    meaning_bn: "সম্পূর্নরূপে-প্রকাশিত",
    name_ar: "الظاهر",
    name_bn: "আজ-জ'হির",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_76_azjohir.mp3",
  },
  {
    fojilot:
      "প্রত্যহ ৩৩ বার পড়লে গোপন রহস্য জানা যাবে। তার অন্তরে আল্লাহ্‌র ভালবাসা সৃষ্টি হবে। ",
    id: 76,
    meaning_bn: "দৃষ্টি হতে অদৃশ্য",
    name_ar: "الباطن",
    name_bn: "আল-বাত্বিন",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_77_al_batin.mp3",
  },
  {
    fojilot: "এ নামের নিয়মিত যিকির করলে আল্লাহ বিপদ আপদ থেকে রক্ষা করে । ",
    id: 77,
    meaning_bn: "সমস্ত-কিছুর-অনিভাব্ক",
    name_ar: "الوالي",
    name_bn: "আল-ওয়ালি",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_78_al_wali.mp3",
  },
  {
    fojilot: "যে ব্যক্তি অধিক বার পরবে, ইনশাআল্লাহ্‌ তার সমস্যা দূর হবে। ",
    id: 78,
    meaning_bn: "সৃষ্টির গুনাবলীর উর্দ্ধে",
    name_ar: "المتعالي",
    name_bn: "আল-মুতাআ'লি",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_79_al_muta_ali.mp3",
  },
  {
    fojilot:
      "কোন ব্যক্তি ৭ বার আল্লাহ্‌র এই নাম পাঠ করে সন্তান জন্মের পর তার সন্তানের উপর ফুঁ দিলে, আল্লাহ্‌ বিপর্যয় থেকে তার সন্তান কে সুরক্ষা করবে। ইনশাআল্লাহ্‌",
    id: 79,
    meaning_bn: "পরম-উপকারী, অণুগ্রহশীল",
    name_ar: "البر",
    name_bn: "আল-বার্",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_80_al_barr.mp3",
  },
  {
    fojilot:
      "চাশতের নামাযের পর সেজদায় গিয়ে এ নামটি ৩০০ বার পড়বে, ইনশাআল্লাহ্‌ তার সত্য তওবা লাভ হবে। যে ব্যাক্তি এ নামটি বার বার পাঠ করবে, তার সকল কর্ম সহজ হবে। যদি কোন অত্যাচারীর উপর ফুঁ দেয়া হয় তবে ইনশাআল্লাহ্‌ ",
    id: 80,
    meaning_bn: "তাওবার তাওফিক দানকারী এবং কবুলকারী",
    name_ar: "التواب",
    name_bn: "আত্-তাওয়াব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_81_attaowad.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি ন্যায়ের উপর থাকে এবং শত্রু থেকে প্রতিশোধ নেয়ার ক্ষমতা না থাকে, সে তিন জুম্মা পর্যন্ত অধিকহারে (ইয়া মুনতাক্বিমু) পড়বে, আল্লাহ তায়ালা স্বয়ং তার থেকে প্রতিশোধ নিয়ে নিবেন। ",
    id: 81,
    meaning_bn: "প্রতিশোধ-গ্রহণকারী",
    name_ar: "المنتقم",
    name_bn: "আল-মুনতাক্বিম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_82_al_muntakim.mp3",
  },
  {
    fojilot:
      "যার প্রচুর গুনাহ আছে, সে লোকটি প্রতিনিয়ত এ নামটি পড়লে আল্লাহ তায়ালা তার গুনাহ ক্ষমা করে দিবেন। ",
    id: 82,
    meaning_bn: "পরম-উদার",
    name_ar: "العفو",
    name_bn: "আল-আ'ফঊ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_83_al_afu.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি দশবার দুরুদ শরীফ এবং দশবার এ নামটি পড়বে, তবে ইনশালাআল্লাহ তার ক্রোধ দূর হয়ে যাবে। অন্য রাগান্বিত  ব্যাক্তির উপর ফুঁ দিলে তবে তার রাগ দূর হবে। ",
    id: 83,
    meaning_bn: "পরম-স্নেহশীল",
    name_ar: "الرؤوف",
    name_bn: "আর-রউফ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_84_al_ra_oof.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি (ইয়া মালিকাল মুলক) সর্বদা পাঠ করবে, আল্লাহ তায়ালা তাকে লোকদের থেকে অমুখাপেক্ষী করে দিবেন। সে কার মুখাপেক্ষী থাকবে না।  ",
    id: 84,
    meaning_bn: "সমগ্র জগতের বাদশাহ্",
    name_ar: "مالك الملك",
    name_bn: "মালিকুল-মুলক",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_85_malikul_mulk.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি অধিকহারে পড়বে, আল্লাহ তায়ালা তাকে শ্রেষ্ঠত্ব ও সম্মান এবং সৃষ্টজগত থেকে অমুখাপেক্ষীতা দান করবেন। ",
    id: 85,
    meaning_bn: "মহিমান্বিত ও দয়াবান সত্তা",
    name_ar: "ذو الجلال والإكرام",
    name_bn: "যুল-জালালি-ওয়াল-ইকরাম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_86_zul_jalali_wal_ikrom.mp3",
  },
  {
    fojilot:
      "যে ব্যাক্তি এ নামটি প্রতিদিন ১০০ বার পড়বে, শয়তানের আনিদিষ্টতা ও কুমন্ত্রণা থেকে নিরাপদ থাকবে। যদি ৭ বার পড়ে তবে সে উদ্দেশ্য অর্জন হবে।  ",
    id: 86,
    meaning_bn: "হকদারের হক-আদায়কারী",
    name_ar: "المقسط",
    name_bn: "আল-মুক্ব্সিত",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_87_al_muksit.mp3",
  },
  {
    fojilot:
      "যার আত্মীয়-স্বজন ও বন্ধু বান্ধব বিক্ষিপ্ত হয়ে থাকে, সে চাশতের সময় গোসল করে আকাশের দিকে তাকিয়ে আল্লাহ্‌র এই নাম ১০০ বার পাঠ করলে তার পরিবারের হারানো সদস্য শিগ্রই খুঁজে পাবেন। ইনশাআল্লাহ্‌",
    id: 87,
    meaning_bn: "একত্রকারী, সমবেতকারী",
    name_ar: "الجامع",
    name_bn: "আল-জামিই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_88_al_jami.mp3",
  },
  {
    fojilot:
      "যে ব্যাক্তি প্রতিদিন ৭০ বার এই নামটি পড়বে, আল্লাহ তাআলা তার অর্থ-সম্পদ বরকত দান করবেন। ইনশাল্লাল্লাহ সে কারো মুখাপেক্ষী হবে না। ",
    id: 88,
    meaning_bn: "অমুখাপেক্ষী ধনী",
    name_ar: "الغني",
    name_bn: "আল-গণিই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_89_al_goni.mp3",
  },
  {
    fojilot:
      "যে ব্যাক্তি শুরু ও শেষে ১১ বার দুরুদ শরীফ পড়ে এগার শত এগার বার ওযীফার ন্যায় এ নামটি পড়বে, তবে আল্লাহ তায়ালা তাকে বাহিরগত ও ভিতরগত ধনী করে দিবেন।",
    id: 89,
    meaning_bn: "পরম-অভাবমোচনকারী",
    name_ar: "المغني",
    name_bn: "আল-মুগণিই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_90_al_mugni.mp3",
  },
  {
    fojilot:
      "যদি স্ত্রির সাথে ঝগড়া-বিবাদ অথবা তিক্ততা সৃষ্টি হয়ে থাকে, তবে বিছানায় শোয়ার সময় ২০ বার এ নামটি পড়বে, ইনশাল্লাহ ঝগড়া-বিবাদ ও তিক্ততা দূর হয়ে যাবে এবং পরস্পর ভালবাসা সৃষ্টি হয়ে যাবে।  ",
    id: 90,
    meaning_bn: "অকল্যানরোধক",
    name_ar: "المانع",
    name_bn: "আল-মানিই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_91_al_mani.mp3",
  },
  {
    fojilot:
      "সকাল সন্ধা এ নামের ‍যিকির করলে সকল ভাল কাজে সফলতা আসবে ইনশাআল্লাহ। ",
    id: 91,
    meaning_bn: "ক্ষতিসাধনকারী",
    name_ar: "الضار",
    name_bn: "আয্-যর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_92_addhor.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি কোন পরিচিত স্থানে পোঁছাবে এবং শুক্রবার রাতে যে ব্যক্তি নৌকা অথবা অন্য কোন যানবাহনে আরোহণের পর অধিকহারে পড়তে থাকবে,  ইনশাআল্লাহ্‌ ইচ্ছানুযায়ী কাজ হবে।",
    id: 92,
    meaning_bn: "কল্যাণকারী",
    name_ar: "النافع",
    name_bn: "আন্-নাফিই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_93_an_nafi.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি জুমার রাতে সাত বার সুরা নুর এবং এক হাজার বার এ নামটি পড়বে, তবে ইনশাআল্লাহ্‌ তার অন্তর আল্লাহর জ্যোতি দারা আলকিত হয়ে যাবে।",
    id: 93,
    meaning_bn: "পরম-আলো",
    name_ar: "النور",
    name_bn: "আন্-নূর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_94_an_nur.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি হাত উঠিয়ে আকাশ পানে মূখ করে এ নামটি অধিক হারে পড়বে,  অবশেষে মুখমন্ডলে হাত মুছে নিবে, ইনশাআল্লাহ্‌ তার পূর্ণ হেদায়েত লাভ হবে,  আর মারেফাত পন্থীদের মধ্যে অন্তভুক্ত হয়ে যাবে।  ",
    id: 94,
    meaning_bn: "পথ-প্রদর্শক",
    name_ar: "الهادي",
    name_bn: "আল-হাদী",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_95_al_hadi.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি কোন দুশ্চিন্তা বিপদাপদ অথবা কোন সমস্যা সম্মুখে আসে,  সে ১০০০ বার এ নামটি পড়বে ইনশাআল্লাহ্‌ সমস্যার সমাধান লাভ হবে।  ",
    id: 95,
    meaning_bn: "অতুলনীয়",
    name_ar: "البديع",
    name_bn: "আল-বাদীই'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_96_al_badi_i.mp3",
  },
  {
    fojilot:
      "জুম্মার রাতে যে ব্যক্তি এ নামটি ১০০ বার পড়বে, আল্লাহ তায়ালা তাকে সব ধরনের অনিষ্ট ও ক্ষতি থেকে নিরাপরাদ রাখবেন। ",
    id: 96,
    meaning_bn: "চিরস্থায়ী, অবিনশ্বর",
    name_ar: "الباقي",
    name_bn: "আল-বাক্বী",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_97_al_baki.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি প্রত্যহ সূর্যোদয়ের পূর্বক্ষণে ১০১ বার পড়বে, ইনশাআল্লাহ্‌ সে যাবতীয় দুঃখ- বেদনা, চিন্তা- ভাবনা, কঠোরতা ও বিপদ থেকে মুক্তি থাকবে।",
    id: 97,
    meaning_bn: "উত্তরাধিকারী",
    name_ar: "الوارث",
    name_bn: "আল-ওয়ারিস'",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_98_al_waris.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি নিজের কোন কাজ বা উদ্দেশ্য সমাধানের কোন তদবির বুঝে না আসে, মাগরিব ও এশার মাঝে সে (আর-রাশীদু) নামটি ১০০০ বার পড়বে, তবে ইনশাআল্লাহ্‌ স্বপ্নে তদ্বির দেখা যাবে, অথবা অন্তরে ঢেলে দেয়া হবে।  ",
    id: 98,
    meaning_bn: "সঠিক পথ-প্রদর্শক",
    name_ar: "الرشيد",
    name_bn: "আর-রাশীদ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_99_ar_rashid.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি সূর্যোদয়ের পূর্বে এ নামটি একশত বার পড়বে, ইনশাআল্লাহ্‌ সেদিন সে সকল বিপদাপদ থেকে নিরাপদ থাকবে ও বরকত লাভ হয়। শত্রু ও হিংসুকদের মুখ বন্ধ থাকবে। ",
    id: 99,
    meaning_bn: "অত্যধিক ধৈর্যধারণকারী",
    name_ar: "الصبور",
    name_bn: "আস-সবুর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_100_as_sobur.mp3",
  },
];

export default ALLAH_NAMES;
