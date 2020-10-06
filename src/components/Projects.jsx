import React, { useContext, useState } from 'react';
import {
	/* makeStyles, */
	Grid,
	Collapse,
	ExpansionPanelDetails,
} from '@material-ui/core';
import ProjComp from './ProjectComp';
import ProjCompExtra from './ProjectExtraComp';
import my_homepage from '../assets/images/cards/my_homepage.png';
import my_homepage_preview from '../assets/images/cards/my_homepage_preview.png';
import { ToggleContext } from './ToggleStateContext';

import { FormattedMessage } from 'react-intl';

const SimpleCollapse = () => {
	const [navOpen, setNavOpen] = useContext(ToggleContext);
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	const projectsArr = [
		<ProjComp
			src={my_homepage_preview}
			src2={my_homepage}
			projName={
				<FormattedMessage
					id="projects.projects.homepage"
					defaultMessage="Homepage"
				/>
			}
			projText={
				<FormattedMessage
					id="projects.projects.homepage.desc"
					defaultMessage="Homepage"
				/>
			}
			projDesc={
				<FormattedMessage
					id="projects.projects.project.desc"
					defaultMessage="Description"
				/>
			}
			linkToProj="/"
			chipLink="https://github.com/cateatsbananas/personal-homepage"
			projType={['REACTJS', 'SCSS', 'HTML5', 'Website']}
		/>,
		<ProjComp
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 2"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
		/>,
		<ProjComp
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 3"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
		/>,
	];

	let projectsExtraArr = [
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 6"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
			projType={['Website', 'ReactJS', 'HTML5', 'SCSS']}
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 7"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 8"
			projText="Placeholder fas example"
			linkToProj="/"
			chipLink="/"
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 10"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 10"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 10"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 10"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Project 10"
			projText="Placeholder as example"
			linkToProj="/"
			chipLink="/"
		/>,
	];

	return (
		<div id="projects">
			<div
				className="wrapper"
				onClick={() => (navOpen ? setNavOpen(false) : navOpen === false)}
			>
				<div className="title-projects">
					<a href="/projects">
						<h3>
							<FormattedMessage id="projects.title" defaultMessage="Projects" />
						</h3>
					</a>
				</div>
				<div>
					<section className="grid">
						<Grid
							container
							spacing={1}
							direction="row"
							alignItems="center"
							justify="center"
						>
							{projectsArr.map((project, projectKey) => (
								<Grid key={projectKey} item xs={12} md={12} lg={4}>
									<div className="grid-item">{project}</div>
								</Grid>
							))}
							<div className="collapse">
								<div className="show-more-button">
									<button
										className={checked ? 'active' : ''}
										onClick={handleChange}
									>
										<span>
											<FormattedMessage
												id="projects.showMore"
												defaultMessage="Show More"
											/>
										</span>
										<h6 className="open-button-text">
											<FormattedMessage
												id="projects.showMore.open"
												defaultMessage="Show More"
											/>
										</h6>
									</button>
								</div>
							</div>
						</Grid>
					</section>
					<Collapse in={checked} collapsedHeight={0}>
						<ExpansionPanelDetails>
							<section className="grid-extra">
								<Grid
									container
									spacing={2}
									direction="row"
									alignItems="center"
									justify="center"
								>
									{projectsExtraArr.map((projectExtra, projectExtraKey) => (
										<Grid key={projectExtraKey} item xs={12} lg={5}>
											<div className="grid-extra-item">{projectExtra}</div>
										</Grid>
									))}
								</Grid>
							</section>
						</ExpansionPanelDetails>
					</Collapse>
				</div>
			</div>
		</div>
	);
};

export default SimpleCollapse;
