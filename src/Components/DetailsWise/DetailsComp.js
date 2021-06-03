import {Container, Grid, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Bowlby One SC',
        color: '#000000',
        marginTop: '1rem',
        textAlign: 'center'
    },
    root:{
        flexGrow: 1,
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    buttonStyles: {
		color: '#fff',
		background: '#000',
		padding: '0.5rem 3rem',
        marginBottom: '0.5rem'
	}
}));

const DetailsComp = ({detail}) => {
    const classes = useStyles()
    const {state, adults, incidencesPer1000sUninfected, livingWithHivIn1000s, mortality, services, _id} = detail
    return (
        <Container>
            <h3 style={{textAlign: 'center'}} className={classes.title}>State: {state}</h3>
            <div className={classes.root} style={{textAlign: 'center'}}>
            <Grid container spacing={3} className={classes.title}>
                    <Grid item xs={3}>
                        <h4>Percentage of adults Infected:</h4>
                        <p>Male: {adults.male}</p>
                        <p>Female: {adults.female}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Incidences per 1000 uninfected people:</h4>
                        <p>Male: {incidencesPer1000sUninfected.male}</p>
                        <p>Female: {incidencesPer1000sUninfected.female}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Cases of HIV every 1000 people:</h4>
                        <p>Male: {livingWithHivIn1000s.male}</p>
                        <p>Female: { livingWithHivIn1000s.female}</p>
                        <p>Children: { livingWithHivIn1000s.children}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Mortality:</h4>
                        <p>Male: {mortality.male}</p>
                        <p>Female: { mortality.female}</p>
                        <p>Children: { mortality.children}</p>
                    </Grid>
                </Grid>
                <Link to={`/layman/statewisecasedetails/${_id}`}>
                    <Button className={classes.buttonStyles}>Visualize</Button>
                </Link>
            </div>
        </Container>
    )
}

export default DetailsComp
