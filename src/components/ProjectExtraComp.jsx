import React, { useState } from 'react';
import { makeStyles, Modal, Backdrop, Fade } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: 'rgb(42,42,42)',
		/* border: '2px solid #000', */
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function ProjCompExtra({
	src,
	src2,
	projName,
	projText,
	linkToProj,
	chipLink,
	projType,
	projDesc,
	projTech,
	projHtml,
	projCss,
}) {
	const classes = useStyles();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className="project-extra-container">
			<div className="project-extra-header">
				<h6 className="project-extra-name">{projName}</h6>
				<p className="project-extra-text">{projText}</p>
			</div>
			<div className="project-extra-body">
				<img className="project-extra-img" src={src} alt="Project_image" />
			</div>
			<div className="project--extra-overlay-wrapper"></div>
			<span className="project-extra-overlay">
				<img className="project-extra-img" src={src2} alt="Project_image" />
				<div className="overlay-extra-elements">
					<div className="overlay-extra-container">
						<h6 className="project-extra-name">{projName}</h6>
						<div className="link-extra-source-wrapper">
							<button
								className="link-extra-source"
								onClick={() => setModalIsOpen(!modalIsOpen)}
							>
								<FormattedMessage
									id="projects.projects.project.link"
									defaultMessage="Project"
								/>
							</button>

							<Modal
								aria-labelledby="transition-modal-title"
								aria-describedby="transition-modal-description"
								className={classes.modal}
								open={modalIsOpen}
								onClose={() => setModalIsOpen(false)}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{
									timeout: 500,
								}}
							>
								<Fade in={modalIsOpen}>
									<div className={classes.paper}>
										<h3>{projName}</h3>
										<img
											className="overlay-img"
											src={src2}
											alt="Project_image"
										/>
										<h4>{projText}</h4>
										<p>{projDesc}</p>
									</div>
								</Fade>
							</Modal>
							<a href={chipLink} target="_blank" rel="noopener noreferrer">
								<button className="link-extra-source">
									<FormattedMessage
										id="projects.projects.project.source"
										defaultMessage="Source"
									/>
								</button>
							</a>
						</div>

						<div className="project-extra-info-wrapper">
							<div className="project-extra-info">
								{projType
									? projType.map((type, index) => {
											return <div key={index}>{type}</div>;
									  })
									: 'Coming Soon'}
							</div>
						</div>
					</div>
				</div>
			</span>
		</div>
	);
}

export default ProjCompExtra;
