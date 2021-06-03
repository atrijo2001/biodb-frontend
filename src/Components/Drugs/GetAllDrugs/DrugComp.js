import React from 'react'
import {Typography, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

import DrugModal from "./DrugModal"


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
}));
const DrugComp = ({drug}) => {
    const classes = useStyles()
    return (
        <div>
            <Typography variant='h5' className={classes.title}>Name: {drug.name}</Typography>
            <div className={classes.root} style={{background: 'grey', marginTop: '1rem'}}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                       <DrugModal uses={drug.uses} name='Uses'/>
                    </Grid>
                    <Grid item xs={3}>
                       <DrugModal uses={drug.sideEffects} name='Side Effects'/>
                    </Grid>
                    <Grid item xs={3}>
                        <DrugModal uses={drug.precautions} name='Precautions'/> 
                    </Grid>
                    <Grid item xs={3}>
                        <DrugModal uses={drug.interactions} name='Interactions'/>
                    </Grid>
                </Grid>
            </div>
            <Typography variant='body1' className={classes.title}>Pubmed Links:</Typography>
            <ul>
                {drug.pubMedLink.map((link, key)=><Typography variant='body1' key={key}>
                <a href={link}>{link}</a></Typography>)}
            </ul>
            <Typography variant='h5' className={classes.title}>Target: {drug.target}</Typography>
            <br />
        </div>        
    )
}

export default DrugComp
