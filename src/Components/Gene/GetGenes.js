import { useContext, useEffect } from "react"
import GeneContext from "../../context/GeneContext/GeneContext"

import Header from "../UI/Header";
import Footer from "../UI/Footer"

import GeneComp from "./GeneComp"

import {Row, Col} from 'react-bootstrap'
import { Container } from "react-bootstrap";
const GetGenes = () => {
    const geneContext = useContext(GeneContext)
    const {allgenes, FetchGenes} = geneContext

    useEffect(()=>{
        FetchGenes()
    }, [])
    return (
        <div style={{background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)', overflowX: 'hidden'}}>
            <Header/>
            <h2 className='text-center my-3 py-3' style={{fontFamily: 'Bowlby One SC', color: '#fff'}}>Detailed Gene Information</h2>
            <br/>
            <div style={{fontFamily: 'Bowlby One SC'}}>
                <Row>
                        {allgenes.length>0 ? allgenes.map((gene, key)=>(
                                <Col md='4' key={key}>
                                        <GeneComp gene={gene}/>
                                        <br/>
                                </Col>
                        )): ''}
                </Row>
            </div>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default GetGenes
