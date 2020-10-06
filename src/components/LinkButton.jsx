import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LinkButton = ({ name }) => {
	return (
		<div className="link-button">
			<div className="button">
				<Link to="/projects">
					<button>
						<div className="button-text">
							<h6>
								{name} <FontAwesomeIcon icon={faArrowRight} />
							</h6>
						</div>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default LinkButton;
