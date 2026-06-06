import Link from 'next/link';
import products from '../../../../../public/data.json';
import Image from 'next/image';



export const generateMetadata=async({params})=>{
 const {id}= await params;
     const data=products.find(
        (item)=> item.id===Number(id))

return {title:data.name,
       description:data.description,
    }




}











const Singleproduct = async({params}) => {
    const {id}= await params;
     const data=products.find(
        (item)=> item.id===Number(id)
     );
    
    return (
        <div className="p-4 md:p-10 lg:p-20 bg-gray-50">
  <div className="card lg:card-side bg-base-100 shadow-sm w-11/12 mx-auto p-4 md:p-8 rounded-md">

    <figure className="relative w-full lg:w-5/12 h-64 md:h-80 lg:h-112rounded-md">
      <Image
        src={data.image}
        fill
        className="object-contain"
        alt={data.name}
      />
    </figure>

    <div className="card-body">
      <h2 className="card-title text-xl md:text-2xl font-bold">
        {data.name}
      </h2>

      <p><span className="font-semibold">Brand:</span> {data.brand}</p>
      <p><span className="font-semibold">Category:</span> {data.category}</p>
      <p><span className="font-semibold">Stock:</span> {data.stock}</p>
      <p><span className="font-semibold">Description:</span> {data.description}</p>

      <p className="text-primary text-xl font-medium">
        Price: ${data.price}
      </p>

      <div className="card-actions justify-start">
        <button className="btn bg-primary text-white rounded">
          Buy Now
        </button>
      </div>

      <div className="card-actions justify-end">
        <Link href="/products">
          <button className="btn btn-primary btn-outline">
            Back
          </button>
        </Link>
      </div>
    </div>

  </div>
</div>
    );
};

export default Singleproduct;










 