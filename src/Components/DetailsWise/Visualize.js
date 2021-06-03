import Header from "../UI/Header"
import Footer from "../UI/Footer"

import DetailsContext from "../../context/DetailsContext/DetailsContext"


import { useContext, useEffect} from "react"
import {Container, Row, Col, Card} from "react-bootstrap"

import {VictoryPie, VictoryBar} from "victory"

const Visualize = ({match}) => {
    const detailsContext = useContext(DetailsContext)
    const {FetchDetailById, detail} = detailsContext

    useEffect(()=>{
        FetchDetailById(match.params.id)
    }, [match])

    if(detail !== null){
        console.log(detail)
    }
    
    return (
        <div style={{background: 'grey'}}>
        {detail!==null?<div>
            <Header/>
            <Container>
                <h3 className="text-center my-4">State: {detail.state}</h3>
                <Row>
                    <Col md='6' sm='12'>
                        <Card>
                                <Card.Header>
                                    <h5 className='text-center'>% of People Infected</h5>
                                </Card.Header>
                                <Card.Body>
                                    <VictoryPie  colorScale={["#83D1C4", "#78517C" ]} data={[
                                        { x: `Male`, y: detail.adults.male*100 },
                                        { x: `Female`, y: detail.adults.female*100 }
                                    ]}/>
                                </Card.Body>
                                <Card.Footer>
                                    <p className='text-center'>Male: {detail.adults.male}%</p>
                                    <p className='text-center'>Female: {detail.adults.female}%</p>
                                </Card.Footer>
                        </Card>
                    </Col>
                    <Col md='6' sm='12'>
                        <Card>
                                <Card.Header>
                                    <h5 className='text-center'>Number of cases per 1000</h5>
                                </Card.Header>
                                <Card.Body>
                                    <VictoryPie  colorScale={["#83D1C4", "#78517C", "#F17959" ]} data={[
                                        { x: `Male`, y: detail.casesIn1000s.male*100},
                                        { x: `Female`, y: detail.casesIn1000s.female*100},
                                        { x: `children`, y: detail.casesIn1000s.children*100 }
                                    ]}/>
                                </Card.Body>
                                <Card.Footer>
                                    <p className='text-center'>Male: {detail.casesIn1000s.male}</p>
                                    <p className='text-center'>Female: {detail.casesIn1000s.female}</p>
                                    <p className='text-center'>Children: {detail.casesIn1000s.children}</p>
                                </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                <Col md='6' sm='12'>
                        <Card>
                                <Card.Header>
                                    <h5 className='text-center'>Number of people living with HIV per 1000people</h5>
                                </Card.Header>
                                <Card.Body>
                                    <VictoryPie  colorScale={["#83D1C4", "#78517C", "#F17959" ]} data={[
                                        { x: `Male`, y: detail.livingWithHivIn1000s.male*100},
                                        { x: `Female`, y: detail.livingWithHivIn1000s.female*100},
                                        { x: `children`, y: detail.livingWithHivIn1000s.children*100 }
                                    ]}/>
                                </Card.Body>
                                <Card.Footer>
                                    <p className='text-center'>Male: {detail.livingWithHivIn1000s.male}</p>
                                    <p className='text-center'>Female: {detail.livingWithHivIn1000s.female}</p>
                                    <p className='text-center'>Children: {detail.livingWithHivIn1000s.children}</p>
                                </Card.Footer>
                        </Card>
                    </Col>
                    <Col md='6' sm='12'>
                        <Card>
                                <Card.Header>
                                    <h5 className='text-center'>Mortality Rate %</h5>
                                </Card.Header>
                                <Card.Body>
                                    <VictoryPie  colorScale={["#83D1C4", "#78517C", "#F17959"  ]} data={[
                                        { x: `Male`, y: detail.mortality.male*100},
                                        { x: `Female`, y: detail.mortality.female*100},
                                        { x: `children`, y: detail.mortality.children*100 }
                                    ]}/>
                                </Card.Body>
                                <Card.Footer>
                                    <p className='text-center'>Male: {detail.mortality.male}</p>
                                    <p className='text-center'>Female: {detail.mortality.female}</p>
                                    <p className='text-center'>Children: {detail.mortality.children}</p>
                                </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        <Footer/>
        </div>: <h1 className='text-center'>Loading...</h1>}
        
        </div>
    )
}

export default Visualize
