import React, { useState } from 'react'
import {products} from "../assets/Data"
import { BiCart } from "react-icons/bi";
import Modal from '../common/Modal';
import Heading from '../common/Heading';

const Flashsale = () => {

    const [openModal, setOpenModal] = useState(null)

    const handleOpen = (productId)=>{
        setOpenModal(productId)
    }

    const handleClose = ()=>{
        setOpenModal(null)
    }
  return (
    <div>
        <div className='w-10/12 m-auto'>
            <Heading heading={"Flash Sales"} description={"Hot Picks: Top Sellers, grab Yours !"} btn={"Limited Offers"}/>
        </div>
      <div className="w-10/12 m-auto">
      <div className="grid grid-cols-5 gap-3">
        
          {products.map((e, i) => (
            <div className='features gap-8 mt-8 border' key={i}>
                <div className='overflow-hidden relative'>
                    <div className='image-container relative'>
                        <div className='flash_sale_img'>
                            <img src={e.img} alt="" />
                        </div>
                        <div className='tag absolute top-0'>
                            <p className='bg-red-500 p-2 rounded-br-xl font-semibold text-white'>{e.tag}</p>
                        </div>
                    </div>

                    <div className='text-center mt-2 product-details'>
                        <p className='mb-2'>{e.short_description}</p>
                        <p className='text-red-600'>${e.price}</p>
                    </div>

                    <div className='bg-rose-300 opacity-65 hover:opacity-100 pb-4 pt-4 w-full text-gray-900'>
                        <div className='flex justify-center align-middle'>
                            <button className='text-2xl'><BiCart /></button>
                            <button onClick={()=>handleOpen(e.id)} className="whitespace-nowrap">{e.btn}</button>
                        </div>
                    </div>
                </div>
            </div>
          ))}
       
      </div>
    </div>

    <Modal
        openModal = {openModal}
        handleClose={handleClose}
        data={products.find((e)=> e.id === openModal)}
    />
    </div>
  )
}

export default Flashsale
