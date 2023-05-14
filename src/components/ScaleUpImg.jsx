import { onMount } from "solid-js";
import anime from "animejs/lib/anime.js";

export default function ScaleUpImg(props) {
  const {
    target,
    delay,
    endDelay,
    src,
    bottom,
    right,
    left,
    sentence,
    sizeSrc,
  } = props;

  onMount(() => {
    scaleUpImg();
  });
  const scaleUpImg = () => {
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
      <div
        className={`absolute flex justify-center text-center items-center my-0 mx-auto`}
        style={`bottom: ${bottom}rem; right: ${right}rem; left: ${left}rem;`}>
        {sentence && (
          <p
            className={`${target} p-2 font-bangers bg-black text-yellow-600 text-3xl ont-sourceCodePro`}>
            {sentence}
          </p>
        )}
        <img
          className={`${target} w-${sizeSrc} h-${sizeSrc}`}
          src={src}
          alt=""
        />
      </div>
    </>
  );
}
