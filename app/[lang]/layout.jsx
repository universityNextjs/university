import './globals.css'
import { i18n } from '@/i18n.config'
import Header from './components/header'
import { Inter } from 'next/font/google'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export async function generateStaticParams() {
  
  return i18n.locales.map(locale => ({ lang: locale }))
} 

export default function RootLayout({ children, params }) {
  const isArabic = params.lang === 'ar';
const direction = isArabic ? 'rtl' : 'ltr';
  return (
    <html lang={params.lang}  dir = {params.lang == "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>
          <section className='py-6'>
            <Hero lang = {params.lang} />
           <div className='py-20'>
           {children}
           </div>
            <ContactUs/>
          </section>
        </main>
      
        <Footer lang={params.lang}/>
      </body>
    </html>
  )
}
