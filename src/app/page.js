// import MainTain from "./maintain";
import "../app/globals.css";
import "../assets/stylesheet/homepage/all.min.css";
import "../assets/stylesheet/homepage/flaticon.css";
import "../assets/stylesheet/homepage/color.css";
import "../assets/stylesheet/homepage/responsive.css";
import "../assets/stylesheet/homepage/style.css";
import Header from "@/home/header/Header";
import Banner from "@/home/banner/Banner";
import Prayer from "@/home/prayer/Prayer";
import Listen from "@/home/listen/Listen";
import Quran from "@/home/quran/Quran";
import Counter from "@/home/counter/Counter";
import Pillar from "@/home/pillar/Pillar";
import Footer from "@/home/footer/Footer";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/quran`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const suras = await getData();

  return (
    <>
      {/* <MainTain /> */}
      <Header />
      <Banner />
      <Prayer />
      <Listen />
      <Quran suras={suras} />
      <Counter />
      <Pillar />
      <Footer />
    </>
  );
}
