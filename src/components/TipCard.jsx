import React from 'react'

const TipCard = ({dark, message, senior_name, senior_age}) => {
    var cardColor = dark ? 'bg-dark text-white' :'bg-[#FFFFFF] text-dark border-2 border-dark';
    
    return (
        <div className={``}>
            <div className={` ${cardColor} rounded-lg py-12 px-4 lg:py-24 lg:px-8 max-h-[350px] max-w-[350px] `}>
                <p className='font-garet font-semibold'>"{message}"</p>
                <p className='font-arcade font-semibold lg:text-2xl'> - {senior_name}, {senior_age} YRS OLD</p>
            </div>            
        </div>
    )
}

export default TipCard