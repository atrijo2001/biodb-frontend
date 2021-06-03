import React from 'react';

import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	title: {
		fontFamily: 'Bowlby One SC',
		color: '#fff',
		marginTop: '1rem',
		textAlign: 'left',
	},
}));

const ProteinComp = ({ protein }) => {
	const classes = useStyles();
	const {
		pdbAccessionId,
		image,
		macromolecules,
		method,
		organism,
		structureDetails,
		uniqueLigands,
	} = protein;
	return (
		<>
			<div>
				<Grid container style={{ backgroundColor: '#000' }}>
					<Grid item xs={12} sm={4}>
						<img src={image} style={{ width: '80%' }} className='image'></img>
					</Grid>
					<Grid item xs={12} sm={8}>
						<Container>
							<Typography variant='h6' className={classes.title}>
								Name: {organism}
							</Typography>
							<Typography variant='subtitle1' className={classes.title}>
								PDB Accession Id: {pdbAccessionId}
							</Typography>
							<Typography variant='subtitle1' className={classes.title}>
								Macromolecules: {macromolecules}
							</Typography>
							<Typography variant='subtitle1' className={classes.title}>
								Method: {method}
							</Typography>
							<Typography variant='subtitle1' className={classes.title}>
								Unique Ligands : {uniqueLigands}
							</Typography>
							<Typography variant='subtitle1' className={classes.title}>
								Structural Details : {structureDetails}
							</Typography>
						</Container>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default ProteinComp;
