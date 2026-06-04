 import data from "../../../../public/data.json"
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

const Products = () => {
    return (
     <div className="bg-gray-50">
           <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 ">
            {
                data.map((item)=>{
                     
                    return(
                          <div key={item.id} className="bg-white/80 max-w-90 rounded-sm border border-gray-200 p-3 shadow" >
                         <div className=" relative w-full aspect-square  ">
  <Image
    src={item.image}
    alt={item.name}
     fill
    className="object-contain  rounded-md"
  />
</div>
                         <div className="flex justify-between">
                             <h2 className="font-bold">{item.name}</h2>
                             <p className="flex justify-center items-center gap-1"><FaRegStar />{item.rating}</p>

                         </div>

                         <p className="text-primary font-bold"><span>&#x0024;</span>{item.price}</p>

                           <Link href={'/'}><button className="btn btn-neutral/50 mt-5   text-primary  w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">View Details</button></Link>





                        </div>

                        


                    )



                })
            }
        </div>
     </div>
    );
};

export default Products;