import anime from "animejs/lib/anime.js";
import { onMount } from "solid-js";
import { createSignal } from "solid-js";

export default function TranslateX() {
  const [count, setCount] = createSignal(0);

  onMount(() => {
    setInterval(() => setCount(count() + 1), 1000);
    setInterval(() => {
      launchAnimation();
    }, 2000);
  });

  const launchAnimation = () => {
    anime({
      targets: ".animation",
      translateX: 250,
      rotate: "1turn",
      backgroundColor: "#FFF",
      duration: 800,
    });
  };

  return (
    <>
      <h1>{count}</h1>
      <div>
        <img className="animation" src="/user.png" alt="" />
      </div>
      <div>
        <img className="animation" src="/angular.png" alt="" />
      </div>
    </>
  );
}
