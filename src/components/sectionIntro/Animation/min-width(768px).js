import gsap from "gsap";


function minWidth768(bodyContainerIntro,containerIntro,itemsRef) {
    const tl = gsap.timeline();
      tl.to(bodyContainerIntro, {
        opacity: 0,
        // display: "none",
        visibility: "hidden",
        // duration: 1,
      })
        .to(
          containerIntro,
          {
            width: "50%",
            height: "600px",

            duration: 0.5,
          },
          "<",
        )
        .to(
          itemsRef.current[1],
          {
            width: "50%",

            display: "flex",
            // opacity: 1,
            padding: "0px 1.25rem",
            duration: 1,
          
          },
          "",
        )
        .to(
          itemsRef.current[4],
          {
            
            // height: `19rem`,
            display: "block",
            opacity: 1,
    
        
          },
          "<",
        )
        .to(
          itemsRef.current[0],
          {
            width: "70%",
            height: "80%",
            borderRadius: "9px",
            duration: 1,
          },
          "",
        )
        .to(itemsRef.current[5], {
          display: "block",
          opacity: 1,
        });
}

export default minWidth768;