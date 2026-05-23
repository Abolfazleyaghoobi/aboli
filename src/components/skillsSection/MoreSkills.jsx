// import { useContext, useRef, useState } from "react";
// import { ReactTyped } from "react-typed";
// import { appContext } from "../../context/AppContext";
// import { FaBootstrap, FaNpm } from "react-icons/fa";
// import { SiRedux, SiTailwindcss } from "react-icons/si";
// import { TbBrandThreejs } from "react-icons/tb";

import ProgressBar from "../ProgressBar/ProgressBar";

// import gsap from "gsap";
function MoreSkills() {


 
  return (
    <>
    

      <section className="grid grid-cols-1 md:grid-cols-2 text-gray-400">
        {/* div left */}
        <div className="md:pt-2 md:mr-3">
          <div className="w-full flex items-center my-3 border p-1 rounded-[9px] border-[#4dbbff] text-[#4dbbff]">
            <h1>Tailwind</h1> {`=>`} <ProgressBar percentage={95} color={"#4dbbff"} status={"advance"} />
          </div>
          <div className="w-full flex items-center my-3 border p-1 rounded-[9px] border-[#ae63ff] text-[#ae63ff]">
            <h1 >Bootstrap</h1>  {`=>`} <ProgressBar percentage={99} color={"#ae63ff"} status={"expert"}/> 
          </div>
          <div className="w-full flex items-center my-3 border p-1 rounded-[9px]">
            <h1>Three.js</h1> {`=>`} <ProgressBar percentage={55} color={"#7d7c7c"} status={"intermediate"}/> 
          </div>
        </div>
        {/* div right */}
        <div className="md:pt-2 md:ml-3">
          <div className="w-full flex items-center my-3 border p-1 rounded-[9px] border-[#ff7a3d] text-[#ff7a3d]">
            <h1>Blander</h1>  {`=>`}  <ProgressBar percentage={45} color={"#ff7a3d"} status={"basic "}/> 
          </div>
          <div className="w-full flex items-center my-3 border p-1 rounded-[9px] border-[#ff0707] text-[#ff0707]">
            <h1 >NPM</h1> {`=>`} <ProgressBar percentage={90} color={"#ff0707"} status={"advance"}/>  
          </div>
          <div className="w-full flex items-center my-3 border p-1 rounded-[9px] border-[#ff0ed7] text-[#ff0ed7]">
            <h1 >Redux</h1> {`=>`} <ProgressBar percentage={78} color={"#ff0ed7"} status={"intermediate"}/>  
          </div>
        </div>
      </section>
    </>
  );
}

export default MoreSkills;
