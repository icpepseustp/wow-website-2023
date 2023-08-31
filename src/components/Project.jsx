import React from 'react';
import { wow } from '../utils/data/icpep';
import ProjectPhotoSlider from './ProjectPhotoSlider';

const Project = ({ project }) => {
	return (
		<div className="flex justify-center">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 px-2 lg:w-3/4 text-white">
				<div className="flex justify-center lg:justify-end w-full">
					<div className="overflow-y-hidden ">
						<ProjectPhotoSlider projectPhotos={project.photos} />
					</div>
				</div>
				<div className="flex flex-col items-center py-8 lg:py-4 ">
					<div className="flex flex-col gap-y-4 py-2">
						<h3 className="font-arcade  uppercase text-xl lg:text-3xl lg:text-left">
							{project.title}
						</h3>
						<p className="font-garet text-justify text-sm max-w-[550px] lg:w-full">
							{project.description}
						</p>

						<div className="flex flex-col items-start gap-y-3 py-3">
							<p>
								<strong>Type: </strong>
								{project.type}
							</p>
							<div className="flex">
								<p className="font-bold">Tech: </p>
								<div className="flex items-center">
									{project.tech.map((tc) => (
										<div className=" flex items-center bg-light mx-1 px-3 h-[24px] text-sm rounded-xl">
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
