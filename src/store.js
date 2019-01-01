import { createStore, combineReducers, applyMiddleware } from 'redux';
import { sectionListReducer } from './reducers/section-list-reducer';
import { articleListReducer } from './reducers/article-list-reducer';
import { articleDetailsReducer } from './reducers/article-details-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';// create store
export const store = createStore(
   combineReducers({
       sectionList : sectionListReducer,
       articleList : articleListReducer,
       articleDetails: articleDetailsReducer,
   }),
   {
       sectionList:  {  sections: {}, isLoading: false, error: null },
       articleList:  {  articles: {}, isLoading: false, error: null },
       articleDetails: { articleUrl: null, article: {}, isLoading: false, error: null },
   },
   composeWithDevTools( applyMiddleware( logger, thunk ) )
);