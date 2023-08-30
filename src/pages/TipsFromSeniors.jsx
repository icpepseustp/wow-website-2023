import React from 'react';
import Container from '../components/Container';
import TipCard from '../components/TipCard';

const TipsFromSeniors = () => {
	return (
		<Container>
			<div className="flex justify-center items-center bg-dark w-full min-h-screen px-4 md:px-20 lg:px-32">
				<div className="">
					<div className="py-4 lg:py-8">
						<h1 className="text-xl md:text-2xl lg:text-4xl font-bricksans text-white">
							A tip from your seniors...
						</h1>
					</div>

					<div className="lg:flex justify-center py-4 lg:py-8 lg:gap-x-4">
						<TipCard
							dark={false}
							message={"Kung gikapoy ka, ayaw sa'g padayon. Undang na! Charot"}
							senior_name={'Kuya GPT'}
							senior_age={'21'}
						/>
						<TipCard
							dark={true}
							message={'Pili ka: Bilar o matulog kang malinawon.'}
							senior_name={'Ate GPT'}
							senior_age={'23'}
						/>
						<TipCard
							dark={false}
							message={'Nganong nag-CpE man mo?'}
							senior_name={'Manong Guard'}
							senior_age={'25'}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default TipsFromSeniors;
