import React, {Component} from 'react';
import SearchBar from '../containers/searchbar';
import ArticleList from '../containers/articlesList'
import LangBar from '../containers/langBar';
import CategoryBar from '../containers/categoriesBar';

export default class App extends Component {
    render() {
        return (
            <div>
                <LangBar/>
                <SearchBar/>
                <CategoryBar/>
                <ArticleList/>
            </div>
        );
    }
}
