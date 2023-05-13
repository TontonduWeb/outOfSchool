import anime from "animejs";
import { onMount } from "solid-js";

export default function Timeline(props) {
  const { duration } = props;
  onMount(() => {
    fillBox();
  });

  const fillBox = () => {
    anime({
      targets: ".progress",
      duration: duration,
      easing: "linear",
      update: function (anim) {
        progress.style.width = anim.progress + "%";
      },
    });
  };

  return (
    <>
      <div>
        <div id="progress" className="m-0 h-10 bg-red-500"></div>
      </div>
    </>
  );
}
