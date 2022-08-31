import {
  FaBookOpen,
  FaBookReader,
  FaBook,
  FaCopy,
  FaStopwatch,
  FaMoon,
} from "react-icons/fa";
import { GiGoat } from "react-icons/gi";

const sidenav = [
  {
    path: "/sura",
    tittle: "আল কুরআন (সুরা ক্রমে)",
    iconname: <FaBookOpen />,
  },
  {
    path: "/hadith",
    tittle: "সহীহ হাদিস সমুহ",
    iconname: <FaBookReader />,
  },
  {
    path: "/kalema",
    tittle: "কালেমা",
    iconname: <FaBook />,
  },
  {
    path: "/dowa",
    tittle: "দোয়া সমুহ",
    iconname: <FaCopy />,
  },
  {
    path: "/salat",
    tittle: "নামাজ ",
    iconname: <FaStopwatch />,
  },
  {
    path: "/ramjan",
    tittle: "রমজান ",
    iconname: <FaMoon />,
  },
  {
    path: "/kurbani",
    tittle: "কুরবানি",
    iconname: <GiGoat />,
  },
];

export default sidenav;
