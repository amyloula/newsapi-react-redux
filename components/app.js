import React, {Component} from 'react';
import ArticleList from '../containers/articlesList'
import Header from "./header";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ArticleList/>
            </div>
        );
    }
}
