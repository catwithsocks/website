import React from 'react';
import { makeStyles, Chip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
	chip: {},
}));

const StyledChip = withStyles({
	root: {
		backgroundColor: 'grey',
		'&:hover': {
			backgroundColor: 'secondary',
		},
	},
})(Chip);

function Chips({ label, link, size, icon }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<StyledChip
				icon={<FontAwesomeIcon icon={icon} />}
				label={label}
				component="a"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				clickable
				color="primary"
				size={size}
			/>
		</div>
	);
}

export default Chips;
