import Kalema from "@/pages/kalema/Kalema";

const Page = async () => {
  const res = await fetch(`${process.env.API_URL}/api/kalema`);
  const kalemas = await res.json();

  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      <Kalema kalemas={kalemas} />
    </div>
  );
};

export default Page;
