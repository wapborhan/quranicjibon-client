import Settings from "@/components/shared/Settings";
import SideContentHeader from "@/pages/SideContentHeader";
import SideContentList from "@/pages/SideContentList";
import SuraDetils from "@/pages/quran/details/SuraDetils";
import axiosInstance from "@/utils/axiosInstance";

const Page = async ({ params }) => {
  const [surasRes, suraRes, ayahsRes] = await Promise.all([
    axiosInstance.get("/api/quran"),
    axiosInstance.get(`/api/quran/${params.id}`),
    axiosInstance.get(`/api//quran/sura/${params.id}`),
  ]);
  const suras = surasRes.data;
  const sura = suraRes.data;
  const ayahs = ayahsRes.data;

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
