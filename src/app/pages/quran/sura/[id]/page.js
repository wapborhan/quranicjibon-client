import MainContent from "@/pages/MainContent";
import SideContentHeader from "@/pages/SideContentHeader";
import SideContentList from "@/pages/SideContentList";
import SuraDetils from "@/pages/quran/details/SuraDetils";

async function getSuras(id) {
  const res = await fetch(`${process.env.API_URL}/api/quran/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getSingleSura(id) {
  const res = await fetch(`${process.env.API_URL}/api/quran/sura/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ params }) => {
  const sura = await getSuras(params.id);
  const ayahs = await getSingleSura(params.id);

  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      {/* <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks dark:text-gray-300">
        <SideContentHeader
          content={[{ id: 1, name: "Quran", status: "active" }]}
          suras={suras}
        />
        <div className="p-2 h-[cal(100%-120px)] overflow-y-auto mb-2">
          <SideContentList suras={suras} />
        </div>
      </div> */}
      {/* <MainContent /> */}
      <div className="w-10/12 h-full pb-16 md:pb-0 flex flex-col md:bg-white md:rounded-2xl overflow-hidden dark:bg-darks dark:text-gray-300 mx-auto">
        <SuraDetils ayahs={ayahs} sura={sura} />
      </div>
    </div>
  );
};

export default Page;
