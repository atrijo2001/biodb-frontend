import React, { useReducer } from 'react'
import axios from "axios";
import {GENE_ID_FAILED, GENE_ID_SUCCESS, ADD_GENE_FAILED, ADD_GENE_SUCCESS, FETCH_GENE_FAILED, FETCH_GENE_SUCCESS} from "../types"
import GeneContext from "./GeneContext";
import GeneReducer from "./GeneReducer";

const GeneState = (props) => {
    const initialState = {
        allgenes: [],
        gene:{},
        error:{}
    }

    const [state, dispatch] = useReducer(GeneReducer, initialState);
    //Fetch all genes
    const FetchGenes = async() =>{
        try {
            const {data} = await axios.get("https://biodb-backend.herokuapp.com/api/v1/getgenes");
            dispatch({
                type: FETCH_GENE_SUCCESS,
                payload: data.gene
            })
        } catch (err) {
            dispatch({
                type: FETCH_GENE_FAILED,
                payload: err
            })
        }
    }

    //Fetch Genes by the unique id
    const FetchGeneById = async(id)=>{
        try {
            const {data} = await axios.get(`https://biodb-backend.herokuapp.com/api/v1/getgene/${id}`);
            dispatch({
                type: GENE_ID_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: GENE_ID_FAILED,
                payload: err
            })
        }
    }

    // Add Gene
    const AddGene = async(formData) =>{
        try {
            const {data} = await axios.post("https://biodb-backend.herokuapp.com/api/v1/creategene", formData, {
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            dispatch({
                type: ADD_GENE_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: ADD_GENE_FAILED,
                payload: err
            })
        }
    }

    return (
        <GeneContext.Provider value={{
            allgenes: state.allgenes,
            gene: state.gene,
            error: state.error,
            FetchGeneById,
            FetchGenes
        }}>
            {props.children}
        </GeneContext.Provider>
    )
}

export default GeneState
