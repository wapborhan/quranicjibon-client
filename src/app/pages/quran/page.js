import Quran from "@/pages/quran/Quran";
import axiosInstance from "@/utils/axiosInstance";

const page = async () => {
  // const res = await fetch(`https://quranicjibon.vercel.app/api/quran`);
  const res = await axiosInstance.get("/api/quran");
  const suras = await res.data;

  return (
    <div className="w-full lg:w-full md:w-full  px-2 pb-10 h-full mx-auto overflow-y-auto">
      <Quran suras={suras} />
    </div>
  );
};

export default page;
