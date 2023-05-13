import { onMount } from "solid-js";

export default function Audio() {
  let audio;
  onMount(() => {
    // audio.playbackRate = 1.25;
  });
  return (
    <>
      <audio
        ref={audio}
        controls
        autoplay
        src="Contexte.m4a"
        className="absolute top-0"
      />
      ;
    </>
  );
}
