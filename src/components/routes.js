import {
  FaQuran,
  FaBookOpen,
  FaBookReader,
  FaBook,
  FaCopy,
  FaStopwatch,
  FaMoon,
  FaShareAlt,
} from "react-icons/fa";
import { GiGoat } from "react-icons/gi";
// Page Import
import Sura from "../pages/sura";
import Hadith from "../pages/hadith";
// import HomeOne from "./HomeOne";

const routes = [
  {
    path: "/",
    tittle: "আল কুরআন (সুরা ক্রমে)",
    iconname: <FaBookOpen />,
    component: <Sura />,
  },
  {
    path: "/hadith",
    tittle: "সহীহ হাদিস সমুহ",
    iconname: <FaBookReader />,
    component: <Hadith />,
  },
  {
    path: "/kalema",
    tittle: "কালেমা",
    iconname: <FaBook />,
    component: <Hadith />,
  },
  {
    path: "/dowa",
    tittle: "দোয়া সমুহ",
    iconname: <FaCopy />,
    component: <Hadith />,
  },
  {
    path: "/salat",
    tittle: "নামাজ ",
    iconname: <FaStopwatch />,
    component: <Hadith />,
  },
  {
    path: "/ramjan",
    tittle: "রমজান ",
    iconname: <FaMoon />,
    component: <Hadith />,
  },
  {
    path: "/kurbani",
    tittle: "কুরবানি",
    iconname: <GiGoat />,
    component: <Hadith />,
  },
];

export default routes;
