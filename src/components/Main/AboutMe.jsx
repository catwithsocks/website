import React from 'react';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

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
							<div id="HTML5" className="tech-btn">
								HTML5
								<span><img src={html5} alt="HTML5 Logo" /></span>
							</div>
							<div id="CSS" className="tech-btn">
								CSS3
								<span><img src={css3} alt="CSS3 Logo" /></span>
							</div>
							<div id="JS" className="tech-btn">
								Javascript
								<span><img src={javascript} alt="JS Logo" /></span>
							</div>
							<div id="SASS" className="tech-btn">
								SASS
								<span><img src={sass} alt="SASS Logo" /></span>
							</div>
							<div id="TS" className="tech-btn">
								Typescript
								<span><img src={typescript} alt="TS Logo" /></span>
							</div>
							<div id="REACT" className="tech-btn">
								React
								<span><img src={react} alt="React Logo" /></span>
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
