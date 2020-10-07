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
import startpage from '../assets/images/cards/startpage.png';
import startpage_preview from '../assets/images/cards/startpage_preview.png';
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
			linkToProj="/"
			
			chipLink="https://github.com/cateatsbananas/personal-homepage"
			projType={['REACTJS', 'SCSS', 'HTML5', 'Website']}
		/>,
		<ProjComp
			src={startpage_preview}
			src2={startpage}
			projName={
				<FormattedMessage
					id="projects.projects.startpage"
					defaultMessage="Personal Startpage"
				/>
			}
			projText={
				<FormattedMessage
					id="projects.projects.startpage.desc"
					defaultMessage="Personal Startpage"
				/>
			}
			linkToProj="/"
			chipLink="https://codesandbox.io/s/eager-wildflower-8d2sj"
			projType={['JAVASCRIPT', 'CSS', 'HTML5']}
		/>,
		<ProjComp
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Coming Soon"
			projText="Coming Soon"
			linkToProj="/"
			chipLink="/"
		/>,
	];

	let projectsExtraArr = [
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Coming Soon"
			projText="Coming Soon"
			linkToProj="/"
			chipLink="/"
			projType={['Coming Soon']}
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Coming Soon"
			projText="Coming Soon"
			linkToProj="/"
			chipLink="/"
			projType={['Coming Soon']}
		/>,
		<ProjCompExtra
			src={my_homepage_preview}
			src2={my_homepage}
			projName="Coming Soon"
			projText="Coming Soon"
			linkToProj="/"
			chipLink="/"
			projType={['Coming Soon']}
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
