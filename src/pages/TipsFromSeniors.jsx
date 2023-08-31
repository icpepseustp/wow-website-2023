import React from 'react';
import TipsSlider from '../components/TipsSlider';

const TipsFromSeniors = () => {
	return (
		<div
			className={`flex justify-center items-center bg-dark w-full px-4 md:px-20 lg:px-32`}
		>
			<div className="">
				<div className="py-4 lg:py-8">
					<h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bricksans text-white">
						A tip from your seniors...
					</h1>
				</div>
				<div className="overflow-x-hidden">
					<TipsSlider />
				</div>
			</div>
		</div>
	);
};

export default TipsFromSeniors;
