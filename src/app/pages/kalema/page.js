import SideContentHeader from "@/pages/SideContentHeader";
import Kalema from "@/pages/kalema/Kalema";
import KalemaDetails from "@/pages/kalema/KalemaDetails";
import KalemaList from "@/pages/kalema/KalemaList";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/kalema`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Page = async () => {
  const kalemas = await getData();

  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      <Kalema kalemas={kalemas} />
    </div>
  );
};

export default Page;
