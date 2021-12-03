import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

function Certificate({imgSrc}) {
    return (
        <CarouselItem>
          <img
            className="d-block w-100"
            src={ imgSrc }
            alt="First slide"
          />
        </CarouselItem>
    )
}

export default Certificate
