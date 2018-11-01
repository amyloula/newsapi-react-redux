import {combineReducers} from 'redux';
import ArticleReducer from './articles_reducer';
import SourcesReducer from './sources_reducer';

const rootReducer = combineReducers({
    articles: ArticleReducer,
    sources: SourcesReducer,
});

export default rootReducer;
