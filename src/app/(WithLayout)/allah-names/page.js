import NameList from "@/pages/names/NameList";
import axiosInstance from "@/utils/axiosInstance";

const getAllahNames = async () => {
  try {
    const res = await axiosInstance.get("/allah-name");
    return res.data;
  } catch (error) {
    console.error("Error fetching Allah names:", error);
    return []; // Return an empty array in case of failure to prevent crashes
  }
};

const page = async () => {
  const names = await getAllahNames();

  return (
    <div className="w-full lg:w-9/12 md:w-full px-2 pb-10 h-full mx-auto overflow-y-auto">
      <div className="border-2 dark:text-white p-4 text-xl rounded-xl text-center font-HindSiliguri">
        আবূ হুরাইরাহ (রাঃ) হতে বর্ণিত। তিনি বলেন, আল্লাহ্ তা‘আলার নিরানব্বই নাম
        আছে, এক কম একশত নাম। যে ব্যক্তি এ (নাম) গুলোর হিফাযাত করবে সে জান্নাতে
        প্রবেশ করবে। আল্লাহ্ বিজোড়। তিনি বিজোড় পছন্দ করেন। সহীহ বুখারী (হাদিসঃ
        ৬৪১০)
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 py-5">
        {names && names.map((name) => <NameList name={name} key={name.id} />)}
      </div>
    </div>
  );
};

export default page;
