import {CLEAR_FILTER ,FILTER_BIOMODEL,BIOMODEL_FETCH_FAILED, BIOMODEL_FETCH_SUCCESS, ACCESSION_ID_FAILED, ACCESSION_ID_SUCCESS, BIOMODEL_GENESYMBOL_FAILED, BIOMODEL_GENESYMBOL_SUCCESS} from "../types"

export default (state, action) => {
    switch (action.type) {
        case BIOMODEL_FETCH_SUCCESS:
            return{
                ...state,
                biomodels: action.payload,
                error: undefined
            }
        case BIOMODEL_FETCH_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case BIOMODEL_GENESYMBOL_SUCCESS:
            return{
                ...state,
                geneSymbol: action.payload,
                error: undefined
            }
        case BIOMODEL_FETCH_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case ACCESSION_ID_SUCCESS: 
            return{
                ...state,
                accId: action.payload,
                error: undefined
            }
        case ACCESSION_ID_FAILED:
            return{
                ...state,
                error: undefined
            }
        case FILTER_BIOMODEL:
            return{
                ...state,
                filtered: state.biomodels.filter(biomodel => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return biomodel.gene.symbol.match(regex) || biomodel.accessionId.match(regex) || biomodel.conditions.match(regex) || biomodel.geneSymbol.match(regex) || biomodel.gene.fullName.match(regex);
                })
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filtered: null
            }
    }
}