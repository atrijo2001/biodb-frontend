import React, { useContext, useEffect, useState } from 'react'
import StateContext from "../../context/StateContext/StateContext";

import Header from "../UI/Header"
import StateComp from "./StateComp"

import {Card, Container} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
	cardStyles: {
        marginTop: '1rem',
        padding: '2rem',
        borderRadius: '12px',
        fontFamily: 'Bowlby One SC'
    }
}));

const StateWiseCases = () => {
    const classes = useStyles()
    const stateContext = useContext(StateContext);
    const {getCases, stateWiseCases} = stateContext;

    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getCases();
        setLoading(false)
    }, [])
    return (
        <div style={{background: '#AF9D5A'}}>
            <Header/>
            <Container>
                <h1 style={{textAlign: 'center'}}>Details of each State</h1>
                {stateWiseCases.length>0 && loading===false ? stateWiseCases.map((state, key)=> (
                    <Card className={classes.cardStyles}>
                        <StateComp key={key} state={state} />
                    </Card>
                )): ''}
            </Container>
        </div>
    )
}

export default StateWiseCases
