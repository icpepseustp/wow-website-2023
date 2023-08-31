import React from 'react';
import { wow } from '../utils/data/icpep';
import ProjectPhotoSlider from './ProjectPhotoSlider';

const Project = ({ project }) => {
	return (
		<div className="flex justify-center items-center">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 px-2  text-white">
				<div className="lg:w-5/6">
					<div className="flex justify-center overflow-y-hidden">
						<ProjectPhotoSlider projectPhotos={project.photos} />
					</div>
				</div>
				<div className="flex flex-col justify-center py-8 lg:py-4 ">
					<div className="flex flex-col items-center lg:items-start gap-y-4 py-2 lg:w-5/6">
						<h3 className="font-arcade  uppercase text-2xl lg:text-4xl lg:text-left">
							{project.title}
						</h3>
						<p className="font-garet text-sm lg:text-lg text-justify w-full">
							{project.description}
						</p>

						<div className="flex flex-col items-start gap-y-3 py-3 w-full">
							<p>
								<strong>Type: </strong>
								{project.type}
							</p>
							<div className="flex">
								<p className="font-bold mr-2">Tech: </p>
								<div className="flex flex-wrap gap-2 items-center">
									{project.tech.map((tc) => (
										<div className=" flex items-center bg-light px-3 min-h-[24px] text-sm rounded-xl">
											{`${tc}`}{' '}
										</div>
									))}
								</div>
							</div>
							<p className="text-left">
								<strong>Created by: </strong>
								{project.creator}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
