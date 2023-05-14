import anime from "animejs/lib/anime.js";
import { onMount } from "solid-js";

export default function Keyframes(props) {
  const { target, delay, endDelay } = props;
  onMount(() => {
    launchKeyframes();
  });
  const launchKeyframes = () => {
    anime({
      targets: `.${target} .keyframesEl`,
      keyframes: [
        { scale: [0, 1] },
        { translateX: -420, translateY: -140, delay: 3000 },
        { translateX: -1000, delay: endDelay },
      ],
      direction: "normal",
      delay: delay,
      duration: 5000,
    });
  };

  return (
    <>
      <div className={`${target} absolute bottom-44 right-96`}>
        <img className="keyframesEl" src="html.png" alt="" />
      </div>
    </>
  );
}
