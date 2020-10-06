import React from 'react';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

import aboutMePic from '../../assets/images/etc/about-me-test.jpg';
import javascript from '../../assets/images/logos/javascript.svg';
import css3 from '../../assets/images/logos/css3.svg';
import html5 from '../../assets/images/logos/html5.svg';
import sass from '../../assets/images/logos/sass-1.svg';
import react from '../../assets/images/logos/react-2.svg';
import typescript from '../../assets/images/logos/typescript.svg';

const pageTransition = {
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

const AboutMe = () => {
	return (
		<motion.div
			id="about"
			initial="out"
			animate="in"
			exit="out"
			variants={pageTransition}
		>
			<div className="about-me">
				<div className="title_about">
					<a href="/about">
						<h3>About Me</h3>
					</a>
				</div>
				<div className="content_about">
					<section className="about-1">
						{/* <div className="about-picture">
							<img src={aboutMePic} alt="About-Me" />
						</div> */}
						<div className="about-description">
							<h4>
								<FormattedMessage id="about.title1" defaultMessage="About Me" />
							</h4>
							<p>
								<FormattedMessage id="about.text1" defaultMessage="About Me" />
							</p>
						</div>
					</section>
					<section className="about-2">
						<div className="overview-tech">
							<div className="row">
								<div className="icon-tech">
									<img src={html5} alt="HTML5 Logo" />
								</div>
								<div className="icon-tech">
									<img src={css3} alt="CSS3 Logo" />
								</div>
								<div className="icon-tech">
									<img src={javascript} alt="Javascript Logo" />
								</div>
								<div className="icon-tech">
									<img src={sass} alt="SASS Logo" />
								</div>
							</div>
							<div className="row">
								<div className="icon-tech">
									<img src={typescript} alt="Typescript Logo" />
								</div>
								<div className="icon-tech">
									<img src={react} alt="React Logo" />
								</div>
							</div>
						</div>
						<div className="about-description">
							<h4>
								<FormattedMessage id="about.title2" defaultMessage="About Me" />
							</h4>
							<p>
								<FormattedMessage id="about.text2" defaultMessage="About Me" />
							</p>
						</div>
					</section>
				</div>
			</div>
		</motion.div>
	);
};
export default AboutMe;
