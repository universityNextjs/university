import React from 'react'

const ContactUs = ({page}) => {
  const {home: {cuntactus}} = page;

  return (
    <div>
        <div className="  px-8 py-12">
<div className="text-center w-full">
  <h1 className="text-3xl text-black lg:text-5xl">{cuntactus.title}</h1>
</div>
<div
  className="max-w-screen-2xl mt-14 px-8 grid gap-14 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
  <div className="flex flex-col items-right justify-between">
    <div>
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight">{cuntactus.subTitle}</h2>
      <div className="text-gray-700 mt-8">
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.261678127448!2d34.430915799999994!3d31.50862705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7fdf35e33cad%3A0xb618b17d5e5c99af!2z2YXYt9i52YUg2YHYt9mI2LEg2YjYudi02Kc!5e0!3m2!1sar!2s!4v1694713175431!5m2!1sar!2s"
    width="100%"
    height="400"
    style={{ border: "2px", marginBottom:"8px",padding:"10px",borderRadius:"25px"}}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
      </div>
  
    </div>
  </div>
  <div className="">
    <div>
      <span className="uppercase text-sm text-gray-600 font-bold">{cuntactus.fullName} </span>
      <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" placeholder=""/>
    </div>
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-600 font-bold">{cuntactus.mail}</span>
      <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"/>
    </div>
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-600 font-bold">{cuntactus.message}</span>
      <textarea
        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
    </div>
    <div className="mt-8">
      <button
        className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
     {cuntactus.sendMessage}
      </button>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default ContactUs