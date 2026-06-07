import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Popular from "@/components/Popular";
import Tips from "@/components/Tips";
import LoginToast from "@/components/LoginToast"; 
import { Suspense } from "react";

export default function Home() {
  return (
    <div >
        <Suspense fallback={null}>
          <LoginToast />
        </Suspense>
     <Banner></Banner>
     <Popular></Popular>
     <Tips></Tips>
     <Brands></Brands>
    </div>
  );
}
