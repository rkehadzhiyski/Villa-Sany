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
                <img className="embla__slide" src="https://www.rentavilla.com/Rentavilla/Home/image-thumb__1803__RAV_Home_Slide/Homepage%205.webp" alt="" />
                <img className="embla__slide" src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/06/crop_exclusive_luxury_villa_with_swimming_pool_credit_gettyimages-925052286.jpeg?w=2200&h=880&crop=1" alt="" />
                <img className="embla__slide" src="https://www.rentavilla.com/_default_upload_bucket/image-thumb__181516__RAV_Home_Slide/Courchevel%20Luxury%20Chalet%20rental%202.webp" alt="" />
            </div>
        </div>
    );
};


export default Carousel;