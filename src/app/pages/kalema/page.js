import Kalema from "@/pages/kalema/Kalema";
import axiosInstance from "@/utils/axiosInstance";

// const getKalemaData = async () => {
//   try {
//     const res = await axiosInstance.get("/kalema");
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching Allah names:", error);
//     return [];
//   }
// };

const Page = async () => {
  // const kalemas = await getKalemaData();
  const kalemas = [];

  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      <Kalema kalemas={kalemas} />
    </div>
  );
};

export default Page;
