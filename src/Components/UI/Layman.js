import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Typography,
} from '@material-ui/core';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Bowlby One SC',
		color: '#fff',
		margin: theme.spacing(6),
		marginTop: '2em',
		textAlign: 'center',
	},
	item: {
		padding: theme.spacing(4),
	},
	cardHeader: {
		fontFamily: 'Bowlby One SC',
		backgroundColor: '#000',
		color: '#fff',
	},
	cardContent: {
		backgroundColor: 'rgba(0,0,0,0.6)',
		color: '#fff',
	},
	headerTitle: {
		fontFamily: 'Bowlby One SC',
		textAlign:'center'
	},
	text: {
		fontFamily: 'Abril Fatface',
	},
	button: {
		fontFamily: 'Bowlby One SC',
		backgroundColor: '#000000',
		color: '#ffffff',
		padding: theme.spacing(3),
		marginLeft: '20.5%',
		margin: theme.spacing(5),
		borderRadius: '15px',
		width: '25vh',
	},
}));

const Layman = () => {
	const classes = useStyles();
	const history = useHistory();

	const handleStatewise = () => {
        history.push('/layman/statewisedetails')
	}

	const handleDetails = () => {
		history.push('/layman/statewisecasedetails')
	}


	return (
		<div className='background' style={{height: '100%'}}>
			<Header />
			<Typography variant='h4' className={classes.title}>
				India fights hiv/aids
			</Typography>
			<Grid container>
				<Grid item xs={12} sm={4} className={classes.item}>
					<Card style={{ backgroundColor: 'transparent' }}>
						<CardHeader
							className={classes.cardHeader}
							title='India | UNAIDS'
							classes={{ title: classes.headerTitle }}
						/>
						<CardContent className={classes.cardContent}>
							<Typography className={classes.text}>
								India has the third largest HIV epidemic in the world, with 2.1
								million people living with HIV. India’s epidemic is concentrated
								among key affected populations, including sex workers and men
								who have sex with men.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} className={classes.item}>
					<Card style={{ backgroundColor: 'transparent' }}>
						<CardHeader
							className={classes.cardHeader}
							title='AIDS in India - NCBI - NIH'
							classes={{ title: classes.headerTitle }}
						/>
						<CardContent className={classes.cardContent}>
							<Typography className={classes.text}>
								HIV infection in India was first detected in 1986 among female
								sex workers in Chennai. Today, with an estimated 5.134 million
								infections, India is home to the second largest population of
								people living with HIV and AIDS (PLHA).
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} className={classes.item}>
					<Card style={{ backgroundColor: 'transparent' }}>
						<CardHeader
							className={classes.cardHeader}
							title='NACO'
							classes={{ title: classes.headerTitle }}
						/>
						<CardContent className={classes.cardContent}>
							<Typography className={classes.text}>
								As per the recently released, India HIV Estimation 2019 report,
								Overall, the estimated adult (15–49 years) HIV prevalence trend
								has been declining in India since the epidemic’s peak in the
								year
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12} sm={6}>
					<Button onClick={handleStatewise} className={classes.button}>Statewise cases</Button>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Button onClick={handleDetails} className={classes.button}>More detailed analysis</Button>
				</Grid>
			</Grid>
			<Footer />
		</div>
	);
};

export default Layman;
