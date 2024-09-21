import Quran from "@/pages/quran/Quran";
import axiosInstance from "@/utils/axiosInstance";

// const getSuras = async () => {
//   try {
//     const response = await axiosInstance.get("/quran");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching Allah names:", error);
//     return []; // Return an empty array in case of failure to prevent crashes
//   }
// };

const page = async () => {
  // const suras = await getSuras();
  const suras = [];

  return (
    <div className="w-full lg:w-full md:w-full  px-2 pb-10 h-full mx-auto overflow-y-auto">
      <Quran suras={suras} />
    </div>
  );
};

export default page;
