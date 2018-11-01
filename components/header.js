import React, {Component} from 'react';
import SearchBar from '../containers/searchbar';
import LangBar from '../containers/langBar';
import CategoryBar from '../containers/categoriesBar';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="top-bar--header">
                    <section>
                        <SearchBar/>
                    </section>
                    <section>
                        <h4>The News Brief</h4>
                    </section>
                    <section>
                        <LangBar/>
                    </section>
                </header>
                <div id="secondaryHeader" className="top-bar--secondary-header">
                    <CategoryBar/>
                </div>
            </div>
        );
    }
}
