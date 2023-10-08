'use client'
import ProductLayout from '@/components/products/product-layout';
import ProductListing from '@/components/products/ProductListing';
import { GlobalContext } from '@/context';
import React, { useContext } from 'react'

const Products = () => {
    const { sideBarOpen, setSidebarOpen } = useContext(GlobalContext);
  return (
    <div className={`mx-auto text-black max-w-screen-2xl p-4  pl-2 relative  ${sideBarOpen ? " md:pl-[310px]":" md:pl-20"}`}>
      <ProductLayout productListingPage={<ProductListing/>}/>
        
      
    </div>
  )
}

export default Products