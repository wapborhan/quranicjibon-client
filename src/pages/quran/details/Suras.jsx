"use client";
import SideContentHeader from "@/pages/SideContentHeader";
import SideContentList from "@/pages/SideContentList";
import SuraDetils from "./SuraDetils";
import Settings from "@/components/shared/Settings";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useSearchParams } from "next/navigation";

const Suras = ({ suras }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [loading, setLoading] = useState(true);
  const [selectsura, setSura] = useState(suras[0]);
  const [ayahs, setAyahs] = useState([]);

  const handleDataSubmit = async (data) => {
    setLoading(true);
    try {
      const ayah = await axiosInstance.get(`/quran/sura/${data}`);
      setAyahs(ayah.data);
      const sura = await axiosInstance.get(`/quran/${id}`);
      setSura(sura.data);
    } catch (error) {
      console.error("Error fetching Ayahs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (suras.length > 0 && id) {
      const selectedSura = suras.find((sura) => sura.index === id);
      console.log(selectedSura);

      if (selectedSura) {
        handleDataSubmit(selectedSura.index);
      } else {
        handleDataSubmit(suras[0]);
      }
    }
  }, [suras, id]);
  return (
    <>
      <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks dark:text-gray-300">
        <SideContentHeader
          content={[{ id: 1, name: "Quran", status: "active" }]}
        />
        <div className="p-2 h-[cal(100%-120px)] overflow-y-auto mb-2">
          <SideContentList suras={suras} handleDataSubmit={handleDataSubmit} />
        </div>
      </div>

      <div className="lg:w-10/12 w-full  h-full pb-16 md:pb-0 flex flex-col md:bg-white md:rounded-2xl overflow-hidden dark:bg-darks dark:text-gray-300 mx-auto">
        <SuraDetils ayahs={ayahs} sura={selectsura} loading={loading} />
      </div>
      <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks dark:text-gray-300">
        <Settings />
      </div>
    </>
  );
};

export default Suras;
