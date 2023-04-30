export default function Navigate(props) {
    const { hrefPrev, hrefNext } = props;    
    return (
        <div class="w-full flex flex-row justify-around">
            <a href={hrefPrev}>
                <img id="animeId" src="/prev.svg" alt="prev" />
            </a>
            <h1 class="color-red-400">HEY</h1>
            <a href={hrefNext}>
                <img id="animeId" src="/next.svg" alt="next" />
            </a>
        </div>
    )
}