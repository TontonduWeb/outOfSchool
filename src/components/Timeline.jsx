import anime from "animejs";
import { onMount } from "solid-js";

export default function Timeline(props) {
  let timeline;
  let chrono;
  const { duration } = props;
  onMount(() => {
    fillBox();
    getTime();
  });

  const getTime = () => {
    let start = 0;
    setInterval(() => {
      start++;
      chrono.innerHTML = start;
    }, 1000);
  };

  const fillBox = () => {
    anime({
      targets: ".timeline",
      duration: duration,
      easing: "linear",
      update: function (anim) {
        timeline.style.width = anim.progress + "%";
        let time = anim.progress;
        let dec = time.toFixed(2);
        let progress = dec + "%";
        timeline.innerHTML = progress;
      },
    });
  };

  return (
    <>
      <div>
        <div
          ref={timeline}
          id="timeline"
          className="m-0 h-10 bg-red-500 text-gray-50"></div>
        <h1 ref={chrono} className="text-5xl absolute text-gray-50"></h1>
      </div>
    </>
  );
}
