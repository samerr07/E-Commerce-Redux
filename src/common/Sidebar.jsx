import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/cartSlice";

const Sidebar = ({ sideBarOpen, closeSideBar }) => {

  const {cartItem} = useSelector((state)=>state)
  const dispatch = useDispatch()
  // console.log(cartItem)

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const totalPrice = cartItem.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <div
      style={{
        zIndex: "70",
        transform: sideBarOpen ? "translateX(0)" : "translateX(100%)",
      }}
      className="fixed rounded-tl-3xl top-0 right-0 h-full bg-gray-200 shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto"
    >
      <div className="border-b-2 border-gray-400 mb-4">
        <h1 className="text-3xl p-4">Your Cart</h1>
      </div>

      <div className="p-4">
        <span
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={closeSideBar}
        >
          <FaTimes />
        </span>

        {
          cartItem.length === 0 ? (
            <p className="text-3xl font-bold uppercase">Your cart has no items</p>
          ) : (
            <>
            {
              cartItem.map((e)=>(
                <div className="flex justify-between mb-4">
                  <div className="flex">
                    <div className="relative">
                        <img src={e.img} alt="" width={84} height={84} />
                        <span onClick={()=>handleRemove(e.id)} className="bg-red-600 absolute top-0 -mt-2 -ml-2 text-white cursor-pointer">
                          <FaTimes/>
                        </span>
                    </div>
                    <div>
                      {e.title}
                    </div>
                  </div>
                  <div>
                    <p>${e.price}</p>
                    <p>Qty: {cartItem.find((item) => item.id === e.id)?.qty || 0}</p>
                  </div>
                </div>
              ))
            }
            <div className="flex items-center bg-red-700 p-6 w-full text-white font-bold">
              <h2>
                Sub Total: ${totalPrice}
              </h2>
              <div className="ml-4 bg-rose-100 rounded-3xl pt-3 pb-3 text-gray-700 pr-6 pl-6">
                <Link to="/cart">View Cart</Link>
              </div>
            </div>
            </>
          )
        }

        
      </div>
    </div>
  );
};

export default Sidebar;
