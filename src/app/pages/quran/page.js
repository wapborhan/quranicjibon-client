import Quran from "@/pages/quran/Quran";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/quran`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const suras = await getData();

  return (
    <div className="w-full lg:w-full md:w-full  px-2 pb-10 h-full mx-auto overflow-y-auto">
      <Quran suras={suras} />
    </div>
  );
};

export default page;
