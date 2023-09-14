import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <div className={` scroll-smooth fixed z-[10000]`}
    >
      <header
        className={`active shadow-sm shadow-[#8ed2b5]'}
        p-3 lg:px-0 w-full  fixed top-0 left-0 z-[10000]
        transition-all duration-300 bg-[#193F63] `}
      >
        <div className='container mx-auto flex items-center px-4   justify-between  lg:justify-evenly'>
          {/* logo  */}
           <h3>Uinversity</h3>
          {/* nav */}
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
          {/* nav-mobile */}
          {/* <NavMobile /> */}
        </div>
        <LocaleSwitcher />
      </header>
    </div>
      </nav>
    </header>
  )
}
