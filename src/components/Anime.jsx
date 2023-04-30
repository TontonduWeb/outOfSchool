import anime from 'animejs/lib/anime.js';
import './Anime.css';

export function AnimeComponent(props) {

    const { firstProp, secondProp, sentence } = props;    

    // function launchAnimation() play a letter printing animation on a single word
    // This is not perfect, but it's a good start
    // Difficulty is to start the animation only when the button is clicked as a single component
    // Little css trick explain below to make the animation work
    function launchAnimation() {
        let secondPageEl = document.querySelector(`.${firstProp}, .${secondProp}`);
        
        // secondPageEl.innerHTML = secondPageEl.textContent.replace(
        //     /\S/g,
        //     "<span class='letter'>$&</span>"
        //   );
        anime
            .timeline({ loop: true })
            .add({
            targets: `.${firstProp} .letter, .${secondProp} .letter`,
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
            })
            .add({
            targets: `.${firstProp} .line`,
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: "-=875",
            delay: (el, i, l) => 80 * (l - i),
            })
            .add({
            targets: `.${firstProp}`,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });
    }
 

    return (
        <>
            <a><button onClick={launchAnimation}>This is a button</button></a>
            <h1 
            // 👇 I use substring to remove the last letter of the string, because I need to use the string as a class name
             class={`${firstProp.substring(0, firstProp.length - 1)}`}>
            <span class="text-wrapper">
                <span class="line line1"></span>
                <span class={secondProp.substring(0, firstProp.length - 1)}>{sentence}</span>
                <span class="line line2"></span>
            </span>
            </h1>
        </>
    )
}