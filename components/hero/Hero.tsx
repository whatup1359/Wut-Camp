"use client";

import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import OtherInfo from "./OtherInfo";
import Image from "next/image";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {landmarks.map((landmark, index) => (
          
            <SwiperSlide key={index}>
              <div className="group relative h-[300px] md:h-[400px] lg:h-[700px] rounded-md overflow-hidden mt-6">
                <Image 
                className="w-full group-hover:brightness-80 transition-all duration-400 ease-in-out"
                src={landmark.image} 
                fill
                alt={landmark.name}
                />
              </div>
              <div className="absolute bottom-0 left-0 z-50">
                <div className="col-span-4 mb-4 flex h-full flex-1
                justify-end px-5 md:mb-4 md:justify-end md:px-10
                ">
                  <OtherInfo landmark={landmark} />
                </div>
              </div>
            </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};
export default Hero;
