import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { PiMinus, PiPlus } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PageHeading from '../common/PageHeading'
import { decreaseQty, increaseQty, removeFromCart } from '../redux/cartSlice'

const Cart = () => {

  const {cartItem} = useSelector((state)=>state)
  const dispatch = useDispatch()

  const totalPrice = cartItem.reduce((a, b) => a + b.price * b.qty, 0);

  const handleInc = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDec = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleRem = (id)=>{
    dispatch(removeFromCart(id))
  }

 
  
  
  return (
    <div>
      <PageHeading home={"Home"} pagename={"Cart"}/>
      <div className='text-4xl text-center font-extrabold m-10'>
        Your Products
      </div>

      <div>
        <div className='w-10/12 m-auto'>
          <div className='mb-4'>
            {
              cartItem.length === 0 ? (
                <div className='border-b pb-4 text-center'>
                  <p className='text-3xl font-bold uppercase'>Your cart has no items</p>
                  <div className='rounded-xl mt-4 text-white text-xl bg-red-500 inline-block pb-3 pt-3 pr-8 pl-8'>
                    <Link to={"/"}>Return to Shopping</Link>
                  </div>
                </div>
              ):(
                <>
                  <div>
                    <table className='w-full rounded-2xl shadow-2xl'>
                      <thead className="bg-blue-950 text-white font-semibold">
                        <th className='px-4 py-2'></th>
                        <th className='px-4 py-2'>Product</th>
                        <th className='px-4 py-2'>Price</th>
                        <th className='px-4 py-2'>Quantity</th>
                        <th className='px-4 py-2'>Subtotal</th>
                      </thead>
                      <tbody>
                        {
                          cartItem.map((e)=>(
                            <tr>
                              <td className='text-center px-4 py-2'>
                                <button onClick={()=>handleRem(e.id)} className='text-red-500 hover:text-red-700'>
                                  <FaTimes/>
                                </button>
                              </td>
                              <td className='text-center px-4 py-2'>
                                <div className='flex justify-center items-center'>
                                  <img src={e.img} alt="" className='h-30 w-40 object-contain mr-2' />
                                  <p className='font-semibold'>{e.title}</p>
                                </div>
                              </td>
                              <td>${e.price}</td>
                              <td>
                                <div className='flex items-center justify-center'>
                                  <div className='flex mr-3'>
                                    <button onClick={()=>handleDec(e.id)} className='border mt-4 pb-3 pt-3 pr-6 pl-6'>
                                      <PiMinus/>
                                    </button>
                                    <span className='border mt-4 pb-3 pt-3 pr-6 pl-6 count'>{e.qty}</span>
                                    <button onClick={()=>handleInc(e.id)} className='border mt-4 pb-3 pt-3 pr-6 pl-6'>
                                      <PiPlus/>
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td>$ {e.price * e.qty}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>

                  <div className='p-6 w-2/5 rounded-xl font-bold mt-4 bg-white shadow-2xl'>
                    <h1 className='mb-4 text-center text-3xl'>Cart Total</h1>
                    <div className='flex justify-between'>
                      <span>Sub Total :</span>
                      <span>${totalPrice}</span>
                    </div>

                    <div className='flex justify-between mt-3'>
                      <span>Shipping Charge :</span>
                      <span>$ 10</span>
                    </div>

                    <div className='flex justify-between mt-3'>
                      <span>Grand Total :</span>
                      <span>${totalPrice + 10}</span>
                    </div>

                    <div className='whitespace-nowrap mt-4 flex items-center justify-between'>
                      <div className='px-4 py-2 bg-red-800 rounded-lg text-white'>
                        <Link>Proceed to Checkout</Link>
                      </div >
                      <div className='px-4 py-2 bg-red-800 rounded-lg text-white'>
                        <Link to={"/shop"}>Continue Shopping</Link>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
