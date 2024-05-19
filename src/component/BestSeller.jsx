import React, { useState } from "react";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { products } from "../assets/Data";
import { BiCart, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Modal from "../common/Modal";

const BestSeller = () => {

    const [openModal, setOpenModal] = useState(null)

    const handleOpen = (productId)=>{
        setOpenModal(productId)
    }

    const handleClose = ()=>{
        setOpenModal(null)
    }

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
  };
  return (
    <div>
      <div className="products w-10/12 m-auto">
        <div>
          <Heading
            heading={"New Products"}
            description={"Lorem Ipsum Nullem Gravidaa, dolro imp onse "}
            btn={<Link to={"/"}>View All</Link>}
          />

          <Slider {...settings}>
            {products.map((e, i) => (
              <div className="mt-8" key={i}>
                <div className="mr-4 border">
                <div className="overflow-hidden relative">
                  <div className="image-container relative">
                    <div className="flash_sale_img">
                      <img src={e.img} alt="" />
                    </div>
                    <div className="tag absolute top-0">
                      <p className="bg-red-500 p-2 rounded-br-xl font-semibold text-white">
                        {e.tag}
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-2 product-details">
                    <p className="mb-2">{e.short_description}</p>
                    <p className="text-red-600">${e.price}</p>
                  </div>

                  <div className="bg-rose-300 opacity-65 hover:opacity-100 pb-4 pt-4 w-full text-gray-900">
                    <div className="flex justify-center align-middle">
                      <button className="text-2xl">
                        <BiCart />
                      </button>
                      <button
                        onClick={() => handleOpen(e.id)}
                        className="whitespace-nowrap"
                      >
                        {e.btn}
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Modal
        openModal = {openModal}
        handleClose={handleClose}
        data={products.find((e)=> e.id === openModal)}
      />
    </div>
  );
};

export default BestSeller;
