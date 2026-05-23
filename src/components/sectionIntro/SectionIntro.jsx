import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useContext, useRef, useState } from "react";
import { appContext } from "../../context/AppContext";
import minWidth768 from "./Animation/min-width(768px)";
import minWidth992 from "./Animation/min-width(992px)";
import maxWidth767 from "./Animation/max-width";


gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);
function SectionIntro() {
  // use context
  const { setShowMenu,setContinuePage,setEndAnimation,endAnimation } = useContext(appContext);
  // -----
  const textIntro = useRef(null);
  const border = useRef(null);
  const btnAnimation = useRef(null);
  const showBTN = useRef(null);
  const bodyContainerIntro = useRef(null);
  const containerIntro = useRef(null);
  const itemsRef = useRef([]);
  // _________________________________________________
  const splitRef = useRef(null);

  // ////////////////////////
  // height
  // const [height, setHeight] = useState(0);
  //
  useGSAP(() => {
    splitRef.current = SplitText.create(textIntro.current, {
      type: "chars",
    });

    const tl = gsap.timeline();
    tl.from(splitRef.current.chars, {
      // color:"red",
      duration: 0.0001,
      opacity: 0,
      stagger: 0.1,
      y: 50,
    })
      .from(
        showBTN.current,
        {
          opacity: 0,
          duration: 1,
          y: 50,
        },
        "<",
      )
      .to(splitRef.current.chars.slice(9, 18), {
        color: "#ff42b4",
        duration: 0.1,
        stagger: 0.1,

        y: -7,
      });
    tl.to(
      splitRef.current.chars.slice(18, 31),
      {
        color: "#ff42b4",
        stagger: 0.1,
        y: -7,
      },
      "<",
    ).to(
      btnAnimation.current,
      {
        width: "100%",
        duration: 1,
       onComplete:()=>{
        setEndAnimation(true)
       }
      },
      "<",
    );

    return () => {
      splitRef.current.revert();
    };
  }, []);
  const mm = gsap.matchMedia();
  const hideIntroSection = () => {
    if (endAnimation) {
      setShowMenu(true);
      setContinuePage(true)
        mm.add(
      {
        isDesktop: "(min-width: 992px)",
        isTablet: "(min-width: 768px) and (max-width: 991px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        console.log("context", context);

        let { isDesktop, isTablet, isMobile } = context.conditions;
        if (isDesktop) {
          minWidth992(
            bodyContainerIntro.current,
            containerIntro.current,
            itemsRef,
          );
        } else if (isTablet) {
          minWidth768(
            bodyContainerIntro.current,
            containerIntro.current,
            itemsRef,
          );
        } else if (isMobile) {
          maxWidth767(bodyContainerIntro, containerIntro, itemsRef);
        }
      },
    );
    }
  };
  return (
    <>
      <div id="intro" className="h-dvh w-full  md:flex md:flex-row-reverse grid grid-rows-2 grid-cols-1">
        {/* start intro */}
        <div
          ref={containerIntro}
          className=" overflow-hidden flex flex-col items-center   justify-center h-screen    md:h-screen! w-full   relative"
        >
          {/* container image */}
          <div className=" flex items-center flex-col justify-center  ">
            <span
              ref={(el) => (itemsRef.current[0] = el)}
              className="w-50 h-50  rounded-[50%] overflow-hidden shadow-[0px_0px_10px_2px_#000000]  inline-block"
            >
              <img src="/public/image/pictureMe.png" alt="" />
            </span>
            {/* shadow-[0px_0px_10px_2px_#000000] */}

            <div
              ref={(el) => (itemsRef.current[2] = el)}
              className="w-full flex text-[18px] font-bold text-[#bebebe] items-center justify-center  mt-5 md:hidden rounded-[9px] "
            >
              <span
                ref={(el) => (itemsRef.current[3] = el)}
                className="hidden opacity-0"
              >
                FrontEnd Developer
              </span>
            </div>
          </div>

          {/* body */}
          <div ref={bodyContainerIntro} className="">
            {/*head text intro  */}
            <h1
              ref={textIntro}
              className="text-gray-400 text-bold text-[15px] mt-3 sm:text-[20px] flex"
            >
              <span> Hello, I'm </span>
              <div className=" overflow-hidden flex flex-col mx-2">
                {" "}
                <span ref={border} className="text-[#ffffff] h-1">
                  {" "}
                  Abolfazle
                </span>
                <span className="">_____________</span>
              </div>
              <span> a Frontend Developer</span>
            </h1>
            {/* btn start intro */}

            <div
              ref={showBTN}
              className="mt-5 mx-auto  bg-[#bcbcbc]  text-white rounded-full  transition-colors duration-300 overflow-hidden w-50 h-10 relative"
            >
              <button
                onClick={hideIntroSection}
                className=" h-[inherit] w-full absolute cursor-pointer"
              >
                Start Intro MySelf
              </button>
              <div
                ref={btnAnimation}
                className="w-0 -z-1  h-[inherit] bg-[#ff0080]   "
              ></div>
            </div>
          </div>
        </div>

        {/*  */}
        <div
          ref={(el) => (itemsRef.current[1] = el)}
          className="w-0 hidden  items-center  relative "
        >
          <div
            ref={(el) => (itemsRef.current[4] = el)}
            className=" w-full text-gray-400   bg-gray-800 p-2  rounded-[9px] mb-12  "
          >
            <div
              className="opacity-0 hidden"
              ref={(el) => (itemsRef.current[5] = el)}
            >
              <h1 className="text-[25px]">Hello, dear friends! 👋</h1>
              <p className="md:text-[1rem] text-[0.7rem]">
                Let’s get to introducing myself. My name is Abolfazl, I’m 20
                years old, and I'm very interested in front-end development
                because I can bring what’s in my mind to life. I have a
                particular fondness for graphic designs. On the other hand, I
                also have a relatively good interest in back-end development
                because I want to build a website from start to finish, from
                front-end to back-end. When I entered the world of web design, I
                realized it's a huge and endless field. Within this world,
                creating 3D websites really caught my eye, and I became curious
                about how these websites are built, how they work, how they are
                rendered, and how the models used in them are created. That’s
                when I became familiar with Blender and started learning 3D
                modeling – what a fantastic field 3D web design is! And further
                down, you can see my skills and what I’ve created with them. So,
                come along with me! 😊
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* <div className="w-100  m-auto h-34">
      <AnimatedSVG/>

      </div> */}
    </>
  );
}

export default SectionIntro;
