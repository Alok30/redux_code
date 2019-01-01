import { FETCH_SECTIONS, FETCH_SECTIONS_SUCCESS, FETCH_SECTIONS_FAILURE } from '../actions/constants';
export const sectionListReducer = (curState = {
    isLoading: null,
    sections: [],
    error: null
}, action) => {
    let newState;
    switch (action.type) {
        case FETCH_SECTIONS:
            newState = { ...curState, error: null, isLoading: FETCH_SECTIONS };
            break;
        case FETCH_SECTIONS_SUCCESS:
            newState = { ...curState, isLoading: FETCH_SECTIONS_SUCCESS, sections: action.payload.sections };
            break;
        case FETCH_SECTIONS_FAILURE:
            newState = { ...curState, isLoading: FETCH_SECTIONS_FAILURE, sections: [], error: action.payload.error };
            break;
        default:
            newState = curState;
    }
    return newState;
}