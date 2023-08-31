import React from 'react';
import TipsSlider from '../components/TipsSlider';

const TipsFromSeniors = () => {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-delay="50"
			className={`flex justify-center items-center bg-dark w-full px-4 md:px-20 lg:px-32`}
		>
			<div>
				<div
					data-aos="fade-down"
					data-aos-duration="1000"
					data-aos-delay="50"
					className="py-4 lg:py-8"
				>
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
