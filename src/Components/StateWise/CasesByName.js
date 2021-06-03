import React, { useContext, useState } from 'react'
import StateContext from "../../context/StateContext/StateContext";

const CasesByName = () => {
    const [name, setName] = useState('')
    const stateContext = useContext(StateContext);
    const {getCasesByState, casesByName} = stateContext;

    const onSubmit = (e) => {
        e.preventDefault();
        getCasesByState(name);
        if(casesByName !== null){
            console.log(casesByName)
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <label>Enter the name of the state</label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CasesByName
