import React from "react";

async function getData(id) {
  const res = await fetch(`${process.env.API_URL}/api/quran/sura/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = () => {
  return <div>SuraDetails</div>;
};

export default page;
