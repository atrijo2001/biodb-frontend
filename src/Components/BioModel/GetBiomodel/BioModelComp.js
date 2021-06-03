import React from 'react'
import {Typography, Container, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

import {Row, Col} from 'react-bootstrap'


const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Bowlby One SC',
        color: '#fff',
        padding: '0.5rem',
        margin: '0.05rem'
    },
    title1:{
        fontFamily: 'Bowlby One SC',
        color: '#000',
        padding: '0.5rem',
        margin: '0.05rem'
    },
    buttonStyles: {
        background: '#fff',
        color: '#000'
    }
}));

const BioModelComp = ({biomodel}) => {
    const styles = useStyles()
    const {accessionId, clinicalSignificance, conditions, geneSymbol, proteinChange} = biomodel
    const {clinVarLink, varId} = biomodel.variation
    const {fastaLink, fullName, geneType} = biomodel.gene

    return (
        <div style={{textAlign: 'center'}}>
            <Container>
                <Typography className={styles.title} variant='h5'>Accession Id: {accessionId}</Typography>
                <br/>
                <Typography className={styles.title} variant='h5'>Clinical Significance: {clinicalSignificance}</Typography>
                <br/>
                <Typography className={styles.title} variant='h5'>Conditions: {conditions}</Typography>
                <br/>
                <Typography className={styles.title} variant='h5'>Protein Change: {proteinChange}</Typography>
                <br/>
                <br/>
                <Row>
                    <Col md={6}>
                        <Typography variant='h5' className={styles.title}>Variation Information</Typography>
                        <br/>
                        <Typography variant='h5' className={styles.title}>Var Id: {varId}</Typography>
                        <Button className={styles.buttonStyles}><a href={clinVarLink}>
                            <Typography variant='h6' className={styles.title1}>Clinvar</Typography>    
                        </a></Button>
                    </Col>
                    <Col md={6}>
                        <Typography variant='h5' className={styles.title}>Gene Information</Typography>
                        <br/>
                        <Typography variant='h5' className={styles.title}>Full Name: {fullName}</Typography>
                        <Typography variant='h5' className={styles.title}>Gene Type: {geneType}</Typography>
                        <Button className={styles.buttonStyles}><a href={fastaLink}>
                            <Typography variant='h6' className={styles.title1}>Fasta Link</Typography>    
                        </a></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BioModelComp
