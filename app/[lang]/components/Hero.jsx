import Image from 'next/image'
import React from 'react'
import { getDictionary } from '@/lib/dictionary'
async function Hero({lang}) {
  const { hero } = await getDictionary(lang)

  return (
    <div
      class='relative overflow-hidden bg-cover bg-no-repeat'
      style={{
        backgroundPosition: '50%',
        backgroundImage: `url(https://mdbcdn.b-cdn.net/img/new/slides/146.webp)`,
        height: '500px'
      }}
    >
      <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.80)] bg-fixed'>
        <div class='flex h-full items-center justify-center'>
          <div class='px-6 text-center text-white md:px-12'>
            <h1 class='mb-10 mt-2 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
            {hero.title} <br />
            </h1>
         <p>{hero.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

// <div className=' relative h-[500px]'>
//   <Image height={600} width={1200} className='absolute inset-0 !w-full !h-auto ' src={hero} />
//   <div className = "overlay absolute inset-0 bg-black opacity-30 w-full h-auto"></div>
//   <div className='absolute inset-0 text-white container pt-24'>
//     <h1 className='text-4xl font-bold mb-3'>Uinversity News</h1>
//     <p className = "w-[700px]">
//       Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industry's standard dummy text ever
//       since the 1500s
//     </p>
//   </div>
// </div>
