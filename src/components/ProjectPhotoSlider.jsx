import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ProjectPhotoSlider = ({ projectPhotos }) => {
	return (
		<Carousel
			autoPlay={true}
			interval={4000}
			infiniteLoop
			showArrows={false}
			showThumbs={false}
			showStatus={false}
			showIndicators={false}
			transitionTime={1000}
		>
			{projectPhotos.map((photo) => (
				<div className="flex items-center lg:justify-end shadow-md">
					<img
						className="object-contain max-w-[600px] h-[250px] lg:h-[500px]"
						src={`${photo}`}
						alt=""
					/>
				</div>
			))}
		</Carousel>
	);
};

export default ProjectPhotoSlider;
