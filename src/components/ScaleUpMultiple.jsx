import { onMount } from "solid-js";
import anime from "animejs/lib/anime.js";

export default function ScaleUpMultiple(props) {
  const { endDelay } = props;
  onMount(() => {
    scaleUpMultiple();
  });
  const scaleUpMultiple = () => {
    anime({
      targets: ".scaleMultiple .el",
      scale: [0, 1],
      direction: "alternate",
      delay: function (el, i, l) {
        return 12000 + (i * 1000) / 2;
      },
      endDelay: function (el, i, l) {
        return endDelay + (l - i) * 100;
      },
    });
  };

  return (
    <>
      <div className="scaleMultiple">
        <div>
          <img
            src="one.png"
            className="el absolute"
            style="bottom: 15%; left: 47%"
            alt=""
          />
        </div>
        <div>
          <img
            src="two.png"
            className="el absolute"
            style="bottom: 17%; left: 40%"
            alt=""
          />
        </div>
        <div>
          <img
            src="three.png"
            className="el absolute"
            style="bottom: 12%; left: 32%"
            alt=""
          />
        </div>
        <div>
          <img
            src="four.png"
            className="el absolute"
            style="bottom: 9%; left: 57%"
            alt=""
          />
        </div>
        <div>
          <img
            src="five.png"
            className="el absolute"
            style="bottom: 5%; left: 39%"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
