import gsap from "gsap";

function maxWidth767(bodyContainerIntro,containerIntro,itemsRef) {
       const tl = gsap.timeline();
      tl.to(bodyContainerIntro.current, {
        opacity: 0,
        visibility: "hidden",
        display: "none",
        position: "absolute",
        top: "-125px",

        duration: 0.001,
      })
        .to(
          containerIntro.current,
          {
            width: "100%",
            height: "auto",

            duration: 0.5,
          },
          "<",
        )
        // animation imgae
        .to(itemsRef.current[0], {
          borderRadius: "9px",
          duration: 1,
        })
        // box under image
        .to(
          itemsRef.current[2],
          {
            height: "3rem",
            boxShadow: "0px 0px 10px 2px #000000",
          },
          "<",
        )
        .to(
          itemsRef.current[3],
          {
            display: "inline",
            opacity: 1,
            duration: 1,
          },
          "<",
        )
        .to(itemsRef.current[1], {
          width: "100%",
          height: "auto",
            padding: "0px 1.25rem",

          display: "flex",
          opacity: 1,
          duration: 0.5,
        })
        .to(itemsRef.current[4], {
          display: "block",
          opacity: 1,
          duration: 1,
        },"<")
         .to(itemsRef.current[5], {
          display: "block",
          opacity: 1,
        });
}

export default maxWidth767;