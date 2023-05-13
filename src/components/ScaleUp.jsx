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
      scale: [0, 1],
      delay: delay,
      endDelay: endDelay,
      direction: "alternate",
      // easing: "spring(1, 80, 10, 0)",
    });
  };

  return (
    <>
      <div className="flex justify-center text-center">
        <h1
          className={`${target}  w-10/12 font-sourceCodePro text-gray-50 text-7xl`}>
          {sentence}
        </h1>
      </div>
    </>
  );
}
