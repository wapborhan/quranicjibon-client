import Suras from "@/pages/quran/details/Suras";
import axiosInstance from "@/utils/axiosInstance";

const getSuras = async () => {
  try {
    const res = await axiosInstance.get("/quran");
    return res.data;
  } catch (error) {
    console.error("Error fetching ", error);
    return [];
  }
};
const getSura = async (id) => {
  try {
    const res = await axiosInstance.get(`/quran/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching ", error);
    return [];
  }
};
const getSuraDetails = async (id) => {
  try {
    const res = await axiosInstance.get(`/quran/sura/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching ", error);
    return [];
  }
};

const Page = async ({ params }) => {
  const suras = await getSuras();
  const sura = await getSura(params.id);
  const ayahs = await getSuraDetails(params.id);

  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      <Suras suras={suras} />
    </div>
  );
};

export default Page;
