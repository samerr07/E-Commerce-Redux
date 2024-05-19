import React from 'react'
import {navbar} from "../assets/Data"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky z-50 bg-rose-100 shadow-xl'>
      <div className='w-10/12 m-auto flex justify-between items-center flex-wrap'>
        <ul className='flex pt-3 pb-3 text-base flex-wrap'>
          {navbar.slice(4,10).map((e)=>(
            <li className='mr-5 hover:border-b-2 border-b-red-600'>
              <Link className='hover:text-red-600' to={e.path}>
                {e.nav}
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-red-600 pt-3 pb-3 text-white font-bold pl-3 pr-3 uppercase text-xl transform-skew">
          <h1>
            Coupon Code : <span> ENTRTNT321</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
