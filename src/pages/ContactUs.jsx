import React from 'react';
import Container from '../components/Container';

const ContactUs = () => {
	return (
		<Container>
			<div className="flex justify-center items-center text-white w-full min-h-screen bg-dark">
				<div className="flex flex-col">
					<div className="flex justify-center py-8 lg:py-32">
						<h1 className="lg:text-3xl  font-bricksans">
							Contact ICpEP.SE-USTP
						</h1>
					</div>
					<div className="lg:flex md:gap-x-16 lg:gap-x-32">
						<div className="flex flex-col items-center">
							<div className="w-28 text-center bg-light px-3 py-1 rounded-lg">
								<a
									className="font-arcade  "
									target="_blank"
									href="https://www.facebook.com/icpep.se.ustp"
								>
									FACEBOOK
								</a>
							</div>
							<div className="py-4">
								<p className="font-garet">/icpep.se.ustp</p>
							</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-28 text-center bg-light px-3 py-1 rounded-lg">
								<a
									className="font-arcade  "
									target="_blank"
									href="mailto:icpepse@ustp.edu.ph"
								>
									EMAIL
								</a>
							</div>
							<div className="py-4">
								<p className="font-garet">icpepse@ustp.edu.ph</p>
							</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-28 text-center bg-light px-3 py-1 rounded-lg">
								<a
									className="font-arcade"
									target="_blank"
									href="https://www.instagram.com/icpep.se_ustp/"
								>
									INSTAGRAM
								</a>
							</div>
							<div className="py-4">
								<p className="font-garet">icpep.se_ustp</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ContactUs;
