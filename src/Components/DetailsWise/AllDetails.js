import React, { useContext, useEffect } from 'react'
import DetailsContext from "../../context/DetailsContext/DetailsContext"

import Header from "../UI/Header"
import Footer from "../UI/Footer"

import {Card, Container} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import DetailsComp from './DetailsComp'
import DetailsFilter from "./DetailsFilter"

import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Bowlby One SC',
		color: '#000000',
		marginTop: '1rem',
		textAlign: 'center',
	},
	cardStyles: {
		margin: theme.spacing(2),
	},
    buttonStyles:{
        background: '#fff',
        color: '#000',
        margin: '0.3rem 1rem'
    }
}));

const AllDetails = () => {
    const styles = useStyles()
    const detailsContext = useContext(DetailsContext);
    const {fetchDetails, stateWiseDetails, filtered} = detailsContext

    const history = useHistory()

    
    useEffect(()=>{
        fetchDetails()
    }, [])

    
    return (
        <div style={{
            background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)',
        }}>
            <Header/>
            <Container>
                <DetailsFilter/>
                <h1 style={{textAlign: 'center', color: '#fff'}}>More Detailed Analysis of every State</h1>
                {filtered!==null ? filtered.map((detail, key)=> (
                    <Container key={key}>
                        <Card className={styles.cardStyles} key={key}>
                            <DetailsComp key={key} detail={detail}/>
                        </Card>
                    </Container>
                )) : stateWiseDetails.map((detail, key)=> (
                    <Container key={key}>
                        <Card className={styles.cardStyles} key={key}>
                            <DetailsComp key={key} detail={detail}/>
                        </Card>
                    </Container>
                ))}
            </Container>
            <Footer/>
        </div>
    )
}

export default AllDetails
