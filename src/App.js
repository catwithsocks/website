import React from 'react';
import './assets/scss/main.scss';
import SideDrawer from './components/Header/SideDrawer';
import ToggleButton from './components/Header/ToggleButton';
import Home from './components/Main/Title';
import SimpleCollapse from './components/Projects';
import AboutMe from './components/Main/AboutMe';
import FloatingNav from './components/FloatingNav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
	NavToggleProvider,
	ToggleButtonProvider,
	ModalProvider,
} from './components/ToggleStateContext';

function App() {
	return (
		<Router>
			<div className="App">
				<ToggleButtonProvider>
					<NavToggleProvider>
						<ModalProvider>
							<header className="App-header">
								<SideDrawer />
								<ToggleButton />
							</header>
							<div className="content-wrapper">
								<nav>
									<FloatingNav />
								</nav>
								<main className="App-main">
									<Switch>
										<Route path="/" exact component={Home} />
										<Route path="/projects" component={SimpleCollapse} />
										<Route path="/about" component={AboutMe} />
									</Switch>
								</main>
							</div>
						</ModalProvider>
					</NavToggleProvider>
				</ToggleButtonProvider>
			</div>
		</Router>
	);
}

export default App;
