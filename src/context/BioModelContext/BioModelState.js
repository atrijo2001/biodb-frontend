import React, { useReducer } from 'react'
import BioModelContext from "./BioModelContext"
import BioModelReducer from "./BioModelReducer"
import axios from "axios"
import {CLEAR_FILTER ,FILTER_BIOMODEL ,BIOMODEL_FETCH_FAILED, BIOMODEL_FETCH_SUCCESS, BIOMODEL_GENESYMBOL_FAILED, BIOMODEL_GENESYMBOL_SUCCESS, ACCESSION_ID_FAILED, ACCESSION_ID_SUCCESS} from "../types"


const BioModelState = (props) => {
    const initialState = {
        biomodels: [],
        geneSymbol: [],
        accId: {},
        error: {},
        filtered: null
    }

    const [state, dispatch] = useReducer(BioModelReducer, initialState)

    //Fetch all Biomodels
    const FetchData = async() => {
        try {
            const {data} = await axios.get("https://biodb-backend.herokuapp.com/api/v1/bio/getdetails");
            dispatch({
                type: BIOMODEL_FETCH_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: BIOMODEL_FETCH_FAILED,
                payload: err
            })
        }
    }

    //Fetch Model By gene symbol
    const FetchByGene = async(id) => {
        try {
            const {data} = await axios.get(`https://biodb-backend.herokuapp.com/api/v1/bio/getdetailsbygene/${id}`);
            dispatch({
                type: BIOMODEL_GENESYMBOL_SUCCESS,
                payload: data
            })
        } catch (err) {
           dispatch({
               type: BIOMODEL_GENESYMBOL_FAILED,
               payload: err
           })   
        }
    }

    //Fetch by accession id:
    const FetchByAcId = async(id) => {
        try {
            const {data} = await axios.get(`https://biodb-backend.herokuapp.com/api/v1/bio/getdetails/${id}`)
            dispatch({
                type: ACCESSION_ID_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: ACCESSION_ID_FAILED,
                payload: err
            })
        }
    }

     //Filter details based on the text given
     const filterBiomodels = (text) => {
        dispatch({type: FILTER_BIOMODEL, payload: text})
    }

     //Clear all the filters
     const clearFilter = ()=>{
        dispatch({type: CLEAR_FILTER})
    }
    return (
        <BioModelContext.Provider value={{
            biomodels: state.biomodels,
            geneSymbol: state.geneSymbol,
            accId: state.accId,
            error: state.error,
            filtered: state.filtered,
            FetchData,
            FetchByAcId,
            FetchByGene,
            filterBiomodels,
            clearFilter
        }}>
            {props.children}
        </BioModelContext.Provider>
    )
}

export default BioModelState
