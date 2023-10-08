'use client'
import { GlobalContext } from '@/context';
import { motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useContext, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import idpic from '../header/icons8-avatar-48.png';
import { useRouter } from 'next/navigation';




const Header = () => {
  const router = useRouter();
  const { sideBarOpen, setSideBarOpen } =
  useContext(GlobalContext);
  const openSideBar = () => {
    
    setSideBarOpen((prev) => !prev);
  };

  const {status}= useSession();

  useEffect(() => {
    if(status === 'authenticated'){
       router.push('/')
    }
   }, [status])
  return (
    <div className={`  w-full flex justify-between items-center mx-auto text-black p-4  pl-2 relative top-0 ${sideBarOpen ? " md:pl-[300px] ":" md:px-20"}`}>
      <motion.div className='bg-white rounded-full p-3 w-11 h-11 flex item-center justify-center drop-shadow-lg'
      whileTap={{scale:0.9}}>
      <AiOutlineMenu
            size={25}
            className={`text-slate-900 cursor-pointer `}
            onClick={openSideBar}
          />
      </motion.div>
    
      {/* <h3 className='font-semibold text-purple-500 text-lg'>Welcome <span>{status === 'authenticated' && name}</span>!</h3> */}
      <div className='flex items-center gap-4'>
      {/* <img src={(status === 'authenticated')? image: idpic} alt="logo" className='rounded-full w-10 h-10 ' /> */}
      <button className="text-white bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={()=> status === 'authenticated' ? signOut(): signIn('google')} >{(status === 'authenticated')? 'Logout': 'Login'}  </button>
      </div>
      </div>
     
  )

  }
export default Header