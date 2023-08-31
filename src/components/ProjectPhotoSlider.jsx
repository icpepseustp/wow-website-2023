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
				<div className="flex justify-center items-center shadow-md">
					<img
						className="object-cover max-w-[560px] h-[250px] lg:h-[400px]"
						src={`${photo}`}
						alt=""
					/>
				</div>
			))}
		</Carousel>
	);
};

export default ProjectPhotoSlider;
