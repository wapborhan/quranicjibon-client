import React from "react";

const Alert = () => {
  return (
    <div className="alert alert-danger mx-4 text-center" role="alert">
      এই সাইট এর কাজ এখনও শেষ হইনি সুতরাং অনেক কিছু ঠিক ভাবে কাজ নাউ করতে পারে।
      আপনার মতামত দিতে{" "}
      <a
        href="https://www.facebook.com/photo?fbid=375507324584242&set=a.125115496290094"
        className="alert-link"
      >
        এখানে ক্লিক করুন।
      </a>
    </div>
  );
};

export default Alert;
