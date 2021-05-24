import React, { useEffect, useState } from 'react'
import images from '../data'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const length = images.length

    const previewSlide = () => {
        setCurrentSlide((currentSlide) => {
            return currentSlide == 0 ? length-1:currentSlide - 1
        })
    }

    const nextSlide = () => {
        setCurrentSlide((currentSlide) => {
            return currentSlide == length - 1 ? 0 : currentSlide + 1
        })
    }
    useEffect(() => {
        const id = setInterval(nextSlide, 5000)
        return () => {
            clearInterval(id)
        }
    }, [])

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft onClick={previewSlide} className='left-arrow'/>
            <FaArrowAltCircleRight onClick = {nextSlide} className='right-arrow'/>
            {images.map((eachImage, i) => {
                return <div key={i} className={`slide ${i===currentSlide ? 'active': ''}`}>
                    {i === currentSlide && < img className='active' src={eachImage.imageUrl} alt="slides" />}
                </div>
            })}
        </section>
    )
}

export default Slider
