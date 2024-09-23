import Header from "@/pages/Header";
import MobileMenu from "@/pages/MobileMenu";
import SideBar from "@/pages/SideBar";

const layout = ({ children }) => {
  return (
    <div className="h-screen flex bg-white dark:bg-darks !dark:text-white">
      <div className="fixed top-0 left-0 w-full p-4 pl-[1.6rem] flex justify-between z-10  rorder-b shadow md:shadow-none  dark:text-white ">
        <Header />
      </div>

      <SideBar />

      <MobileMenu />
      <div className="relative w-full bg-body-grey-bg dark:bg-darkz md:rounded-tl-3xl pt-[65px] md:mt-[80px] md:p-4 ">
        {children}
      </div>
    </div>
  );
};

export default layout;
