import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSearchResults} from "../actions";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchSearchResults(this.state.term);
        this.setState({term: ''});
    }
    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <input placeholder="Search for news by a key word" type="search"
                className=""
                value={this.state.term}
                onChange={this.onInputChange}/>
                <span>
                    <button className="search-menu__button" type="submit">
                        Search
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchSearchResults}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
