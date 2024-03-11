import MainContent from "@/components/pages/MainContent";
import SideContentHeader from "@/components/pages/SideContentHeader";
import SideContentList from "@/components/pages/SideContentList";

const page = () => {
  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-slate-600 dark:text-gray-300">
        <SideContentHeader />
        <div className="p-2 h-[cal(100%-120px)] overflow-y-auto mb-2">
          <SideContentList />
        </div>
      </div>
      <MainContent />
    </div>
  );
};

export default page;
