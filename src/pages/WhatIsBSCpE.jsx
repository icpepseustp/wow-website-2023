import React from 'react'
import Container from '../components/Container'
import { gradientBg } from '../utils/gradientbg'
import { icpep } from '../utils/data/icpep'

const WhatIsBSCpE = () => {
  const _gradientBg = gradientBg()
  return (
    <Container>
      <div className={`static flex items-center ${_gradientBg} w-full min-h-screen px-4 md:px-20 lg:px-32`}>
        <div className='grid grid-cols-2 gap-x-6'>
          <div 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className='col-span-1 py-6 my-24 lg:mx-0 w-full text-white'
          >
            <div className='w-full'>
              <h1 className='font-bricksans font-bold text-3xl lg:text-4xl'>
                What is BS CpE?
              </h1>
            </div>
            <div className='flex py-0 lg:py-4'>
              <h1 className='font-bricksans font-bold text-s md:text-m lg:text-3xl'>
                -----------------------------------
              </h1>
            </div>
            <p className='font-garet font-bold text-sm lg:text-2xl text-justify'>
              The <span className='text-[#ADD0DC] font-bold font-bricksans'>Bachelor of Science in Computer Engineering</span> is a 
              four-year program that integrates Computer Science and Electrical Engineering knowledge in designing,
              developing, implementing, maintaining, and integrating software and hardware components in modern
              computing systems. Computer Engineers are expected to be competent in the knowledge drawn from standard
              topics in mathematics and engineering sciences and eager learners of this ever-growing field of knowledge.
            </p>
          </div>
          <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="cneter-bottom"
            className='flex col-span-1 my-20 lg:mx-0 items-center'
          >
            <img src={`${icpep.gif_joebot}`}/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhatIsBSCpE