import AboutPage from "./../components/AboutPage"
import { getDictionary } from '@/lib/dictionary'



export default async function Example({ params: { lang } }) {
  const { page } = await getDictionary(lang)


  return (
    <div className="w-full py-16 container">
      <AboutPage lang = {lang}/>
    </div>
  )
}
