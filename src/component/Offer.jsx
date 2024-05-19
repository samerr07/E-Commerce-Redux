import React from 'react'
import { offer } from '../assets/Data'

const Offer = () => {
  return (
    <div className='mt-8'>
        
        <div className='w-10/12 m-auto'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    offer.map((e)=>(
                        <div>
                            <img src={e.customer_img} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Offer
