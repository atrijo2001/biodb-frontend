import Header from '../../UI/Header';
import Footer from '../../UI/Footer';
import TextError from './TextError';

import { Container, Button, IconButton } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import * as Yup from 'yup';
import ProteinContext from '../../../context/ProteinContext/ProteinContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './AddProtein.css'

const AddProteins = () => {
	const history = useHistory();
	const proteinContext = useContext(ProteinContext);
	const { AddProtein } = proteinContext;
	const initialValues = {
		pdbAccessionId: '',
		structureDetails: '',
		releaseDate: '',
		method: '',
		organism: '',
		macromolecules: [''],
		uniqueLigands: '',
		image: '',
	};

	//Call the add Protein function on submit
	const onSubmit = (values) => {
		AddProtein(values);
		alert("Successfully added a protein")
		setTimeout(() => {
		history.push('/scientist');
		}, 2000);
	};

	//Validate the values
	const validationSchema = Yup.object({
		pdbAccessionId: Yup.string().required('Required'),
		structureDetails: Yup.string().required('Required'),
		method: Yup.string().required('Required'),
		uniqueLigands: Yup.string().required('Required'),
		image: Yup.string().required('Required'),
		organism: Yup.string().required('Required'),
	});
	return (
		<div className='background mb-4 pb-4'>
			<Header />
			<Container>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					validateOnBlur='false'
					validareOnChange='false'
				>
					<Form className='container m-5'>
						<div className='form-group row m-lg-2 p-lg-2'>
							<label
								className='col-sm-2 col-form-label'
								htmlFor='pdbAccessionId'
							>
								PDB Accession ID:
							</label>
							<Field
								className='col-sm-10 input form-control'
								type='text'
								id='pdbAccessionId'
								name='pdbAccessionId'
							/>
							<ErrorMessage
								className='col-sm-10'
								name='pdbAccessionId'
								component={TextError}
							/>
						</div>
						<div className='form-group row m-lg-2 p-lg-2'>
							<label
								className='col-sm-2 col-form-label'
								htmlFor='structureDetails'
							>
								Structure Details:
							</label>
							<Field
								className='col-sm-10 input form-control'
								type='text'
								id='structureDetails'
								name='structureDetails'
							/>
							<ErrorMessage
								className='col-sm-10'
								name='structureDetails'
								component={TextError}
							/>
						</div>
						<div className='form-group row m-lg-2 p-lg-2'>
							<label className='col-sm-2 col-form-label' htmlFor='releaseDate'>
								Release Date
							</label>
							<Field
								className='col-sm-10 input form-control'
								type='date'
								id='releaseDate'
								name='releaseDate'
							/>
						</div>

						<div className='form-group row m-lg-2 p-lg-2'>
							<label className='col-sm-2 col-form-label' htmlFor='method'>
								Method:
							</label>
							<Field
								className='col-sm-10 input form-control'
								type='text'
								id='method'
								name='method'
							/>
							<ErrorMessage
								className='col-sm-10'
								name='method'
								component={TextError}
							/>
						</div>
						<div className='form-group row m-lg-2 p-lg-2'>
							<label className='col-sm-2 col-form-label' htmlFor='organism'>
								Organism:
							</label>
							<Field
								className='col-sm-10 input form-control'
								type='text'
								id='organism'
								name='organism'
							/>
							<ErrorMessage
								className='col-sm-10'
								name='organism'
								component={TextError}
							/>
						</div>
						<div className='form-group row m-lg-2 p-lg-2'>
							<label className='col-sm-2 col-form-label' htmlFor='organism'>
								Macromolecules:
							</label>
							<FieldArray name='macromolecules'>
								{(fieldArrayProps) => {
									const { push, remove, form } = fieldArrayProps;
									const { values } = form;
									const { macromolecules } = values;
									return (
										<div>
											{macromolecules.map((macromolecule, idx) => (
												<div key={idx}>
													<Field
														className='col-sm-12 form-control input'
														name={`macromolecules[${idx}]`}
													/>
													<IconButton
														style={{ color: 'white' }}
														onClick={() => remove(idx)}
													>
														-
													</IconButton>
													<IconButton
														style={{ color: 'white' }}
														onClick={() => push('')}
													>
														+
													</IconButton>
												</div>
											))}
										</div>
									);
								}}
							</FieldArray>
						</div>

						<div className='form-group row m-lg-2 p-lg-2'>
							<label
								className='col-sm-2 col-form-label'
								htmlFor='uniqueLigands'
							>
								Unique Ligands:
							</label>
							<Field
								className='col-sm-10 input form-control'
								type='text'
								id='uniqueLigands'
								name='uniqueLigands'
							/>
							<ErrorMessage name='uniqueLigands' component={TextError} />
						</div>
						<div className='form-group row m-lg-2 p-lg-2'>
							<label className='col-sm-2 col-form-label' htmlFor='image'>
								Image Url:
							</label>
							<Field
								className='col-sm-10 input form-control'
								type='text'
								id='image'
								name='image'
							/>
							<ErrorMessage name='image' component={TextError} />
						</div>
						<Button
							variant='contained'
							className='btn-block'
							type='submit'
							style={{ backgroundColor: '#b71c1c', color: '#fff' }}
						>
							Submit
						</Button>
						<br />
						<br />
					</Form>
				</Formik>
			</Container>
			<Footer />
		</div>
	);
};

export default AddProteins;
