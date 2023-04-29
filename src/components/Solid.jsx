
import './Solid.css';
import { gsap } from "gsap";

export function MySolidComponent(props) {

  const rainbowHover = (el) => {
    const colorSetter = gsap.quickSetter(el, "backgroundColor");
    const animation = gsap.to(el, {
      backgroundColor: colorSetter("hsl(+=360, +=0%, +=0%)"),
      color: "hsl(+=360, +=0%, +=0%)",
      duration: 5,
      repeat: -1,
      ease: "none",
      paused: true
    });
  
    el.addEventListener("mouseenter", () => {
      animation.play();
    });
  
    el.addEventListener("mouseleave", () => {
      animation.pause();
    });
  };
  

    return (
      <>
        <div class="firstDiv">
      <div 
        use:rainbowHover
        class="firstEl"
      />
      <div 
        use:rainbowHover
        class="secondEl"
      />
    </div>;
      </>
    )
  }
