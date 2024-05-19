import React from 'react'
import { Link } from 'react-router-dom'
import Icon from "../component/Icon"

const TopBar = () => {
  return (
    <div className='border-b p-2'>
      <div className='w-10/12 m-auto'>
        <ul className='flex justify-between items-center'>
          <li className='flex'>
            <Icon/>
            <Link className='mr-2 text-sm capitalize pr-4 pl-4'>
            Get Express Delivery over India</Link>
          </li>
          <li className='flex'>
            <Link className='mr-5 border-r-2 pl-4 pr-4 text:sm capitalize'>
            Our Stores</Link>
            <Link className='mr-5 border-r-2 pr-4 text:sm capitalize'>
            Privacy Policy</Link>
            <Link className='mr-5  text:sm capitalize'>
            FAQs</Link>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default TopBar
