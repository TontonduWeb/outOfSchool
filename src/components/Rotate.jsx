import anime from "animejs";
import { onMount } from "solid-js";
export default function Rotate() {
  onMount(() => {
    launchRotate();
  });
  const launchRotate = () => {
    anime({
      targets: ".rotate .el",
      keyframes: [
        {
          translateX: -500,
          duration: 1000,
        },
        {
          rotate: 1800,
          duration: 10000,
        },
        { translateX: 500, delay: 50000 },
      ],
      delay: 7000,
    });
  };
  return (
    <>
      <div className="rotate absolute bottom-44 -right-10">
        <img className="square el h-10 w-10" src="settings.png" alt="" />
      </div>
    </>
  );
}
