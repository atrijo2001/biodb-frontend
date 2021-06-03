import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: '#000',
		color: '#fff',
		fontFamily: 'Bowlby One SC',
		padding: theme.spacing(1),
		position: 'fixed',
		width:'100%',
		left: 0,
		bottom: 0,
		marginTop: '1rem'
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<AppBar position='static'>
			<Typography
				variant='body2'
				color='textSecondary'
				align='center'
				className={classes.footer}
			>
				{' © '}
				{new Date().getFullYear()}
				{' - '}
				ALL RIGHTS RESERVED
			</Typography>
		</AppBar>
	);
};

export default Footer;
