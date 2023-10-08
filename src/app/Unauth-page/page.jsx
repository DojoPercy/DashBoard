'use client'
import { GlobalContext } from '@/context';
import React, { useContext } from 'react'

const Unauth = () => {
  const { sideBarOpen, setSideBarOpen } =
  useContext(GlobalContext);
  return (
    <div className={`pl-10 w-full text-black ${sideBarOpen? 'md:pl-[300px]': 'md:pl-10'}`}>
      Unauthenticated Page
    </div>
  )
}

export default Unauth