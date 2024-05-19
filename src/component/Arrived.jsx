import React, { useRef } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import Slider from 'react-slick'
import { arriveItems } from '../assets/Data'
import Img from "../assets/4.webp"

const Arrived = () => {

    const sliderRef = useRef(null)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      };

    const handlePrev = ()=>{
        sliderRef.current.slickPrev()
    }

    const handleNext = ()=>{
        sliderRef.current.slickNext()
    }

  return (
    <div>
        <div className='bg-gray-200 mt-4 mb-4 pt-8 pb-8'>
            <div className='w-10/12 m-auto'>
                <div className='mb-8'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-5xl font-semibold'>Just Arrived</h1>
                        </div>
                        <div className='text-4xl flex'>
                            <BiChevronLeft className='arrows cursor-pointer' onClick={handlePrev}/>
                            <BiChevronRight className='arrows cursor-pointer' onClick={handleNext}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <Slider {...settings} ref={sliderRef}>
                            {
                                arriveItems.map((e,i)=>(
                                    <div key={i}>
                                        <div className='mr-4'>
                                            <img src={e.img} alt="" />
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-4 w-10/12 m-auto'>
            <div>
                <img src={Img} className='rounded-lg' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Arrived
