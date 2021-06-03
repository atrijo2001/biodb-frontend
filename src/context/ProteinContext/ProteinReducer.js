import {CLEAR_FILTER ,FILTER_PROTEIN ,PROTEIN_ADD_FAILED, PROTEIN_ADD_SUCCESS, PROTEIN_FETCH_FAILED, PROTEIN_FETCH_SUCCESS, PROTEIN_ID_FAILED, PROTEIN_ID_SUCCESS} from "../types"

export default (state, action) => {
    switch (action.type) {
        case PROTEIN_FETCH_SUCCESS:
            return{
                ...state,
                allProteins: action.payload,
                error: undefined
            }
        case PROTEIN_FETCH_FAILED:{
            return{
                ...state,
                error: action.payload
            }
        }
        case PROTEIN_ID_SUCCESS:
            return{
                ...state,
                protein: action.payload,
                error: undefined
            }
        case PROTEIN_ID_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case PROTEIN_ADD_SUCCESS:
            return{
                ...state,
                allProteins: [...state.allProteins, action.payload],
                error: undefined
            }
        case PROTEIN_ADD_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case FILTER_PROTEIN:
            return{
                ...state,
                filtered: state.allProteins.filter(protein => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return protein.structureDetails.match(regex) || protein.pdbAccessionId.match(regex);
                })
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filtered: null
            }

    }
}