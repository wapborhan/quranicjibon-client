import AllahNames from "@/pages/names/AllahNames";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/allah-name`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const names = await getData();

  return (
    <div className="w-full lg:w-9/12 md:w-9/12 px-2 pb-10 h-full mx-auto overflow-y-auto">
      <AllahNames names={names} />
    </div>
  );
};

export default page;
