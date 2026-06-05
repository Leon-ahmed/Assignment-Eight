import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Popular from "@/components/Popular";
import Tips from "@/components/Tips";
import LoginToast from "@/components/LoginToast"; 

export default function Home() {
  return (
    <div >
        <LoginToast />
     <Banner></Banner>
     <Popular></Popular>
     <Tips></Tips>
     <Brands></Brands>
    </div>
  );
}
