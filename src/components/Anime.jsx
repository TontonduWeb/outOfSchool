import anime from 'animejs/lib/anime.js';

export function AnimeComponent(props) {

    //define two props
    const { firstProp, secondProp } = props;    

    // function launchAnimation() play a letter printing animation on a single word
    function launchAnimation(props, index) {
        console.log('firstProp', firstProp)
        console.log('secondProp', secondProp)
        let secondPageEl = document.querySelector(`.${firstProp}, .${secondProp}`);
        console.log('secondPageEl', secondPageEl)
        
        secondPageEl.innerHTML = secondPageEl.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          );
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
            targets: `.${firstProp}${index} .line`,
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: "-=875",
            delay: (el, i, l) => 80 * (l - i),
            })
            .add({
            targets: `.${firstProp}${index}`,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });
    }
 

    return (
        <>
            <div>Anime Component Second Page</div>
            <button onClick={launchAnimation}>This is a button</button>
            <h1 class={firstProp}>
                {firstProp}
            <span class="text-wrapper">
                <span class="line line1"></span>
                <span class={secondProp}>THURSDAY</span>
                <span class="line line2"></span>
            </span>
            </h1>
        </>
    )
}