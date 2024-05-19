import React from "react";
import { category } from "../assets/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

  return (
    <div className="bg-rose-100">
      <div className="w-10/12 m-auto">
        <Slider {...settings}>
          {category.map((e, i) => (
            <div key={i}>
              <div className="overflow-hidden m-2 text-center">
                <div className="category-img-wrapper">
                    <img className="w-auto h-full rounded-full object-cover" src={e.img} alt="" />
                </div>
                
                <p className="text-sm capitalize">{e.name}</p>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
