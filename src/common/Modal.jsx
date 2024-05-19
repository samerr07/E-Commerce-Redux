import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty, increaseQty } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Modal = ({ openModal, handleClose, data }) => {
  const [addCart, setAddCart] = useState(false);
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state);

  console.log(cartItem.length);

  const totalPrice = cartItem.reduce((a, b) => a + b.price * b.qty, 0);
  console.log(totalPrice);

  const handleAddProduct = (data) => {
    dispatch(addToCart(data));
    setAddCart(true)
  };

  const handleInc = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDec = (id) => {
    dispatch(decreaseQty(id));
  };

  useEffect(() => {
    if (openModal) {
      setAddCart(false);
    }
  }, [openModal]);

  return (
    <div>
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-content bg-white w-2/3 overflow-auto relative">
            <span
              onClick={() => handleClose()}
              className="top-0 right-0 p-4 cursor-pointer"
            >
              <FaTimes />
            </span>

            <div className="flex">
              <div className="relative">
                <div className="modal-poster">
                  <img src={data.img} alt="" />
                </div>
                <div className="tag absolute top-0">
                  <p className="bg-red-500 font-semibold text-white rounded-br-xl p-2">
                    {data.tag}
                  </p>
                </div>
              </div>

              <div className="modal-info ml-6">
                <p className="text-4xl">{data.short_description}</p>
                <p className="text-red-600 text-xl">${data.price}</p>
                <p className="mt-2">{data.description}</p>

                <div className="flex items-center">
                  <p className="font-semibold mr-2">Shade:</p>
                  <select
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
                    name=""
                    id=""
                  >
                    <option value="options">Choose an Option</option>
                    <option value="waterproof-very-black-802">
                      Waterproof Very Black 802
                    </option>
                    <option value="washable-blackset-black-800">
                      Washable Blackset Black 800
                    </option>
                    <option value="washable-801">Washable 801</option>
                    <option value="cosmic-black">Cosmic Black</option>
                  </select>
                </div>

                <p className="text-green-700">In Stock 300 items</p>

                <div className="flex items-center">
                  <div className="flex mr-3">
                    <button
                      onClick={() => handleDec(data.id)}
                      className="border mt-4 pt-3 pb-3 pr-6 pl-6 count"
                    >
                      <PiMinus />
                    </button>
                    <span className="border mt-4 pt-3 pb-3 pr-6 pl-6">
                      {cartItem.find((item) => item.id === data.id)?.qty || 0}
                    </span>
                    <button
                      onClick={() => handleInc(data.id)}
                      className="border mt-4 pt-3 pb-3 pr-6 pl-6"
                    >
                      <PiPlus />
                    </button>
                  </div>

                  <div className="addToCart mr-3">
                    {addCart ? (
                      <button
                        // onClick={() =>handleClose() 
                        // }
                        className="mt-4 pt-3 pb-3 pl-6 pr-6 text-white bg-blue-500"
                      >
                        <Link to={"/cart"}>
                          View Cart
                        </Link> 
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleAddProduct(data);
                        }}
                        className="border mt-4 pt-3 pb-3 pr-6 pl-6 text-white bg-red-500"
                      >
                        {cartItem.find((item) => item.id === data.id) ? "Already Added" : "Add To Cart"}
                      </button>
                    )}
                  </div>
                </div>

                <div className="font-semibold py-5 category_brand text-xl">
                  <h1 className="py-4 capitalize">
                    Category:
                    <span> {data.category}</span>{" "}
                  </h1>
                  <h1>
                    Brand:
                    <span> {data.brand}</span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
