import anime from "animejs";
import { onMount } from "solid-js";
export default function Loop(props) {
  const { target, el, translate, delay, right, bottom } = props;
  onMount(() => {
    setTimeout(() => {
      launchLoop();
    }, delay);
  });
  const launchLoop = () => {
    anime({
      targets: `.${target}`,
      keyframes: [
        {
          translateY: translate,
          scale: [0, 1],
          easing: "easeInOutSine",
          delay: anime.stagger(100),
        },
      ],
      endDelay: 3000,
      direction: "alternate",
    });
  };

  return (
    <>
      <div
        class={`${target} w-1 h-10 bg-gray-50 rounded-lg ${el} absolute`}
        style={`right: ${right}rem; bottom: ${bottom}rem; transform: scale(0)`}></div>
      <div
        class={`${target} w-1 h-10 bg-gray-50 rounded-lg ${el} loop absolute`}
        style={`right: ${
          right + 2
        }rem; bottom: ${bottom}rem; transform: scale(0)`}></div>
      <div
        class={`${target} w-1 h-10 bg-gray-50 rounded-lg ${el} loop absolute`}
        style={`right: ${
          right + 4
        }rem; bottom: ${bottom}rem; transform: scale(0)`}></div>
      <div
        class={`${target} w-1 h-10 bg-gray-50 rounded-lg ${el} loop absolute`}
        style={`right: ${
          right + 6
        }rem; bottom: ${bottom}rem; transform: scale(0)`}></div>
    </>
  );
}
