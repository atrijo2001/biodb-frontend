import React from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RedRibbon from '../../Images/Red Ribbon.png'

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	header: {
		backgroundColor: '#000000',
	},
	title: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		margin: 'auto',
		fontFamily: 'Bowlby One SC',
	},
}));

const Header = () => {
    const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<AppBar position='static' className={classes.header}>
                <Toolbar>
                    <img src={RedRibbon}/>
					<Typography variant='h4' className={classes.title}>
						HIV DATABASE
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
