import Link from 'next/link'
import { ReactNode } from 'react'

export default function RootLayout({ children }) {
  return (
    <div className='container'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-48'>
          <ul className=' list-none space-y-2 text-lg -mt-5'>
            <li>
              <Link href='/about'>عن الجامعة</Link>
            </li>
            <li>
              <Link href='/about/greeting'>رسالة ترحيب رئيس الجامعة</Link>
            </li>
            <li>
              <Link href='/about/policy'> سياسة الجامعة</Link>
            </li>
            <li>
              <Link href='/about/vision'>الرؤيا والرسالة</Link>
            </li>
            <li>
              <Link href='/about/our-message'>شعار الجامعة</Link>
            </li>
            <li>
              <Link href='/about/plan'>الخطة الاستراتيجية</Link>
            </li>
            <li>
              <Link href='/about/structure'>الهيكل التنظيمي</Link>
            </li>
            <li>
              <Link href='/about/management'>إدارة الجامعة</Link>
            </li>
            <li>
              <Link href='/about/departments'>المكاتب والأقسام</Link>
            </li>
            <li>
              <Link href='/about/activities'>جدول الفعاليات</Link>
            </li>
            <li>
              <Link href='/about/news'>غرفة الأخبار</Link>
            </li>
            <li>
              <Link href='/about/jobs'>الوظائف</Link>
            </li>
          </ul>
        </div>
        <div className = "w-full px-10">{children}</div>
      </div>
    </div>
  )
}
