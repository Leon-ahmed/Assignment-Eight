import React from 'react';
import Image from 'next/image';
import sun from "../../public/bs.png";
import bshi from "../../public/bshi.png";
import bso from "../../public/bso.png";
import bt from "../../public/bt.jpg";

const Brands = () => {
    return (
        <div className='p-10 bg-gray-50'>
            <h2 className='text-5xl font-bold text-center mb-10'>
                Trusted By Global Brands
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                {[sun, bshi, bso, bt].map((img, i) => (
                    <div key={i}>
                        <div className="card bg-base-100 w-full shadow-sm transition-transform duration-300 ease-in-out hover:scale-105">

                            <figure className="relative w-full h-40 p-4 flex items-center justify-center">
                                <Image
                                    src={img}
                                    alt="brand"
                                    fill
                                    className="object-contain"
                                />
                            </figure>

                            <div className="card-body"></div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Brands;