import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './smallCarousel.css';

type PropType = {

    options?: EmblaOptionsType
}

const SmallCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef] = useEmblaCarousel(options)

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <img className="embla__slide" src="https://img.vila.bg/g/2260/182904.jpg" alt="" />
                    <img className="embla__slide" src="https://img.vila.bg/g/2260/182931.jpg" alt="" />
                    <img className="embla__slide" src="https://img.vila.bg/g/2260/182903.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SmallCarousel