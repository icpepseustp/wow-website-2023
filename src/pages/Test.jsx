import React from 'react'
import { faculty } from '../utils/data/faculty';
import { icpep, wow } from '../utils/data/icpep';

const Test = () => {
  return (
    <div className='w-full  h-screen'>
        <h1 className='font-arcade font-bold'>Arcade Gamer</h1>
        <h1 className='font-garet'>Garet</h1>
        <h1 className='font-bricksans'>Bricksans</h1>
        {/* <img src="https://res.cloudinary.com/dyi2sla5u/image/upload/v1693321343/assets/faculty/cga8w9elirgjpfmrnthv.png" alt="" /> */}
        {/* <div className={` ${_gradientBg} w-full min-h-screen `}>
          Hello
        </div> */}
        <ul>
        {faculty.map(fac => (
          <li className='flex'>
            <img height={50} width={50} src={`${fac.photo_url}`} alt="" />
            <p>{fac.name} | </p>
            <p>{fac.position} | </p>
            <p>{fac.degree} </p>
            <br/>
          </li>
        ))}
        </ul>

        <img src={`${icpep.logo}`} alt="" />
        <img src={`${wow.rocket}`} alt="" />
      </div>
  )
}

export default Test