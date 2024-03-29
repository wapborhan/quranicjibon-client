import React from "react";
import { NavLink } from "react-router-dom";
const QurbaniDetails = () => {
  return (
    <div className="container">
      <h2 className="topbarpt"> কি পরিমান টাকা থাকলে কোরবানি ওয়াজিব হবে?</h2>
      <p className="pra-details">
        জিলহজ্ব মাসের ১০, ১১ ও ১২ তারিখে নিজের এবং পরিবারের প্রয়োজনের অতিরিক্ত
        সাড়ে বায়ান্ন ভরি রুপা বা তার মূল্য পরিমাণ সম্পদের মালিক হলে কুরবানী
        ওয়াজিব হবে। <br />
        বর্তমান সময়ে বাংলাদেশে বাজারে এক ভরি ২২ ক্যারেট রুপার দাম ১৫১৬ টাকা।
        অতএব নেসাব পরিমাণ টাকা হবে (১৫১৬ × ৫২.৫০=৭৯৫৯০) টাকা। <br />
        আর এক ভরি ২১ ক্যারেট রুপার দাম ১৪৩৪ টাকা। অতএব নেসাব
        হবে(১৪৩৪×৫২.৫০=৭৫২৮৫) টাকা। <br />
        ১৮ ক্যারেট এক ভরি রুপার মূল্য ১২২৪ টাকা। অতএব নেসাব হবে (১২২৪×৫২.৫০=
        ৬৪২৬০) টাকা।
        <br /> মোট কথা হচ্ছে প্রয়োজনের অতিরিক্ত সর্বনিম্ন ৬৪২৬০ টাকা বা
        সমপরিমাণ সম্পদ থাকলে কুরবানী ওয়াজিব হবে। <br />
        <br />
        যে জমি বাৎসরিক খোরাকীর জন্য প্রয়োজন হয়না এবং প্রয়োজন-অতিরিক্ত
        আসবাবপত্র- এসবই কুরবানীর নেসাবের ক্ষেত্রে হিসাব যোগ্য। উল্লেখ্য,
        স্বর্ণ-রুপার বাজারমূল্যে যেহেতু হ্রাস- বৃদ্ধি ঘটে,তাই তাৎক্ষণিক সাড়ে
        বায়ান্ন(৫২.৫০) ভরি রুপার বাজার মূল্য হিসাব করে কুরবানীর নেসাব বের করা
        যাবে। আলমুহীতল
        <br />
        <br />
        বুরহানী,৮/৪৫৫; খুলাসাতুল ফাতাওয়া,৪/৩০৯।
      </p>
      <br />

      <div className="btn btn-primary text-white text-center">
        <NavLink
          to="/pages/qurbani"
          className="text-light text-decoration-none"
        >
          {" "}
          হিসেব করুন{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default QurbaniDetails;
