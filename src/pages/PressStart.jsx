import React from 'react'
import { gradientBg } from '../utils/gradientbg'
import { icpep, wow } from '../utils/data/icpep';

const PressStart = () => {
    const _gradientBg = gradientBg();

    return (
        <div className={`static flex justify-center text-white items-center min-h-screen w-full ${_gradientBg} bg-nebula bg-center bg-cover `}>
            <div className="absolute top-0 lg:top-0 lg:right-0 p-16">
                <img width={150} src={`${icpep.logo}`} alt="" />
            </div>
            <div className="flex justify-center items-center ">
                <div className="flex flex-col">
                    <img width={1500} src={`${wow.press_start}`} alt="press-start" />
                    <h1 className="text-center text-xl md:text-4xl lg:text-6xl uppercase font-arcade">
                        A Week of Welcome Edition
                    </h1>
                </div>            
            </div>
        </div>
    )
}

export default PressStart