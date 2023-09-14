"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const Nav = ({lang,navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
      <div className='hidden lg:flex justify-between items-center '>
      <li className="block px-4 py-2 text-lg  hover:text-[#cccc] ">
    <Link href={`/${lang}`}>{navigation.home}</Link>
  </li>
  <li className="block px-4 py-2 text-lg  hover:text-[#cccc] ">
    <Link href={`/${lang}/about`}>{navigation.about}</Link>
  </li>
  <li className="block px-4 py-2 text-lg  hover:text-[#cccc] ">
    <Link href={`/${lang}`}>{navigation.home}</Link>
  </li>
  <li className="block px-4 py-2 text-lg  hover:text-[#cccc] ">
    <Link href={`/${lang}/about`}>{navigation.about}</Link>
  </li>
  <li>
        <div className="relative">
    <button
      className=" text-white hover:text-[#04C873]  py-2 flex rounded"
      onClick={toggleDropdown}
    >
      المزيد
      <IoIosArrowDown className='mt-1 mr-2' />  </button>
    {isOpen && (
      <div 
      className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#04C873] "
        >
          المقالات
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#04C873] "
        >
          سياسية الخصوصية
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#04C873] "
        >
          أسئلة مكررة
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#04C873] "
        >
          أداء اختبار
        </a>
      </div>
    )}
  </div>
  </li>
  {/* nav-mobile */}
</div>
  )
}
export default Nav