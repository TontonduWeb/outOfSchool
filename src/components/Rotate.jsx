import anime from "animejs";
import { onMount } from "solid-js";
export default function Rotate(props) {
  const { target, delay, endDelay, right, bottom, translateX } = props;
  onMount(() => {
    launchRotate();
  });
  const launchRotate = () => {
    anime({
      targets: `.${target} .el`,
      keyframes: [
        {
          translateX: translateX,
          duration: 1000,
        },
        {
          rotate: 1800,
          duration: 10000,
        },
        { translateX: 500, delay: endDelay },
      ],
      delay: delay,
    });
  };
  return (
    <>
      <div
        className={`${target} absolute`}
        style={`right: ${right}rem; bottom: ${bottom}rem;`}>
        <img className="el h-10 w-10" src="settings.png" alt="" />
      </div>
    </>
  );
}
