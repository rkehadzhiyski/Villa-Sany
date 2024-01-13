import React from 'react'

type PropType = {
    imgSrc: string
}

export const Thumb: React.FC<PropType> = (props) => {
    const { imgSrc } = props

    return (
        <div>
            <img
                className="embla-thumbs__slide__img"
                src={imgSrc}
                alt="Your alt text"
            />
        </div>
    )
}