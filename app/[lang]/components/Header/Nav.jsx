import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from '../locale-switcher'
const { navigation } = await getDictionary(lang)

const Nav = ({lang}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <nav className='hidden lg:flex  lg:gap-52' >
      <ul className='text-white lg:flex space-x-6 items-center text-[18px] leading-6 font-normal lg:mr-32'>
        <li className='ml-6 '>
        <Link href={`/${lang}`}>{navigation.home}</Link>
                </li>
        <li>
          <Link className='cursor-pointer hover:text-[#04C873]  transition-all delay-200 ' href='/privacy'>المعالجين </Link>
        </li>
        <li>
          <Link className='cursor-pointer hover:text-[#04C873]  transition-all delay-200 ' href='/terms'> كيف تحجز جلستك ؟ </Link>
        </li>
        <li>
          {/* <div className="relative">
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
          </div> */}
        </li>
      </ul>
     <LocaleSwitcher />
    </nav >
  )
}
export default Nav