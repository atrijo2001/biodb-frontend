import {STATE_FETCH_FAILED, STATE_FETCH_SUCCESS, PARTICULAR_STATE_FAILED, PARTICULAR_STATE_SUCCESS} from "../types"

export default (state, action) => {
    switch (action.type) {
        case STATE_FETCH_SUCCESS:
            return{
                ...state,
                stateWiseCases: action.payload
            }
        case STATE_FETCH_FAILED:
            return{

            }
        case PARTICULAR_STATE_SUCCESS: 
        return{
            ...state,
            casesByName: action.payload
        }
        case PARTICULAR_STATE_FAILED:
            return{
                
            }
    }
}