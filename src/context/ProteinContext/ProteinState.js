import React, { useReducer } from 'react'
import axios from "axios";
import ProteinContext from "./ProteinContext";
import ProteinReducer from "./ProteinReducer";
import {CLEAR_FILTER ,FILTER_PROTEIN ,PROTEIN_ADD_FAILED, PROTEIN_ADD_SUCCESS, PROTEIN_FETCH_FAILED, PROTEIN_FETCH_SUCCESS, PROTEIN_ID_FAILED, PROTEIN_ID_SUCCESS} from "../types"

const ProteinState = (props) => {
    const initialState = {
        allProteins: [],
        protein: {},
        error: {},
        filtered: null
    }
    const [state, dispatch] = useReducer(ProteinReducer, initialState);

    //Fetch all the proteins
    const FetchProteins = async(pdb, structure)=>{
        try {
            if(pdb !== ''){
                const {data} = await axios.get("https://biodb-backend.herokuapp.com/api/v1/getprotein", {
                    params:{
                        "pdbAccessionId": pdb,
                    }
                });
                dispatch({
                    type: PROTEIN_FETCH_SUCCESS,
                    payload: data
                })
            } else if(structure!==''){
                const {data} = await axios.get("https://biodb-backend.herokuapp.com/api/v1/getprotein",{
                    params:{
                        "structureDetails": structure
                    }
                });
                dispatch({
                    type: PROTEIN_FETCH_SUCCESS,
                    payload: data
                })
            } else{
                const {data} = await axios.get("https://biodb-backend.herokuapp.com/api/v1/getprotein");
                dispatch({
                    type: PROTEIN_FETCH_SUCCESS,
                    payload: data
                })
            }
        } catch (err) {
            dispatch({
                type: PROTEIN_FETCH_FAILED,
                payload: err
            })
        }
    }

    //Fetch Proteins by their id
    const FetchProteinById = async(id) => {
        try {
            const {data} = await axios.get(`https://biodb-backend.herokuapp.com/api/v1/getproteinbyid/${id}`)
            dispatch({
                type: PROTEIN_ID_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: PROTEIN_ID_FAILED,
                payload: err
            })
        }
    }

    //Add proteins to the database
    const AddProtein = async(formData) => {
        try {
            const {data} = await axios.post("https://biodb-backend.herokuapp.com/api/v1/createprotein", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch({
                type: PROTEIN_ADD_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: PROTEIN_ADD_FAILED,
                payload: err
            })
        }
    }

    //Filter Proteins based on the text given
    const filterProteins = (text) => {
        dispatch({type: FILTER_PROTEIN, payload: text})
    }

    //Clear all the filters
    const clearFilter = ()=>{
        dispatch({type: CLEAR_FILTER})
    }

    return (
        <ProteinContext.Provider value={{
            allProteins: state.allProteins,
            protein: state.protein,
            error: state.error,
            filtered: state.filtered,
            FetchProteins,
            FetchProteinById,
            AddProtein,
            filterProteins,
            clearFilter
        }}>
            {props.children}
        </ProteinContext.Provider>
    )
}

export default ProteinState
