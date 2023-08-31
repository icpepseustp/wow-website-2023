import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TipCard from './TipCard';
import { seniorTips } from '../utils/data/tips';

const TipsSlider = () => {
	return (
		<Carousel
			autoPlay
			swipeable
			infiniteLoop
			interval={4000}
			showIndicators={false}
			transitionTime={1000}
			preventMovementUntilSwipeScrollTolerance={true}
			swipeScrollTolerance={50}
		>
			{seniorTips.map((tip) => (
				<div>
					<TipCard
						dark={seniorTips.indexOf(tip) % 2 == 0 ? false : true}
						message={tip.message}
						senior_name={tip.name}
						senior_age={tip.age}
					/>
				</div>
			))}
		</Carousel>
	);
};

export default TipsSlider;
