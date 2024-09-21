import Kalema from "@/pages/kalema/Kalema";
import axiosInstance from "@/utils/axiosInstance";

const Page = async () => {
  // const res = await fetch(`https://quranicjibon.vercel.app/api/kalema`);
  const res = await axiosInstance.get("/api/kalema");
  const kalemas = await res.data;

  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      <Kalema kalemas={kalemas} />
    </div>
  );
};

export default Page;
