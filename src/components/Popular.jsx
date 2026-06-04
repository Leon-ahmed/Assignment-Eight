import data from "../../public/data.json"; 
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Popular = async() => {
  
   

    return (
       <div className="p-10 bg-warning/5">

         <div className="        flex flex-col justify-center items-center md:flex-row    md:justify-around space-y-2 ">
              <div className=" ">         </div>
            <h2 className=" text-xl  md:text-4xl font-bold md:ml-10  ">Popular Products</h2>
            <Link href={'/products'} alt='all products' className="text-primary flex items-center gap-1 md:font-bold">View All <FaArrowRight /></Link>
         </div>
            <p className="md:text-xl text-black/50 mb-10 ml-5 text-center">Grab Your Favourite Products. There are plenty of collectoins </p>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2   w-8/12 mx-auto justify-around">

       


            {
                data.slice(0,3).map((item)=>{
                     
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

                           <Link href={`/products/${item.id}`}><button className="btn btn-neutral/50 mt-5   text-primary  w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">View Details</button></Link>





                        </div>

                        


                    )



                })
            }
            
        </div>
       </div>




    );
};

export default Popular;