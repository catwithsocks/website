import React from 'react';

const OverlayModal = ({ title }) => {
	return (
		<div className="modal-container">
			<div id="overlay-container">{title}</div>
		</div>
	);
};
export default OverlayModal;
