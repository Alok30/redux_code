import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from '../actions/constants';export const articleListReducer = ( curState = {
    isLoading: null,
    articles: [],
    error: null
 }, action ) => {
    let newState;    switch( action.type ) {
        case FETCH_ARTICLES:
            newState = { ...curState, error: null, isLoading: FETCH_ARTICLES };
            break;
        case FETCH_ARTICLES_SUCCESS:
            newState = { ...curState, isLoading: FETCH_ARTICLES_SUCCESS, articles: action.payload.articles };
            break;
        case FETCH_ARTICLES_FAILURE:
            newState = { ...curState, isLoading: FETCH_ARTICLES_FAILURE, articles: [], error: action.payload.error };
            break;
        default:
            newState = curState;
    }    return newState;
 }