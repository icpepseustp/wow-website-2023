import React from 'react';

const TipCard = ({ dark, message, senior_name, senior_age }) => {
	var cardColor = dark
		? 'bg-dark text-white  border-2 border-white'
		: 'bg-[#FFFFFF] text-dark border-2 border-dark';

	return (
		<div className={`w-full`}>
			<div
				className={`flex items-center ${cardColor} rounded-lg my-4 px-4 lg:px-8 min-w-full min-h-[200px] lg:min-w-[300px] lg:min-h-[300px] max-h-[350px] max-w-[350px] `}
			>
				<div className="flex flex-col ">
					<p className="overflow-hidden font-garet my-3 font-semibold text-lg lg:text-xl">
						"{message}"
					</p>
					<p className="font-arcade font-semibold lg:text-2xl">
						{' '}
						- {senior_name}, {senior_age} YRS OLD
					</p>
				</div>
			</div>
		</div>
	);
};

export default TipCard;
