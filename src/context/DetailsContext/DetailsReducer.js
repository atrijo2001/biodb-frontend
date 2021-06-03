import {DETAIL_BY_ID_FAIL, DETAIL_BY_ID_SUCCESS ,DETAILS_FETCH_SUCCESS, DETAILS_FETCH_FAILED, PARTICULAR_DETAILS_SUCCESS, PARTICULAR_DETAILS_FAILED, DETAILS_DANGER_FAILED, DETAILS_DANGER_SUCCESS, FILTER_DETAILS, CLEAR_FILTER} from "../types"

export default (state, action) => {
    switch (action.type) {
        case DETAILS_FETCH_SUCCESS:
            return{
                ...state,
                stateWiseDetails: action.payload,
                errors: undefined
            }
        case DETAILS_FETCH_FAILED:
            return{
                 ...state,
                 errors: action.payload
            }
        case PARTICULAR_DETAILS_SUCCESS:
            return{
                ...state,
                particularStateDetails: action.payload,
                errors: undefined
            }
        case PARTICULAR_DETAILS_FAILED:
            return{
                ...state,
                errors: action.payload
            }
        case DETAILS_DANGER_SUCCESS:
            return{
                ...state,
                dangerStates: action.payload,
                errors: undefined
            }
        case DETAILS_DANGER_FAILED:
            return{
                ...state,
                errors: action.payload
            }
        case FILTER_DETAILS:
            return{
                ...state,
                filtered: state.stateWiseDetails.filter(detail => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return detail.state.match(regex);
                })
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filtered: null
            }
        case DETAIL_BY_ID_SUCCESS:
            return{
                ...state,
                detail: action.payload
            }
        case DETAIL_BY_ID_FAIL:
            return{
                ...state,
                errors: action.payload
            }
        
    }
}