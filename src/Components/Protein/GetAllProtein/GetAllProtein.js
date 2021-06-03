import React, { useContext, useEffect, useState } from 'react';
import ProteinContext from '../../../context/ProteinContext/ProteinContext';

import Header from '../../UI/Header';
import Footer from '../../UI/Footer';
import ProteinComp from './ProteinComp';

import { Container, Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';

import ProteinFilter from './ProteinFilter';
import Pagination from './Pagination';

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Bowlby One SC',
		color: '#000000',
		marginTop: '1rem',
		textAlign: 'center',
	},
	text: {
		width: '40%',
		marginRight: '0.5rem',
		color: '#fff',
		marginTop: theme.spacing(2),
	},
	input: {
		backgroundColor: 'white',
	},
	cardStyles: {
		margin: theme.spacing(2),
	},
	buttonStyles: {
		color: '#fff',
		background: '#000',
		padding: '0.5rem 3rem',
	},
}));

const GetAllProtein = () => {
	const classes = useStyles();
	const history = useHistory();

	const proteinContext = useContext(ProteinContext);
	const { allProteins, error, FetchProteins, filtered } = proteinContext;
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [proteinPerPage] = useState(5);

	const onClick = () => {
		history.push('/scientist/addprotein');
	};

	useEffect(() => {
		FetchProteins();
		setLoading(false);
	}, []);

	//Pagination Logic
	//Get current page
	const indexOfLastProtein = currentPage * proteinPerPage;
	const indexOfFirstProtein = indexOfLastProtein - proteinPerPage;
	const currentProtein = allProteins.slice(
		indexOfFirstProtein,
		indexOfLastProtein
	);

	//Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div
			style={{
				background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)',
			}}
		>
			<Header />
			<Container>
				<div style={{ textAlign: 'center' }}>
					<ProteinFilter />
					<Button className={classes.buttonStyles} onClick={onClick}>
						Add Protein
					</Button>
				</div>
				{!loading && !error && filtered !== null
					? filtered.map((protein, key) => (
							<Card className={classes.cardStyles}>
								<ProteinComp key={key} protein={protein} />
							</Card>
					  ))
					: currentProtein.map((protein, key) => (
							<Card className={classes.cardStyles}>
								<ProteinComp key={key} protein={protein} />
							</Card>
					  ))}
				<Pagination
					proteinsPerPage={proteinPerPage}
					totalProteins={allProteins.length}
					paginate={paginate}
				/>
			</Container>
			<Footer />
		</div>
	);
};

export default GetAllProtein;
