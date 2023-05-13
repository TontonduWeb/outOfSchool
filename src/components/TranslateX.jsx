import anime from "animejs/lib/anime.js";
import { onMount } from "solid-js";

export default function TranslateX(props) {
  const {
    image,
    target,
    translateX,
    delay,
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
    });
  };

  return (
    <>
      <div>
        <img
          className={`${target} ${top} ${bottom} ${left} ${right} absolute`}
          src={image}
          alt={alt}
        />
      </div>
    </>
  );
}
