import Image from 'next/image'
import research from './images/research.jpg'
export default function Researchs() {
  return (
    <div>
      <h2>
        <h2 className='mb-2 text-3xl font-bold'>البحث العلمي </h2>
        <hr className='mb-5' />
      </h2>
      <Image width={350} height={250} className='mb-5 w-full' src={research} />
      <p className='mb-3 text-lg text-semibold'>
        هو كل جهد علمي منظَّم يهدف إلى تنمية المعرفة الإنسانية والقدرة على
        تطويرها وتنفيذها وتطبيقها؛ لذلك تسعى عمادة البحث العلمي إلى توفير المناخ
        المناسب للباحثين من داخل الجامعة وخارجها، للتنافس في مجالات البحث
        المختلفة، ورفد المجتمع الفلسطيني باحتياجاته من أنواع المعرفة العلمية
        المتطورة التي تسهم في دعم الاقتصاد الوطني ونموه وتطوره..
      </p>
    </div>
  )
}
