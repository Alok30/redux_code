import { FETCH_ARTICLE_DETAILS, FETCH_ARTICLE_DETAILS_SUCCESS, FETCH_ARTICLE_DETAILS_FAILURE } from '../actions/constants';
export const articleDetailsReducer = ( curState = 
    { articleUrl: null, article: {}, isLoading: false, error: null }, action ) => {
    let newState;
    switch( action.type ) {
        case FETCH_ARTICLE_DETAILS:
            newState = { ...curState, articleUrl: action.payload.url, error: null, isLoading: FETCH_ARTICLE_DETAILS };
            break;
        case FETCH_ARTICLE_DETAILS_SUCCESS:
            newState = { ...curState, isLoading: FETCH_ARTICLE_DETAILS_SUCCESS, article: action.payload.article };
            break;
        case FETCH_ARTICLE_DETAILS_FAILURE:
            newState = { ...curState, isLoading: FETCH_ARTICLE_DETAILS_FAILURE, article: {}, error: action.payload.error };
            break;
        default:
            newState = curState;
    }
    return newState;
}