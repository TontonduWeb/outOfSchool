import { onMount } from "solid-js";
import { createSignal } from "solid-js";

export default function Audio(props) {
  let audio;
  const { src, interval } = props;
  const [playing, setPlaying] = createSignal(false);

  onMount(() => {
    audio.pause();
    setTimeout(() => {
      audio.play();
      // audio.playbackRate = 1.25;
      // Si j'applique le playbackRate, pensez à changer le temps du delay des endelay dans le fichier index
      // et aussi de mettre à jour l'interval de tous les fichiers audio
      // diviser par 1.25 pour avoir le bon interval
      setPlaying(true);
    }, interval);
  });

  return (
    <>
      <audio ref={audio} autoPlay src={src} className="absolute top-0" />
    </>
  );
}
