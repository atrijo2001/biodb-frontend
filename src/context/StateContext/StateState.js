import React, {useReducer} from 'react';
import StateContext from "./StateContext";
import StateReducer from "./StateReducer";
import {STATE_FETCH_FAILED, STATE_FETCH_SUCCESS, PARTICULAR_STATE_FAILED, PARTICULAR_STATE_SUCCESS} from "../types";
import axios from 'axios';

const StateState = props => {
    const initialState = {
        stateWiseCases: [],
        casesByName: {},
        casesByDanger: []
    }

    const [state, dispatch] = useReducer(StateReducer, initialState);

    //Get stateWise cases
    const getCases = async() => {
        try {
            const {data} = await axios.get("https://biodb-backend.herokuapp.com/api/v1/getcases");

            dispatch({
                type: STATE_FETCH_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: STATE_FETCH_FAILED
            })
        }
    }

    //Get Cases of a particular state
    const getCasesByState = async(name) => {
        try {
            console.log(name)
            const {data} = await axios.get(`https://biodb-backend.herokuapp.com/api/v1/getcases/${name}`);

            dispatch({
                type: PARTICULAR_STATE_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: PARTICULAR_STATE_FAILED
            })
        }
    }
    return (
        <StateContext.Provider value={{
            stateWiseCases: state.stateWiseCases,
            casesByName: state.casesByName,
            getCases,
            getCasesByState
        }}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateState
