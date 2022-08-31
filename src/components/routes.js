// Page Import
import Sura from "../pages/sura";
import SuraDetails from "../pages/sura/details/SuraDetails";
import Hadith from "../pages/hadith";

const routes = [
  {
    path: "/sura",
    component: <Sura />,
  },
  {
    path: "/sura/:sura",
    component: <SuraDetails />,
  },
  {
    path: "/hadith",
    component: <Hadith />,
  },
  {
    path: "/kalema",
    component: <Hadith />,
  },
  {
    path: "/dowa",
    component: <Hadith />,
  },
  {
    path: "/salat",
    component: <Hadith />,
  },
  {
    path: "/ramjan",
    component: <Hadith />,
  },
  {
    path: "/kurbani",
    component: <Hadith />,
  },
];

export default routes;
