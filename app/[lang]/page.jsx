import { getDictionary } from '@/lib/dictionary'
import LastNews from './components/LastNews'
import Activities from './components/Activities'
import CarousalHome from './components/Carousal/CarousalHome'

export default async function Home({ params: { lang } }) {
  const { page } = await getDictionary(lang)

  return (
      <div className='container'>
        <LastNews page = {page} />
        <Activities page = {page} />
        <CarousalHome/>
      </div>
  )
}



// import { Locale } from '@/i18n.config'
// import { getDictionary } from '@/lib/dictionary'

// export default async function Home({
//   params: { lang }
// }: {
//   params: { lang: Locale }
// }) {
//   const { page } = await getDictionary(lang)

//   return (
//     <section className='py-24'>
//       <div className='container'>
//         <h1 className='text-3xl font-bold'>{page.home.title}</h1>
//         <p className='text-gray-500'>{page.home.description}</p>
//       </div>
//     </section>
//   )
// }
