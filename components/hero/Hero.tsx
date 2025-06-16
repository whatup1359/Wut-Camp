"use client";

import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
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
              <div className="group relative rounded-md overflow-hidden">
                <img 
                className="w-full h-[600px] object-cover brightness-80 group-hover:brightness-60 transition-all duration-400 ease-in-out"
                src={landmark.image} />
              </div>
            </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};
export default Hero;
