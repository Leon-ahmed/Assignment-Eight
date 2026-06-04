import Image from "next/image"; 
import lemon from "../../public/lemon.jpg"
import { IoWater } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { BsFillLeafFill } from "react-icons/bs";
const Tips = () => {
    return (
       <div className="bg-blue-50 w-full">
         <div className="flex flex-col md:flex-row w-11/12 mx-auto py-10 gap-15">
            <div className="rounded-md "><Image src={lemon} alt='lemon' width={800} height={500} className="rounded-md "></Image></div>

            <div className="mt-8">
                <h3 className="font-bold  text-3xl">Summer Care Tips</h3>
                <p className="text-black/50">Keep your skin glowing and your body feel fresh</p>

                <div className="space-y-4 mt-10 ">
                   <div className="bg-white rounded-md p-4 flex justify-center items-center gap-4  animate__animated animate__fadeInUp   ">
                    <div className="text-primary p-4 bg-blue-100 rounded-md animate__animated animate__pulse animate__infinite "><IoWater /></div>
                    <div>
                         <h3 className="text-xl">Deep Hydration Strategy</h3>
                          <p>Deep hydration helps maintain skin moisture balance and prevents dryness caused by heat, sun, and outdoor exposure.</p>
                    </div>
 
</div>

<div className="bg-white rounded-md p-4 flex justify-center items-center gap-4 animate__animated animate__fadeInUp ">
 <div className="text-secondary p-4 bg-pink-100 rounded-md animate__animated animate__pulse animate__infinite "><FaSun /></div>
 <div> <h3 className="text-xl">Sun Defense</h3>
  <p>Sun defense focuses on protecting the skin from harmful UV rays to reduce sunburn, aging, and long-term damage its.</p></div>
</div>

<div className="bg-white rounded-md p-4 flex justify-center items-center gap-4 animate__animated animate__fadeInUp ">
  <div className="text-accent p-4 bg-green-100 rounded-md  animate__animated animate__pulse animate__infinite"><BsFillLeafFill /></div>
  <div><h3 className="text-xl">After-Sun Recovery</h3>
  <p>After-sun recovery helps calm the skin, reduce redness, and restore natural hydration after prolonged sun exposure. Be </p></div>
</div>


            
                </div>
            </div>
        </div>
       </div>
    );
};

export default Tips;