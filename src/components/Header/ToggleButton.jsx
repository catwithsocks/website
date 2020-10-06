import React, { useContext } from 'react';
import { ToggleContext, ButtonContext } from '../ToggleStateContext';
import { Fade as Hamburger } from 'hamburger-react';

const ToggleButton = () => {
	const [navOpen, setNavOpen] = useContext(ToggleContext);
	const [isOpen, setOpen] = useContext(ButtonContext);

	return (
		<div className="head-wrapper">
			<div className="toggle">
				<Hamburger
					color="#317ba7"
					direction="right"
					duration={0.6}
					size={36}
					toggled={isOpen}
					toggle={setOpen}
					onToggle={(toggled) => setNavOpen(!navOpen)}
				/>
			</div>
		</div>
	);
};

export default ToggleButton;
