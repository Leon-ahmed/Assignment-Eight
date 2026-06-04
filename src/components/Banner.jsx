"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ban1 from"../../public/banner1.jpg";
import ban2 from"../../public/banner2.jpg";
import ban3 from"../../public/banner3.jpg";
export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="h-125"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
    <Image
      src={ban1}
      alt="Banner 1"
      className="w-full h-full object-cover"
    />

  <div className="absolute inset-0 flex items-center px-10">
  <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-xl p-6 max-w-md mb-50 md:mt-50 text-white shadow-xl">
    <h2 className="text-2xl md:text-4xl  font-bold drop-shadow-md">
      50% OFF
    </h2>

    <p className="mt-2 text-lg text-white/90 drop-shadow-sm">
      Grab the best deals on our latest collection today.
    </p>
  </div>
</div>
  </div>
        
      </SwiperSlide>

      <SwiperSlide>
         <div className="relative w-full h-full">
    <Image
      src={ban2}
      alt="Banner 2"
      className="w-full h-full object-cover"
    />

  <div className="absolute inset-0 flex items-center px-10">
  <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-xl p-6 max-w-md mb-50 md:mt-50 text-white shadow-xl">
    <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md">
    20% OFF On Sunglasses
    </h2>

    <p className="mt-2 text-lg text-white/90 drop-shadow-sm">
      Grab the best deals on our latest collection today.
    </p>
  </div>
</div>
  </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
    <Image
      src={ban3}
      alt="Banner 3"
      className="w-full h-full object-cover"
    />

  <div className="absolute inset-0 flex items-center px-10">
  <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-xl p-6 max-w-md   mt-50 text-white shadow-xl">
    <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md">
      15% OFF On Hats
    </h2>

    <p className="mt-2 text-lg text-white/90 drop-shadow-sm">
      Grab the best deals on our latest collection today.
    </p>
  </div>
</div>
  </div>
      </SwiperSlide>
    </Swiper>
  );
}