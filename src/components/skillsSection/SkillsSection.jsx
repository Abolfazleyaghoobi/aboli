// import "./style.css"
import gsap from "gsap";
import Skills from "./Skills";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";
import { useContext, useRef, useState } from "react";

import { appContext } from "../../context/AppContext";
import MoreSkills from "./MoreSkills";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin, useGSAP);

function SkillsSection() {
  const { setStartWrite } = useContext(appContext);

  

  return (
    <>
      <section className=" w-full  flex flex-col  relative ">
        {/* header */}
        <div className="mt-3 ">
          <h1 id="mySkills" className="text-center text-[2.5rem] text-gray-500   font-bold test">
            My Skills
          </h1>
        </div>
        {/* body */}
      <div className="mx-2">
        
        <div className="bg-[#262b3e]  xxl:w-[60%] xl:w-[70%] lg:w-[85%] mx-auto overflow-hidden rounded-[9px] mt-4 p-2 md:pb-8 md:px-6 ">
          <h1 className="text-center text-[1.5rem] text-[#070d13] font-bold">
            Main Skills
          </h1>
          {/* icons Container */}
          <section className="mt-4">
            <Skills />
          </section>
        </div>
      </div>
        
        {/* more Skills */}
      
        <div className="xxl:w-[62%] xl:w-[70%] lg:w-[90%] w-full  h-90  mx-auto relative px-4 mt-1 ">
          <div
  
            className=" bg-[#262b3e] mt-2 rounded-[9px] overflow-hidden px-3 py-4"
          >
            <h1 className="text-center text-[#8eb5c4]">Other Skills</h1>
            {/* <MoreSkills /> */}
            <div>
              <MoreSkills/>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
// 2D2D40

export default SkillsSection;
