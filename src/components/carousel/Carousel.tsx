import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const autoplayOptions = {
    delay: 5000
}

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <img className="embla__slide" src="https://img.vila.bg/g/2260/182904.jpg" alt="" />
                <img className="embla__slide" src="https://img.vila.bg/g/2260/182931.jpg" alt="" />
                <img className="embla__slide" src="https://img.vila.bg/g/2260/182903.jpg" alt="" />
            </div>
        </div>
    );
};


export default Carousel;