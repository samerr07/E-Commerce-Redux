import React from 'react'
import Banner from '../component/Banner'
import Category from '../component/Category'
import Flashsale from '../component/Flashsale'
import Offer from '../component/Offer'
import BestSeller from '../component/BestSeller'
import Arrived from '../component/Arrived'
import Brand from '../component/Brand'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Flashsale/>
      <Offer/>
      <BestSeller/>
      <Arrived/>
      <Brand/>
    </div>
  )
}

export default Home
