import NavBar from "./NavBar";

const MobileMenu = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full px-4 py-2 flex justify-between shadow border-t z-10 dark:bg-darks border-slate-500 bg-white  dark:text-gray-300 lg:dark:border-t-0 border-t-1">
      <NavBar />
    </div>
  );
};

export default MobileMenu;
