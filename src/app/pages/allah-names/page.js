import NameList from "@/pages/names/NameList";
import axiosInstance from "@/utils/axiosInstance";

// const getAllahNames = async () => {
//   try {
//     const res = await axiosInstance.get("/allah-name");
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching Allah names:", error);
//     return []; // Return an empty array in case of failure to prevent crashes
//   }
// };

const page = async () => {
  // const names = await getAllahNames();
  const names = [];
  return (
    <div className="w-full lg:w-9/12 md:w-9/12 px-2 pb-10 h-full mx-auto overflow-y-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 py-5">
        {names && names.map((name) => <NameList name={name} key={name.id} />)}
      </div>
    </div>
  );
};

export default page;
