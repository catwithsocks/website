import React, { useState, createContext } from 'react';

const ToggleContext = createContext();
const ButtonContext = createContext();
const ModalContext = createContext();

const NavToggleProvider = (props) => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<ToggleContext.Provider value={[navOpen, setNavOpen]}>
			{props.children}
		</ToggleContext.Provider>
	);
};

const ToggleButtonProvider = (props) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<ButtonContext.Provider value={[isOpen, setOpen]}>
			{props.children}
		</ButtonContext.Provider>
	);
};

const ModalProvider = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<ModalContext.Provider value={[modalIsOpen, setModalIsOpen]}>
			{props.children}
		</ModalContext.Provider>
	);
};

export {
	ToggleContext,
	ButtonContext,
	ModalContext,
	NavToggleProvider,
	ToggleButtonProvider,
	ModalProvider,
};
