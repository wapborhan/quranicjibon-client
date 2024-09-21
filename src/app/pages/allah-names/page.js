import NameList from "@/pages/names/NameList";

//

const page = async () => {
  const res = await fetch(`https://quranicjibon.vercel.app/api/allah-name`);
  const names = await res.json();

  return (
    <div className="w-full lg:w-9/12 md:w-9/12 px-2 pb-10 h-full mx-auto overflow-y-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 py-5">
        {names && names.map((name) => <NameList name={name} key={name.id} />)}
      </div>
    </div>
  );
};

export default page;
