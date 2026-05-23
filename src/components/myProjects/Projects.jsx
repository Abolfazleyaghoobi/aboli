import { useState } from "react";
import ProjectCard from "./ProjectCad";
import { dataProjects } from "./dataProjects";
import { dataMiniProjects } from "./dataMiniProjects";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  return (
    <>
      <section className="w-[90%]  bg-gray-800 rounded-[9px] p-2 mx-auto my-2 overflow-hidden mt-9">
        <h2 id="projects" className="text-gray-300 text-[2rem] text-center">Projects</h2>
        {/* <div className="grid grid-cols-2 mt-2">
          {dataProjects.map((item) => {
            return (
      
                <ProjectCard {...item} />
             
            );
          })}
        </div> */}
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
                320: {
          slidesPerView: 2, // موبایل
        },
        768: {
          slidesPerView: 2, // تبلت
        },
        1024: {
          slidesPerView: 3, // دسکتاپ
        },
          }}
        >
          {dataProjects.map((item) => {
            return (
              <SwiperSlide className=" lg:max-w-[23%] md:max-w-[30%] max-w-full">
                <ProjectCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <h2 className="text-gray-300 text-[2rem] text-center mt-7">
          MiniProjects
        </h2>
        <div className="flex gap-4">
          {/* {dataMiniProjects.map((item) => {
            return <ProjectCard {...item} />;
          })} */}
           <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
                320: {
          slidesPerView: 2, // موبایل
        },
        768: {
          slidesPerView: 2, // تبلت
        },
        1024: {
          slidesPerView: 3, // دسکتاپ
        },
          }}
        >
          {dataMiniProjects.map((item) => {
            return (
              <SwiperSlide className=" lg:max-w-[23%] md:max-w-[30%] max-w-full">
                <ProjectCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
      </section>
    </>
  );
}

export default Projects;
