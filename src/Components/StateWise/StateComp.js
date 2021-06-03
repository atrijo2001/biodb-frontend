import React from 'react'

import {Typography, CardContent} from "@material-ui/core"



const StateComp = ({state}) => {
    return (
        <CardContent>
            <div style={{textAlign: 'center'}}>
               <Typography variant='p'>Name: {state.state}</Typography>
               <br />
               <Typography variant='p'>Cases: {state.cases}</Typography>
               <br />
               <Typography variant='p'>Deaths: {state.deaths}</Typography>
               <br />
            </div>
        </CardContent>
    )
}

export default StateComp
