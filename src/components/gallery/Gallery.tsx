import PreviewCarousel from "../carousels/previewCarousel/PreviewCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {dragFree: true, loop: true}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Gallery = () => {
    return (
        <>
            <PreviewCarousel slides={SLIDES} options={OPTIONS}/>
        </>
    );
}

export default Gallery;