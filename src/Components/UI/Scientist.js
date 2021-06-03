import React from 'react'
import Header from "./Header";
import Footer from "./Footer"

import {Typography, Container, Button, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {useHistory} from 'react-router-dom'



const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Bowlby One SC',
        color: '#000000',
        marginTop: '1rem',
        textAlign: 'center'
    },
    button: {
        fontFamily: 'Bowlby One SC',
        background: '#000000',
        color: '#fff',
        padding: '1rem',
        margin: '1rem',
        width: '70%',
        borderRadius: '12px'
    }
   
}));
const Scientist = () => {

    const classes = useStyles()
    const history = useHistory()

    //Mavigate to the biomodel page
    const handleBioModel = () => {
        history.push('/scientist/getbiomodel')
    }

    //Navigate to the drugs page
    const handleDrugs = () => {
        history.push('/scientist/getalldrugs')
    }

    //Navigate to the proteins page
    const handleProteins = () => {
        history.push('/scientist/getallproteins')
    }

    //Navigate to the Genes page
    const handleGenes = ()=>{
        history.push('/scientist/gene')
    }
    return (
        <div>
            <Header/>
            <div className="bg">
                <Container>
                    <Typography variant='h2' className={classes.title}>
                        Scientist:
                    </Typography>
                    <div style={{textAlign: 'center', marginTop: '2rem'}}>
                        <Grid md={12}>
                            <Button onClick={handleBioModel} className={classes.button}>Gene Variation</Button>
                        </Grid>
                        <Grid md={12}>
                            <Button onClick={handleDrugs} className={classes.button}>Drugs</Button>
                        </Grid>
                        <Grid md={12}>
                            <Button onClick={handleGenes} className={classes.button}>Gene Information</Button>
                        </Grid>
                        <Grid md={12}>
                            <Button className={classes.button} onClick={handleProteins}>Protein</Button>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Scientist
