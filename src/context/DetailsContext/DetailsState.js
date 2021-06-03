import axios from 'axios';
import React, {useReducer} from 'react';
import DetailsContext from "./DetailsContext";
import DetailsReducer from "./DetailsReducer";
import {DETAIL_BY_ID_FAIL,DETAIL_BY_ID_SUCCESS ,DETAILS_FETCH_SUCCESS, DETAILS_FETCH_FAILED, PARTICULAR_DETAILS_FAILED, PARTICULAR_DETAILS_SUCCESS, DETAILS_DANGER_FAILED, DETAILS_DANGER_SUCCESS, FILTER_DETAILS, CLEAR_FILTER} from "../types"

const DetailsState = (props) => {
    const initialState = {
        stateWiseDetails: [],
        errors: {},
        detail: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(DetailsReducer, initialState);
    
    //Fetch All the details
    const fetchDetails = async()=>{
        try {
            const {data} = await axios.get("https://biodb-backend.herokuapp.com/api/v1/details/getdetails");
            dispatch({
                type: DETAILS_FETCH_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: DETAILS_FETCH_FAILED,
                err
            })
        }
    }


    //Filter details based on the text given
    const filterDetails = (text) => {
        dispatch({type: FILTER_DETAILS, payload: text})
    }

     //Clear all the filters
     const clearFilter = ()=>{
        dispatch({type: CLEAR_FILTER})
    }

    //Get Details based on id
    const FetchDetailById = async(id) => {
        try {
            const {data} = await axios.get(`https://biodb-backend.herokuapp.com/api/v1/details/${id}`)
            dispatch({
                type: DETAIL_BY_ID_SUCCESS,
                payload: data
            })           
        } catch (error) {
            dispatch({
                type: DETAIL_BY_ID_FAIL,
                payload: error
            })  
        }
    }

    return (
        <DetailsContext.Provider value={{
            stateWiseDetails: state.stateWiseDetails,
            filtered: state.filtered,
            detail: state.detail,
            fetchDetails,
            filterDetails, 
            clearFilter,
            FetchDetailById
        }}>
            {props.children}
        </DetailsContext.Provider>
    )
}

export default DetailsState
