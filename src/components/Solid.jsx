import {
  createSignal, createEffect
} from "solid-js";

export function MySolidComponent(props) {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log("count changed to", count());
  });

    return <button onClick={() => setCount(count() + 1)}>click me</button>;
  }
  