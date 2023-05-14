import anime from "animejs/lib/anime.js";
import { onMount } from "solid-js";

export default function TranslateXText(props) {
  const {
    sentence,
    target,
    translateX,
    delay,
    endDelay,
    duration,
    top,
    bottom,
    left,
    right,
  } = props;

  onMount(() => {
    launchTranslateXText();
  });

  const launchTranslateXText = () => {
    anime({
      targets: `.${target}`,
      translateX: translateX,
      delay: delay,
      endDelay: endDelay,
      direction: "alternate",
      duration: duration,
    });
  };

  return (
    <>
      <div>
        <p
          className={`${target} ${top} ${bottom} ${left} ${right} absolute w-64 min-w-52 p-4 font-bangers text-yellow-600 shadow-2xl rounded-3xl shadow-black bg-slate-950 text-5xl flex text-center`}>
          {sentence}
        </p>
      </div>
    </>
  );
}
