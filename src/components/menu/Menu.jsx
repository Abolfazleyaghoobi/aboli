import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";


function Menu() {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ست کردن عرض اولیه بعد از mount شدن
    if (menuRef.current) {
      gsap.set(menuRef.current, { width: 50 });
    }
  }, []);

  const toggleMenu = () => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 767px)",()=>{
       if (!isOpen) {
      // باز کردن
      gsap.to(menuRef.current, {
        width: 500,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      // بستن
      gsap.to(menuRef.current, {
        width: 50,
        duration: 0.5,
        ease: "power2.in"
      });
    }
    setIsOpen(!isOpen);
    })
   // this  animation is under devises 768px
   mm.add("(max-width: 767px)",()=>{
          if (!isOpen) {
      // باز کردن
      gsap.to(menuRef.current, {
        width: 320,
        duration: 0.5,
      
        ease: "power2.out"
      });
    } else {
      // بستن
      gsap.to(menuRef.current, {
        width: 50,
        duration: 0.5,
        ease: "power2.in"
      });
    }
    setIsOpen(!isOpen);
   })
   
  };

  return (
    <div 
      ref={menuRef}
      className="fixed md:left-12 left-2 top-5 md:top-15 flex items-center rounded-[5px] 
    /* Glassmorphism styles */
    bg-[#2c46695d] 
    backdrop-blur-[2px] 
    border border-white/20 
    shadow-lg
    /* بقیه استایل‌ها */
    text-[#adbdf8] overflow-hidden z-50 w-12 h-12"

    >
      <div 
        onClick={toggleMenu}
        className="min-w-12.5 h-12.5 flex items-center justify-center cursor-pointer md:text-2xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <div className="flex whitespace-nowrap md:text-[1.5rem]">
        <h2 className="md:px-3 px-1 cursor-pointer hover:text-white transition-colors"><a href="#intro">Home</a></h2>
        <h2 className="md:px-3 px-1 cursor-pointer hover:text-white transition-colors"><a href="#mySkills">Skills</a></h2>
        <h2 className="md:px-3 px-1 cursor-pointer hover:text-white transition-colors"><a href="#projects">Projects</a></h2>
        <h2 className="md:px-4 px-1 cursor-pointer hover:text-white transition-colors"><a href="#contact">Contact Me</a></h2>
      </div>
    </div>
  );
}

export default Menu;