import { Container, Card, ListGroup } from "react-bootstrap"

const GeneComp = ({gene}) => {
    return (
        <Container>
            <Card>
                <Card.Header>
                    Name: {gene.name}
                </Card.Header>
                <Card.Body>
                    <h5>Primary Protein : {gene.primaryProtein}</h5>
                    <h5>Clevage Protein Details: </h5>
                    <ListGroup>
                        {gene.cleavageProteinDetails.functions.length> 0 ? <p>Functions: {gene.cleavageProteinDetails.functions[0]}</p>: ''}
                        {gene.cleavageProteinDetails.name.length> 0 ? <p>Name: {gene.cleavageProteinDetails.name[0]}</p>: ''}
                    </ListGroup>
                    <br/>
                    <ListGroup>
                        Size: {gene.cleavageProteinDetails.size[0]}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default GeneComp
