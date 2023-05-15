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
      <div className="absolute flex justify-center text-center mx-auto my-4 left-0 right-0">
        <h1
          className={`${target} w-3/5 font-sourceCodePro text-gray-50 text-6xl`}>
          {sentence}
        </h1>
      </div>
    </>
  );
}
