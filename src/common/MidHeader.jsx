import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/obsession_logo.png"
import {navbar} from "../assets/Data"
import { BiSolidShoppingBag, BiUser } from "react-icons/bi";
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const MidHeader = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const {cartItem} = useSelector((state)=>state)

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  }
  return (
    <div className='p-4'>
      <div className='w-10/12 m-auto'>
        <ul className='flex justify-between items-center'>
          <li className='flex items-center'>
            <Link to={"/"} className='logo'>
              <img src={logo} alt="" />
            </Link>
            {
              navbar.slice(1,4).map((e)=>(
                <Link to={e.path} key={e.id}
                  className='mr-2 pl-4 pr-4 text-base hover:text-red-600'
                >
                  {e.nav}
                </Link>
              ))
            }
          </li>
          <li className='flex items-center'>
            <input type="search" className='p-2 mr-5 outline-none border rounded-lg ring-offset-0' placeholder='Search...' />

            <Link
              className='relative mr-5 text-2xl border rounded-full p-2 text-gray-500'
              onClick={toggleSidebar}
            >
              <BiSolidShoppingBag />
              <div className='items_count'>
                <span className='text-white'>{cartItem.length}</span>
              </div>
            </Link>
            <Link
              className=' mr-5text-2xl border rounded-full p-2 text-gray-500'
            >
              <BiUser/>
            </Link>
          </li>
          
        </ul>
      </div>

      <Sidebar sideBarOpen={sideBarOpen}
      closeSideBar = {()=>setTimeout(toggleSidebar(),6000)}
      />
    </div>
  )
}

export default MidHeader
