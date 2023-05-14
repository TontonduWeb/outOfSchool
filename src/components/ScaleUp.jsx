import { onMount } from "solid-js";
import anime from "animejs/lib/anime.js";

export default function ScaleUp(props) {
  const { target, delay, endDelay, sentence } = props;

  onMount(() => {
    scaleUp();
  });
  const scaleUp = () => {
    anime({
      targets: `.${target}`,
      keyframes: [{ scale: [0, 1] }],
      endDelay: endDelay,
      delay: delay,
      direction: "alternate",
      easing: "easeInOutExpo",
    });
  };

  return (
    <>
      <div className="absolute flex justify-center text-center">
        <h1
          className={`${target}  w-10/12 font-sourceCodePro text-gray-50 text-7xl`}>
          {sentence}
        </h1>
      </div>
    </>
  );
}
