import React from 'react';
import Container from '../components/Container';
import { gradientBg } from '../utils/gradientbg';
import Project from '../components/Project';
import ProjectsSlider from '../components/ProjectsSlider';
import { wow } from '../utils/data/icpep';

const CpEProjects = () => {
	return (
		<div
			className={`flex flex-col justify-center items-center w-full pt-16 lg:pt-24 ${gradientBg()}`}
		>
			<div
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-delay="50"
				className="relative text-white mt-16 mb-8"
			>
				<h1 className="font-bricksans text-3xl">CpE Projects</h1>
				<p className="text-[#f37925] text-2xl">
					....................................................
				</p>
				<div className="absolute w-full top-0 right-0 ">
					<img
						// width={200}
						className="h-[130px] lg:h-[200px] visible ml-[193px] lg:ml-[152px] -my-[56px] lg:-my-[118px] top-0 right-0 transform -scale-x-100"
						src={`${wow.rocket}`}
						alt=""
					/>
				</div>
			</div>
			<ProjectsSlider />
		</div>
	);
};

export default CpEProjects;
