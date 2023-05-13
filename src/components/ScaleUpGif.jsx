import { onMount } from "solid-js";
import anime from "animejs/lib/anime.js";

export default function ScaleUpGif(props) {
  const { target, endDelay, delay, left, right, bottom, gif } = props;

  onMount(() => {
    scaleUpGif();
  });
  const scaleUpGif = () => {
    anime({
      targets: `.${target}`,
      scale: [0, 1],
      delay: delay,
      endDelay: endDelay,
      direction: "alternate",
      easing: "spring(1, 80, 10, 0)",
    });
  };

  return (
    <>
      <div
      // className={`absolute ${left} ${right} ${bottom}`}
      >
        <iframe
          className={`${target} rounded-2xl absolute ${left} ${right}  my-0 mx-auto`}
          style="bottom: 5%"
          src={gif}
          width="480"
          height="270"></iframe>
      </div>
    </>
  );
}
