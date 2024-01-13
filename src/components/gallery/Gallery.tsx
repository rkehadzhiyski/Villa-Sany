import PreviewCarousel from "../carousels/previewCarousel/PreviewCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {}
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