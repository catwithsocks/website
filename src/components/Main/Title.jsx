import React, { useContext } from 'react';
import { ToggleContext } from '../ToggleStateContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import LinkButton from '../LinkButton';

const pageTransition = {
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

library.add(faGithubSquare, faCodepen);

const Home = () => {
	const [navOpen, setNavOpen] = useContext(ToggleContext);

	return (
		<motion.div
			id="home"
			initial="out"
			animate="in"
			exit="out"
			variants={pageTransition}
		>
			<section
				className="title"
				onClick={() => (navOpen ? setNavOpen(false) : navOpen === false)}
			>
				<div className="title-content-wrapper">
					<div className="title-heading">
						<div className="title-container">
							<div className="title-main">
								<span className="block"></span>
								<h1 className="lg-heading">
									<FormattedMessage
										id="title.title"
										defaultMessage="Portfolio"
									/>
								</h1>
								<div className="icons">
									<a
										href="https://github.com/cateatsbananas"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faGithubSquare} />
									</a>
									<a href="/" target="_blank" rel="noopener noreferrer">
										<FontAwesomeIcon icon={faCodepen} />
									</a>
								</div>
							</div>
							<div className="role">
								{/* <div className="block">
									
								</div> */}
								<p>
									<FormattedMessage
										id="title.subTitle"
										defaultMessage="Frontend Development"
									/>
								</p>
							</div>
						</div>
					</div>
				</div>
				<LinkButton
					name={<FormattedMessage id="title.next" defaultMessage="Projects" />}
				/>
			</section>
		</motion.div>
	);
};

export default Home;
