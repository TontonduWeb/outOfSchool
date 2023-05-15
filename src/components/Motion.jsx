import anime from "animejs";
import { onMount } from "solid-js";

export default function Motion(props) {
  const { target, delay, endDelay, right, bottom } = props;
  onMount(() => {
    setTimeout(() => {
      launchMotion();
    }, delay);
  });
  const launchMotion = () => {
    var path = anime.path(".motion-path-demo path");

    anime({
      targets: ".motion-path-demo .el",
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      easing: "easeInOutSine",
      scale: [0.5, 1],
      opacity: 1,
      duration: 2000,
    });
  };
  return (
    <>
      <div className="motion-path-demo">
        <img
          className="w-64 h-64 el absolute -left-52"
          src="surfer.png"
          alt=""
        />
        <svg
          className="opacity-0"
          id="ePHOwY1m93I1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 450 450"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision">
          <path
            d="M98.6618,131.538308c248.729961,256.426285,243.706114,33.313589,230.98956,0-75.771701-198.499315-330.560395-68.021425-164.079584,97.172154c52.011397,51.609244,158.119357,70.787393,291.970803,113.138686"
            fill="none"
            stroke="#3f5787"
            stroke-width="1.2"
          />
        </svg>
      </div>
    </>
  );
}
