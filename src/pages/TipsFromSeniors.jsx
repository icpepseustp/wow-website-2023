import React from 'react';
import Container from '../components/Container';
import TipCard from '../components/TipCard';
import TipsSlider from '../components/TipsSlider';
import { gradientBg } from '../utils/gradientbg';

const TipsFromSeniors = () => {
	const _gradientBg = gradientBg();
	return (
		<div
			className={`flex justify-center items-center ${_gradientBg} w-full py-16 lg:py-32 px-4 md:px-20 lg:px-32`}
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
