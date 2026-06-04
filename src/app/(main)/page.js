import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Popular from "@/components/Popular";
import Tips from "@/components/Tips";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <Banner></Banner>
     <Popular></Popular>
     <Tips></Tips>
     <Brands></Brands>
    </div>
  );
}
