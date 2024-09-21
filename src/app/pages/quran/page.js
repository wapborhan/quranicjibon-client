import Quran from "@/pages/quran/Quran";

const page = async () => {
  const res = await fetch(`${process.env.API_URL}/api/quran`);
  const suras = await res.json();

  return (
    <div className="w-full lg:w-full md:w-full  px-2 pb-10 h-full mx-auto overflow-y-auto">
      <Quran suras={suras} />
    </div>
  );
};

export default page;
