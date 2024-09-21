import Settings from "@/components/shared/Settings";
import SideContentHeader from "@/pages/SideContentHeader";
import SideContentList from "@/pages/SideContentList";
import SuraDetils from "@/pages/quran/details/SuraDetils";
import axiosInstance from "@/utils/axiosInstance";

const getSuras = async () => {
  try {
    const res = await axiosInstance.get("/quran");
    return res.data;
  } catch (error) {
    console.error("Error fetching Allah names:", error);
    return []; // Return an empty array in case of failure to prevent crashes
  }
};
const getSura = async (id) => {
  try {
    const res = await axiosInstance.get(`/quran/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching Allah names:", error);
    return []; // Return an empty array in case of failure to prevent crashes
  }
};
const getSuraDetails = async (id) => {
  try {
    const res = await axiosInstance.get(`/quran/sura/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching Allah names:", error);
    return []; // Return an empty array in case of failure to prevent crashes
  }
};

const Page = async ({ params }) => {
  const suras = await getSuras();
  const sura = await getSura(params.id);
  const ayahs = await getSuraDetails(params.id);

  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks dark:text-gray-300">
        <SideContentHeader
          content={[{ id: 1, name: "Quran", status: "active" }]}
          suras={sura}
        />
        <div className="p-2 h-[cal(100%-120px)] overflow-y-auto mb-2">
          <SideContentList suras={suras} />
        </div>
      </div>

      <div className="w-10/12 h-full pb-16 md:pb-0 flex flex-col md:bg-white md:rounded-2xl overflow-hidden dark:bg-darks dark:text-gray-300 mx-auto">
        <SuraDetils ayahs={ayahs} sura={sura} />
      </div>
      <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks dark:text-gray-300">
        <Settings />
      </div>
    </div>
  );
};

export default Page;
