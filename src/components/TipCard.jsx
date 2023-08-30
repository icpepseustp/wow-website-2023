import React from 'react';

const TipCard = ({ dark, message, senior_name, senior_age }) => {
	var cardColor = dark
		? 'bg-dark text-white  border-2 border-white'
		: 'bg-[#FFFFFF] text-dark border-2 border-dark';

	return (
		<div className={`flex justify-center`}>
			<div
				className={`flex ${cardColor} rounded-lg my-4 px-4 lg:px-8 w-[350px] min-h-[300px]  `}
			>
				<div className="flex flex-col gap-y-6 justify-center">
					<p className="overflow-hidden font-garet font-semibold text-lg lg:text-xl">
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
