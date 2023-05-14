import anime from "animejs/lib/anime.js";
import { onMount } from "solid-js";

export default function Keyframes() {
  onMount(() => {
    launchKeyframes();
  });
  const launchKeyframes = () => {
    anime({
      targets: ".keyframes .keyframesEl",
      keyframes: [
        { scale: [0, 1] },
        { translateX: -420, translateY: -140, delay: 3000 },
        { translateX: -1000, delay: 50000 },
      ],
      direction: "normal",
      delay: 11000,
      duration: 5000,
    });
  };

  return (
    <>
      <div className="keyframes absolute bottom-44 right-96">
        <img className="keyframesEl" src="html.png" alt="" />
      </div>
    </>
  );
}
