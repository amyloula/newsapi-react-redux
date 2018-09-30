import {combineReducers} from 'redux';
import ArticleReducer from './articles_reducer';

const rootReducer = combineReducers({
    articles: ArticleReducer
});

export default rootReducer;
