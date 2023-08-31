import React from 'react';
import Container from '../components/Container';
import { wow } from '../utils/data/icpep';

const MissionVision = () => {
	return (
		<Container>
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="50"
				className={`relative min-h-screen w-full bg-gridBg bg-cover bg-center`}
			>
				<div
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-delay="50"
					className="grid sm:grid-cols-1 lg:grid-cols-2 px-4 lg:px-64 py-8 lg:py-16 gap-x-4 text-dark"
				>
					<div className="col-span-1 my-2 lg:mx-4">
						<div className="py-2 lg:py-4">
							<h1 className="font-bricksans font-bold text-xl lg:text-3xl">
								Mission...
							</h1>
						</div>
						<p className="font-garet text-sm lg:text-xl text-justify">
							<span className="font-bold">
								{' '}
								Institute of Computer Engineers of the Philippines Student
								Edition – University of Science and Technology of Southern
								Philippines (ICpEP.SE - USTP){' '}
							</span>{' '}
							aims to provide Computer Engineering students with a strong
							foundation to enhance their knowledge, skills, and innovativeness
							that will assist them in their personal development, to promote
							and safeguard the welfare and interest according to their
							privilege.
						</p>
					</div>
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="col-span-1 my-2 lg:mx-4"
					>
						<div className="py-2 lg:py-4">
							<h1 className="font-bricksans font-bold text-xl lg:text-3xl">
								Vision...
							</h1>
						</div>
						<p className="font-garet text-sm lg:text-xl text-justify">
							<span className="font-bold text-justify">
								{' '}
								Institute of Computer Engineers of the Philippines Student
								Edition – University of Science and Technology of Southern
								Philippines (ICpEP.SE - USTP){' '}
							</span>{' '}
							is the unified organization that channels productive, competitive,
							and innovative computer engineers in sustaining knowledge in
							mathematics, sciences and engineering skills.
						</p>
					</div>
				</div>
				<marquee
					scrollamount="30"
					direction="right"
					className="absolute bottom-0 right-0 pb-6"
				>
					<img
						className="transform -scale-x-100"
						width={500}
						src={`${wow.spaceship}`}
						alt=""
					/>
				</marquee>
			</div>
		</Container>
	);
};

export default MissionVision;
