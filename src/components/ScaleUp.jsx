import { onMount } from "solid-js";
import anime from "animejs/lib/anime.js";

export default function ScaleUp(props) {
  const { duration, delay } = props;

  onMount(() => {
    scaleUp();
  });
  const scaleUp = () => {
    anime({
      targets: ".animation",
      scale: [0, 1],
      delay: delay,
      duration: duration,
      easing: "spring(1, 80, 10, 0)",
    });
  };

  return (
    <>
      <div>
        <h1 className="animation text-gray-50 flex justify-center text-5xl">
          Web Design Pattern
        </h1>
      </div>
    </>
  );
}
