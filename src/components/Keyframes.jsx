import anime from "animejs/lib/anime.js";
import { onMount } from "solid-js";

export default function Keyframes(props) {
  const {
    target,
    el,
    src,
    delay,
    firstTranslateX,
    firstTranslateY,
    delayFirstTransition,
    secondTranslateX,
    endDelay,
    right,
    bottom,
  } = props;
  onMount(() => {
    launchKeyframes();
  });
  const launchKeyframes = () => {
    anime({
      targets: `.${target} .${el}`,
      keyframes: [
        { scale: [0, 1] },
        {
          translateX: firstTranslateX,
          translateY: firstTranslateY,
          delay: delayFirstTransition,
        },
        { translateX: secondTranslateX, delay: endDelay },
      ],
      direction: "normal",
      delay: delay,
      duration: 5000,
    });
  };

  return (
    <>
      <div
        className={`${target} absolute`}
        style={`right: ${right}rem; bottom: ${bottom}rem`}>
        <img className={`${el}`} src={src} alt="" />
      </div>
    </>
  );
}
