import anime from "animejs/lib/anime.js";
import { onMount } from "solid-js";
import "./Multiple.css";
import "./Anime.css";

export default function TranslateXMultipleKeyframes(props) {
  const {
    target,
    el,
    translateX,
    delay,
    delayMulti,
    delayDiv,
    endDelay,
    sentence1,
    sentence2,
    sentence3,
    sentence4,
    sentence5,
    src1,
    src2,
    src3,
    src4,
    src5,
    top1,
    top2,
    top3,
    top4,
    top5,
    right1,
    right2,
    right3,
    right4,
    right5,
    left1,
    left2,
    left3,
    left4,
    left5,
  } = props;

  onMount(() => {
    launchTranslateXMultipleKeyframes();
  });

  const launchTranslateXMultipleKeyframes = () => {
    anime({
      targets: `.${target}, .${el}`,
      keyframes: [
        { translateX: translateX },
        { translateY: 200, scale: [1, 0], delay: 3000 },
      ],
      delay: function (el, i, l) {
        return delay + (i * delayMulti) / delayDiv;
      },
      endDelay: function (el, i, l) {
        return endDelay + (l - i) * 100;
      },
    });
  };

  return (
    <>
      <div className="multiple">
        <div
          style={`top: ${top1}; right: ${right1}; left: ${left1}`}
          className={`${el} absolute flex flex-row items-center`}>
          <img src={src1} alt="" />
          {sentence1 && (
            <p className="p-4 font-bangers text-yellow-600 shadow-2xl rounded-3xl shadow-black bg-slate-950 text-5xl">
              {sentence1}
            </p>
          )}
        </div>
        <div
          style={`top: ${top2}; right: ${right2}; left: ${left2}`}
          className={`${el} absolute flex flex-row items-center`}>
          <img src={src2} alt="" />
          {sentence2 && (
            <p className="p-4 font-bangers text-yellow-600 shadow-2xl rounded-3xl shadow-black bg-slate-950 text-5xl">
              {sentence2}
            </p>
          )}
        </div>
        <div
          style={`top: ${top3}; right: ${right3}; left: ${left3}`}
          className={`${el} absolute flex flex-row items-center`}>
          <img src={src3} alt="" />
          {sentence3 && (
            <p className="p-4 font-bangers text-yellow-600 shadow-2xl rounded-3xl shadow-black bg-slate-950 text-5xl">
              {sentence3}
            </p>
          )}
        </div>
        <div
          style={`top: ${top4}; right: ${right4}; left: ${left4}`}
          className={`${el} absolute flex flex-row items-center`}>
          <img src={src4} alt="" />
          {sentence4 && (
            <p className="p-4 font-bangers text-yellow-600 shadow-2xl rounded-3xl shadow-black bg-slate-950 text-5xl">
              {sentence4}
            </p>
          )}
        </div>
        <div
          style={`top: ${top5}; right: ${right5}; left: ${left5}`}
          className={`${el} absolute flex flex-row items-center`}>
          <img src={src5} alt="" />
          {sentence5 && (
            <p className="p-4 font-bangers text-yellow-600 shadow-2xl rounded-3xl shadow-black bg-slate-950 text-5xl">
              {sentence5}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
