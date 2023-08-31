import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Project from './Project';
import { projects } from '../utils/data/projects';

const ProjectsSlider = () => {
	return (
		<div>
			<Carousel
				autoPlay
				swipeable
				interval={15000}
				infiniteLoop
				showArrows={false}
				showStatus={false}
				showIndicators={false}
				transitionTime={1000}
				preventMovementUntilSwipeScrollTolerance={true}
				swipeScrollTolerance={50}
			>
				{projects.map((project) => (
					<div>
						<Project project={project} />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default ProjectsSlider;
