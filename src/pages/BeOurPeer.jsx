import React from 'react';
import { icpeers_qr } from '../utils/data/icpep';

const BeOurPeer = () => {
	return (
		<div className="bg-pale w-full py-14 lg:py-16">
			<div className="lg:flex justify-center items-center gap-x-4 text-dark px-2">
				<div className="flex justify-center py-5">
					<img
						className="bg-dark border-2 border- rounded"
						width={230}
						src={`${icpeers_qr}`}
						alt="icpeers-registration"
					/>
				</div>

				<div className="flex flex-col gap-y-1 lg:gap-y-4">
					<h1 className="font-bricksans text-xl lg:text-3xl text-center lg:text-left">
						Be our Peer!
					</h1>
					<p className="font-garet text-center lg:text-left">
						Sign up for iCPEers Volunteers Edition Now!
					</p>
				</div>
			</div>
		</div>
	);
};

export default BeOurPeer;
