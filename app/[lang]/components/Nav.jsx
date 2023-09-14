"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const Nav = ({lang,navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const hospitalMenuItems = navigation.subhospital;

  return (
      <div className='hidden  text-lg font-[540] lg:flex justify-between items-center '>
      <li className="block  px-4 py-2  hover:text-[#322387cc] ">
    <Link href={`/${lang}`}>{navigation.home}</Link>
  </li>
  <li className="block px-4 py-2  hover:text-[#322387cc] ">
    <Link href={`/${lang}/about`}>{navigation.about}</Link>
  </li>
  <li className="block px-4 py-2  hover:text-[#322387cc] ">
    <Link href={`/${lang}`}>{navigation.colleges}</Link>
  </li>
  <li className="block px-4 py-2  hover:text-[#322387cc] ">
    <Link href={`/${lang}/about`}>{navigation.academic}</Link>
  </li>
  <li className="block px-4 py-2  hover:text-[#322387cc] ">
    <Link href={`/${lang}/about`}>{navigation.research}</Link>
  </li>
  <li className="block px-4 py-2  hover:text-[#322387cc] ">
    <Link href={`/${lang}/about`}>{navigation.life}</Link>
  </li>
  <li className="block">
        <div className="relative">
    <button
      className="   hover:text-[#322387cc]  py-2 flex rounded"
      onClick={toggleDropdown}
    >
       {navigation.hospital}

      <IoIosArrowDown className='mt-1 mr-2' />  </button>
    {isOpen && (
      <div 
      className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
         <div className=''>
                 {hospitalMenuItems.map(([label, value], index) => (
                <div key={index}>
                   <a
          href="#"
          className="block px-4 py-2  text-gray-700 hover:text-[#322387cc] "
        > {value}
          </a>
                </div>
              ))}
   
      </div>
      </div>
    )}
  </div>
  </li>
</div>
  )
}
export default Nav