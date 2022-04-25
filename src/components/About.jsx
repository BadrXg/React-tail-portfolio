import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				Chef with 8+ years of experience preparing flawless presentation. I’m looking for opportunities to change
				my career path and position in a reputed organization where I can learn new skill and expand my knowledge. I have experience
				using Python, Html, Css, React, JavaScript and R.

				</p>
				<a
					href="mailto:sky_walker97@icloud.com"
					className="block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					sky_walker97@icloud.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Badrul"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;