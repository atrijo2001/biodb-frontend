import React, { useEffect, useState } from 'react'
import {useContext} from "react";

import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import BioModelComp from "./BioModelComp";
import Pagination from "./Pagination"

import BioModelContext from "../../../context/BioModelContext/BioModelContext";
import BioModelFilter from "./BioModelFilter"

import {Card, Container} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    cardStyles: {
        marginTop: '1rem',
        borderRadius: '8px',
        background: '#000',
        color: '#fff',
        padding: '1rem'
    }
}));

const GetBiomodel = () => {
    const classes = useStyles()
    const biomodelContext = useContext(BioModelContext);
    const {FetchData, biomodels, filtered} = biomodelContext

    const [currentPage, setCurrentPage] = useState(1);
	const [modelPerPage] = useState(5);
    

    //Pagination Logic
	//Get current page
	const indexOfLastModel = currentPage * modelPerPage
	const indexOfFirstModel = indexOfLastModel - modelPerPage
	const currentModel = biomodels.slice(indexOfFirstModel, indexOfLastModel)

    //Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)



    useEffect(()=> {
       FetchData()
    }, [])

    return (
        <div style={{background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)'}}>
           <Header/>
           <Container>
            <h1 style={{textAlign: 'center', fontFamily: 'Bowlby One SC', color: '#FFF'}}>Structure and Sequence Details</h1>
           <BioModelFilter/>
            {filtered!==null? filtered.map((biomodel, key)=>
            (
                <Container key={key}>
                    <Card key={key} className={classes.cardStyles}>
                        <BioModelComp key={key} biomodel={biomodel}/>
                     </Card>
                </Container>
            )): currentModel.map((biomodel, key)=>
            (
                <Container key={key}>
                    <Card key={key} className={classes.cardStyles}>
                        <BioModelComp key={key} biomodel={biomodel}/>
                     </Card>
                </Container>
            ))}
		   <Pagination modelPerPage={modelPerPage} biomodels={biomodels.length} paginate={paginate}/>
           </Container>
           <Footer/>
        </div>
    )
}

export default GetBiomodel
