import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Bowlby One SC',
		color: '#ffffff',
		margin: theme.spacing(6),
		marginTop: '4em',
	},
	button: {
		fontFamily: 'Bowlby One SC',
		backgroundColor: '#000000',
		color: '#ffffff',
		padding: theme.spacing(3),
		margin: theme.spacing(5),
		marginLeft: theme.spacing(5),
		borderRadius: '15px',
		width: '20vh',
	},
	paragraph: {
		color: '#00000',
		fontFamily: 'Bowlby One SC',
		marginTop: theme.spacing(6),
		paddingBottom: theme.spacing(5),
	},
}));

const Homepage = () => {
	const classes = useStyles();
	const history = useHistory();

	const handleChangeScientist = () => {
		history.push('/scientist');
	};
	const handleChangeLayman = () => {
		history.push('/layman');
	};

	return (
		<div>
			<Header />
			<Grid className='bg'>
				<Container>
					<Typography variant='h5' className={classes.title}>
						Choose your proffession:
					</Typography>
					<Grid xs={8}>
						<Button
							variant='contained'
							className={classes.button}
							onClick={handleChangeScientist}
						>
							Scientist
						</Button>
						<Button
							variant='contained'
							className={classes.button}
							onClick={handleChangeLayman}
						>
							Epidemiologist
						</Button>
					</Grid>
					<Grid xs={12} sm={6}>
						<Typography
							variant='subtitle1'
							className={classes.paragraph}
						>
							The HIV/AIDS Database is a compilation of information from widely
							scattered small-scale surveys on the AIDS pandemic and HIV
							seroprevalence (infection) in population groups in developing
							countries. The informations are retrieved from NCBI, ClinVar,
							Stanford, etc.
						</Typography>
					</Grid>
				</Container>
			</Grid>
			<Footer />
		</div>
	);
};

export default Homepage;
