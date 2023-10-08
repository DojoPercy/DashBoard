"use client";

import React, { useContext, useEffect } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";
import { GlobalContext } from "@/context";

import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


const Sidebar = () => {
  const pathName = usePathname();
  const { status } = useSession();
  
  const router = useRouter();
  const { sideBarOpen, setSideBarOpen, isMobile, setIsMobile} =
    useContext(GlobalContext);

  const openSideBar = () => {
    console.log("opensidebar");
    setSideBarOpen((prev) => !prev);
  };
  // useEffect(() => {
  //   // Function to check if the screen width is less than a certain threshold (e.g., 768px for typical mobile devices)
  //   const checkIsMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //     if(isMobile){
  //       setSideBarOpen(false);
  //     }
  //   };

  //   // Add an event listener to recheck whenever the window is resized
  //   window.addEventListener('resize', checkIsMobile);

  //   // Initial check
  //   checkIsMobile();

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('resize', checkIsMobile);
  //   };
  // }, []);
  return (
    <aside
      className={`fixed md:absolute left-0 drop-shadow-lg rounded-r-lg rounded-br-lg top-0 z-50 overflow-y-hidden duration-300 ${
        sideBarOpen ? "translate-x-0" : " -translate-x-full "
      } flex flex-col h-screen w-72 bg-black text-white`}
    >
      <div className="text-white z-50 w-auto p-3 md:hidden">
        <AiOutlineClose
          size={25}
          className={`text-slate-00 absolute left-[77%] cursor-pointer z-50 `}
          onClick={openSideBar}
        />
      </div>

      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6 ">
        <Link href={(status === 'authenticated')? '/': 'Unauth-page'} className="text-[40px]">
          Analytics
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-2">
              <Link
                href={(status === 'authenticated')? '/': 'Unauth-page'}
              
                className={` ${
                  pathName === "dashboard" && "bg-slate-900"
                } rounded-full`}
              >
                <label
                
                  className={`group cursor-pointer flex items-center gap-2 rounded-full py-2 px-4 font-medium duration-300 ease-in-out ${
                    pathName.includes("/products")
                      ? "bg-transparent"
                      : "bg-slate-900"
                  }
                  ${status === 'unauthenticated' && 'bg-slate-800 text-slate-700 cursor-not-allowed'}
                   ${
                    pathName.includes("/visitors")
                      ? "bg-transparent"
                      : "bg-slate-900"
                  }`}
                >
                  <LuLayoutDashboard size={35} className={`${status === 'unauthenticated' && ' text-slate-700'} text-purple-500 `} />
                  Dashboard
                </label>
              </Link>
              <Link
                href={(status === 'authenticated')? '/products': 'Unauth-page'}
                className={` ${
                  pathName === "products" && "bg-slate-900"
                } rounded-full`}
              >
                <label
                  
                  className={`group cursor-pointer flex items-center gap-2 rounded-full py-2 px-4 font-medium duration-300 ease-in-out ${
                    pathName.includes("products") && "bg-slate-900"
                  }  ${status === 'unauthenticated' && 'bg-slate-800 text-slate-700 cursor-not-allowed'}`}
                >
                  <TbBrandProducthunt size={35} className={`${status === 'unauthenticated' && ' text-slate-700'} text-purple-500 `}/>
                  Products
                </label>
              </Link>
              <Link
                href={(status === 'authenticated')? '/visitors': 'Unauth-page'}
                className={` ${
                  pathName === "visitors" && "bg-slate-900"
                } rounded-full`}
              >
                <label
                
                  className={`group cursor-pointer flex items-center gap-2 rounded-full py-2 px-4 font-medium duration-300 ease-in-out ${
                    pathName.includes("visitors") && "bg-slate-900 "
                  }  ${status === 'unauthenticated' && 'bg-slate-800 text-slate-700 cursor-not-allowed'} `}
                >
                  <PiUsersFourLight size={35} className={`${status === 'unauthenticated' && ' text-slate-700'} text-purple-500 `}/>
                  Visitors
                </label>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
