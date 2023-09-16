'use client'
import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import About from './About'
import Greeting from './Greeting'
import Vision from './Vision'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AboutPage({lang}) {
  let [categories] = useState({
    'عن الجامعة': {
      id: 1,
      component: <About />
    },
    'رسالة ترحيب رئيس الجامعة': {
      id: 2,
      component: <Greeting />
    },
    'سياسة الجامعة': {
      id: 3,
      component: null
    },
    'الرؤيا والرسالة': {
      id: 4,
      component: <Vision />
    },
  })
  return (
    <div>
      {' '}
      <Tab.Group>
        <div className='flex flex-col-reverse gap-10 lg:flex-row lg:gap-0'>
          <Tab.List className='rounded-xlpx-5 flex w-72 flex-col space-x-1'>
            {Object.keys(categories).map(category => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    `w-full py-2.5 text-xl font-bold leading-5 text-black ${
                      lang == 'ar' ? 'text-right' : 'text-left'
                    } `,
                    'outline-0 focus:outline-none ',
                    selected ? '' : 'text-black/30 hover:bg-white/[0.12]'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-2 w-full px-5'>
            {Object.values(categories).map((category, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'outline-0 focus:outline-none'
                )}
              >
                {category.component}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}

export default AboutPage
