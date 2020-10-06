import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAddressCard,
	faHome,
	faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';

const FloatingNav = () => {
	return (
		<div className="floating-nav-wrapper">
			<div className="floating-nav-container">
				<ul className="floating-nav">
					<a href="/" rel="noopener noreferrer">
						<li>
							<FontAwesomeIcon icon={faHome} />
						</li>
					</a>
					<a href="/projects" rel="noopener noreferrer">
						<li>
							<FontAwesomeIcon icon={faProjectDiagram} />
						</li>
					</a>
					<a href="/about" rel="noopener noreferrer">
						<li>
							<FontAwesomeIcon icon={faAddressCard} />
						</li>
					</a>
				</ul>
				<ul className="floating-links">
					<a
						href="https://github.com/cateatsbananas"
						rel="noopener noreferrer"
						target="_blank"
					>
						<li>
							<FontAwesomeIcon icon={faGithubSquare} />
						</li>
					</a>
					<a href="/about" rel="noopener noreferrer">
						<li>
							<FontAwesomeIcon icon={faCodepen} />
						</li>
					</a>
				</ul>
			</div>
		</div>
	);
};

export default FloatingNav;
