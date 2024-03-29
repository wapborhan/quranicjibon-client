import React from "react";
import TasbihCount from "./TasbihCount";
import "../../assets/stylesheet/tasbih.css";

const index = () => {
  return (
    <div className="container topbarpt">
      <div id="popups tasbih" className="mt-3 card ">
        <div className="card-body">
          <div className="popup-headung">
            <span className="ortho popup-head">
              ৫ ওয়াক্ত ফরজ নামাজের পর সবচেয়ে উত্তম কাজ হলো: তাজবিহ পাঠ করা
            </span>
            <div className="popup-text">
              <span className="ortho popup-text-content">
                রাসূলুল্লাহ (সা.) ইরশাদ করেছেন, ‘যে ব্যক্তি প্রত্যেক নামাজের পর
                ৩৩ বার সুবহানাল্লাহ, ৩৩ বার আলহামদুলিল্লাহ এবং ৩৩ বার আল্লাহু
                আকবার পাঠ করবে, আল্লাহ তার সব পাপ ক্ষমা করে দেবেন, যদিও গোনাহ
                সমুদ্রের ফেনা পরিমাণ হয়।’ (সহিহ মুসলিম)।
              </span>
              {/* <div className="d-flex">
          <button className="popup-colse-button"
          //  onclick="closePopup()"
           >
            পপ আপ বন্ধ করুন
          </button>
          <button className="popup-colse-button" onclick="relodWindow()">
            আবার শুরু করুন
          </button>
        </div> */}
            </div>
          </div>
        </div>
      </div>
      <TasbihCount />
    </div>
  );
};

export default index;
