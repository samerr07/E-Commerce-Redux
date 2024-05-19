import React from 'react'
import {banners} from "../assets/Data"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import banner1 from "../assets/1.png"
import banner2 from "../assets/2.png"
import banner3 from "../assets/3.png"

const Banner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <BiChevronRight />,
        prevArrow: <BiChevronLeft />
      };

     
  return (
    <div className='w-full'>
        <Slider {...settings}>
        <div >
            <img src={banner1} alt="bannerimg" width={"100%"} />
        </div>
        <div >
            <img src={banner2} alt="bannerimg" width={"100%"} />
        </div>
        <div >
            <img src={banner3} alt="bannerimg" width={"100%"} />
        </div>       
                        
                    
        </Slider>
    </div>
  )
}

export default Banner
