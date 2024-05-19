import React, { useState } from "react";
import PageHeading from "../common/PageHeading";
import { products } from "../assets/Data";
import { BiCart } from "react-icons/bi";
import Modal from "../common/Modal";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const Shop = () => {
  const [openModal, setOpenModal] = useState(null);
  const [filter, setFilter] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000],
  });

  

  const handlePriceChange = (value) => {
    setFilter({ ...filter, priceRange: value });
  };

  const categoryList = Array.from(new Set(products.map((e) => e.category)));

  const brandList = Array.from(new Set(products.map((e) => e.brand)));

  const handleOpen = (productId) => {
    setOpenModal(productId);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const filterProducts = products.filter((e)=>{
    if(filter.categories.length > 0 && !filter.categories.includes(e.category)){
      return false;
    }
    if(filter.brands.length > 0 && !filter.brands.includes(e.brand)){
      return false;
    }
    const price = parseFloat(e.price);

    if(price < filter.priceRange[0] || price > filter.priceRange[1]){
      return false;
    }

    return true;
  })

  const handleCheckBox = (filterType, value)=>{
    setFilter((prev)=>{
      const updatedFilter = [...prev[filterType]];
      if(!updatedFilter.includes(value)){
        updatedFilter.push(value);
      }else{
        updatedFilter.splice(updatedFilter.indexOf(value), 1);
      }
      return {...prev, [filterType]: updatedFilter};
    })
  }

  return (
    <div>
      <PageHeading home={"Home"} shop={"Shop"} />

      <div className="flex gap-3 items-start w-10/12 m-auto mt-8">
        <div className="filterProduct w-1/4 bg-white shadow-lg p-4">
          <div>
            <div className="my-4">
              <h1 className="text-4xl font-extrabold">Filter</h1>
            </div>

            <div className="my-4">
              <h1 className="mb-3 text-3xl font-semibold">Price Ranges</h1>
              <div>
                <Slider
                  min={0}
                  max={1500}
                  range
                  defaultValue={filter.priceRange}
                  onChange={handlePriceChange}
                />
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-3xl font-semibold">Categories</h2>
              {categoryList.map((e) => (
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2"
                    checked= {filter.categories.includes(e)}
                    onChange={()=>handleCheckBox("categories",e)}
                  />
                  <div className="capitalize">{e}</div>
                </div>
              ))}
            </div>

            <div className="py-4">
              <h1 className="mb-3 text-3xl font-semibold">Brands</h1>
              {brandList.map((e) => (
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2"
                    checked= {filter.brands.includes(e)}
                    onChange={()=>handleCheckBox("brands",e)}
                  />
                  <div>{e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
        
          {filterProducts.map((e, i) => (
            <div className='features gap-8 mt-8 border' key={i}>
                <div className='overflow-hidden relative'>
                    <div className='image-container relative'>
                        <div className='flash_sale_img'>
                            <img src={e.img} alt="" className="w-full" />
                        </div>
                        <div className='tag absolute top-0'>
                            <p className='bg-red-500 p-2 rounded-br-xl font-semibold text-white'>{e.tag}</p>
                        </div>
                    </div>

                    <div className='text-center mt-2 product-details'>
                        <p className='mb-2'>{e.short_description}</p>
                        <p className='text-red-600'>${e.price}</p>
                    </div>

                    <div className='bg-rose-300 opacity-65 hover:opacity-100 pb-4 pt-4 w-full text-gray-900 transition-all'>
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
  );
};

export default Shop;
