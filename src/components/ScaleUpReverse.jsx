import { onMount } from "solid-js";
import anime from "animejs/lib/anime.js";

export default function ScaleUpReverse(props) {
  const { target, delay, endDelay, src, bottom, top, right, left, sentence } =
    props;

  onMount(() => {
    scaleUpReverse();
  });
  const scaleUpReverse = () => {
    anime({
      targets: `.${target}`,
      keyframes: [{ scale: [0, 1], delay: delay }, { scale: [1, 0.35] }],
      endDelay: endDelay,

      direction: "alternate",
      easing: "easeInOutExpo",
    });
  };

  return (
    <>
      <div
        className={`absolute flex justify-center text-center items-center my-0 mx-auto`}
        style={`bottom: ${bottom}rem; top: ${top}rem; right: ${right}rem; left: ${left}rem;`}>
        <img className={`${target}`} src={src} alt="" />
      </div>
    </>
  );
}
