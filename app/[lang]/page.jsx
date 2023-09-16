import { getDictionary } from '@/lib/dictionary'
import LastNews from './components/LastNews'
import Activities from './components/Activities'
import ContactUs from './components/ContactUs'
import UniversityStatistics from './components/UniversityStatistics'
import Researchs from './components/Researchs'
import ResearchSi from './components/researchSi'

export default async function Home({ params: { lang } }) {
  const { page } = await getDictionary(lang)

  return (
      <div className='container'>
        <LastNews page = {page} />
        <Activities page = {page} />
        <UniversityStatistics page = {page}/>
        <ResearchSi/>
        <ContactUs  page = {page}/>
      </div>
  )
}

