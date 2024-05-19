import React from 'react'
import { footer } from '../assets/Data'
import FooterLog from "../assets/footer_logo.svg"

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='w-10/12 m-auto'>
        <div className='flex justify-between pb-14 pt-14'>
          <div className='text-gray-500 w-1/4'>
            <div className='mb-5'>
              <img src={FooterLog} alt="" />
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adip nonum soc tem
              placerat non proident et just Lorem ipsum dolor sit amet,
              consectetur adip nonum soc tem placerat non proident et just
              consectetur adip nonum soc tem placerat non proident et just
            </p>
          </div>

          {
            footer.map((e,i)=>(
              <div className='text-gray-500'>
                <h1 className='text-2xl text-white mb-5'>{e.header}</h1>
                <p>{e.content1}</p>
                <p>{e.content2}</p>
                <p>{e.content3}</p>
                <p>{e.content4}</p>
                <p>{e.content5}</p>
                <p>{e.content6}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
