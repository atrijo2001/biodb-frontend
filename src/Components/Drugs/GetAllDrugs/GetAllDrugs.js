import React, { useContext, useEffect, useState} from 'react'
import DrugsContext from "../../../context/DrugsContext/DrugsContext"
import Spinner from "../../UI/Spinner"

import DrugComp from "./DrugComp"
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import DrugFilter from "./DrugFilter"

import {Container, Card} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

import Pagination from "./Pagination"

const useStyles = makeStyles(() => ({
    cardStyles: {
        marginTop: '1rem',
        borderRadius: '8px',
    }
}));

const GetAllDrugs = () => {
    const drugContext = useContext(DrugsContext);
    const {alldrugs, FetchDrugs, filtered} = drugContext;

    const [currentPage, setCurrentPage] = useState(1);
	const [drugPerPage] = useState(5);
    const [loading, setLoading] = useState(true)


    //Pagination Logic
	//Get current page
	const indexOfLastDrug = currentPage * drugPerPage
	const indexOfFirstDrug = indexOfLastDrug - drugPerPage
	const currentDrug = alldrugs.slice(indexOfFirstDrug, indexOfLastDrug)

	//Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const classes = useStyles()

    useEffect(()=>{
        FetchDrugs();
        setLoading(false)
    }, [])
    return (
        <div style={{background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)'}}>
            <Header/>
            <Container>
            <DrugFilter/>
                {filtered!==null? filtered.map((drug, key)=>
                <Container>
                    <div style={{textAlign: 'center', marginTop: '1rem'}}>
                        <Card className={classes.cardStyles}>
                            <DrugComp key={key} drug={drug}/>
                        </Card>
                    </div>
                </Container>
                ):currentDrug.map((drug, key)=>
                <Container>
                    <div style={{textAlign: 'center', marginTop: '1rem'}}>
                        <Card className={classes.cardStyles}>
                            <DrugComp key={key} drug={drug}/>
                        </Card>
                    </div>
                    </Container>)}
				<Pagination drugsPerPage={drugPerPage} totaldrugs={alldrugs.length} paginate={paginate}/>
            </Container>
            <Footer/>
        </div>
    )
}

export default GetAllDrugs
