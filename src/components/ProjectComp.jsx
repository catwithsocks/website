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

function ProjComp({
	src,
	src2,
	projName,
	projText,
	projDesc,
	chipLink,
	projType,
}) {
	const classes = useStyles();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	/* 	const handleOpen = () => {
		setModalIsOpen(true);
	}; */

	/* const handleClose = () => {
		setModalIsOpen(false);
	}; */

	return (
		<div className="project-container">
			<div className="project-header">
				<h6 className="project-name">{projName}</h6>
				<p className="project-text">{projText}</p>
			</div>
			<div className="project-body">
				<img className="project-img" src={src} alt="Project_image" />
			</div>
			<div className="project-overlay-wrapper"></div>
			<span className="project-overlay">
				<img className="project-img" src={src2} alt="Project_image" />
				<div className="overlay-elements">
					<div className="overlay-container">
						<h6 className="project-name">{projName}</h6>
						<div className="link-source-wrapper">
							<button
								className="link-source"
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
								style={{
									overlay: {},
									content: {
										WebkitOverflowScrolling: 'touch',
									},
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
								<button className="link-source">
									<FormattedMessage
										id="projects.projects.project.source"
										defaultMessage="Source"
									/>
								</button>
							</a>
						</div>
						<div className="project-info-wrapper">
							<div className="project-info">
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

export default ProjComp;
