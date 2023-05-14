import anime from "animejs/lib/anime.js";
import { onMount } from "solid-js";

export default function TranslateX(props) {
  const {
    src,
    target,
    translateX,
    delay,
    endDelay,
    duration,
    top,
    bottom,
    left,
    right,
    alt,
  } = props;

  onMount(() => {
    launchTranslateX();
  });

  const launchTranslateX = () => {
    anime({
      targets: `.${target}`,
      translateX: translateX,
      delay: delay,
      duration: duration,
      endDelay: endDelay,
      direction: "alternate",
    });
  };

  return (
    <>
      <div>
        <img
          className={`${target} ${top} ${bottom} ${left} ${right} absolute`}
          src={src}
          alt={alt}
        />
      </div>
    </>
  );
}
