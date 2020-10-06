import React, { useContext } from 'react';
import { ToggleContext, ButtonContext } from '../ToggleStateContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faGithubSquare,
	faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import LanguageSelect from '../LanguageSelect';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import NavFooter from '../NavFooter';

library.add(faLinkedin, faGithubSquare, faCodepen);

const SideDrawer = () => {
	const [navOpen, setNavOpen] = useContext(ToggleContext);
	const [isOpen, setOpen] = useContext(ButtonContext);

	return (
		<div className={navOpen ? 'active' : ''}>
			<nav
				className="sideDrawer"
				onClick={() => {
					if (isOpen) {
						setNavOpen(false);
						setOpen(false);
					}
				}}
			>
				<ul>
					<div className="sideDrawer-main">
						<div className="sideDrawer-nav">
							<Link to="/">
								<li>Home</li>
							</Link>
							<Link to="/projects">
								<li>
									<FormattedMessage
										id="nav.projects"
										defaultMessage="Projects"
									/>
								</li>
							</Link>
							<Link to="/about">
								<li>About</li>
							</Link>
						</div>
						<div className="language-select">
							<LanguageSelect />
						</div>
						<div className="logo_links">
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
							<a href="/" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
					<footer>
						<NavFooter />
					</footer>
				</ul>
			</nav>
		</div>
	);
};

export default SideDrawer;
