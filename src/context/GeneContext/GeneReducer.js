import {GENE_ID_FAILED, GENE_ID_SUCCESS, FETCH_GENE_FAILED, FETCH_GENE_SUCCESS, ADD_GENE_FAILED, ADD_GENE_SUCCESS} from "../types"

export default (state, action) => {
    switch (action.type) {
        case FETCH_GENE_SUCCESS:
            return{
                ...state,
                allgenes: action.payload,
                error: undefined
            }
        case FETCH_GENE_FAILED:
            return{
               ...state,
               error: action.payload
            }
        case GENE_ID_SUCCESS: 
            return{
                ...state,
                gene: action.payload,
                error: undefined
            }
        case GENE_ID_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case ADD_GENE_SUCCESS:
            return{
                ...state,
                allgenes: [...state.allgenes, action.payload],
                error: undefined
            }
        case ADD_GENE_FAILED:
            return{
                ...state,
                error: action.payload
            }
        default:
            break;
    }
}