import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getSourcesByCategory} from '../actions';
import CategoryItem from '../components/categoryItem';

class CategoryBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            categories: ["business", "entertainment", "general", "health", "science", "sports", "technology"]
        };
        this.setCategory = this.setCategory.bind(this);
    }

    setCategory(category) {
        this.setState({category: category});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.category !== this.state.category) {
            getSourcesByCategory(this.state.category);
        }
    }

    render() {
        return (
            <div className="top-bar__categories-bar">
                <ul className="" id="setCategory">
                    {this.state.categories.map((category) => {
                        return (
                            <CategoryItem setCategory={this.setCategory} key={category} category={category}/>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getSourcesByCategory: getSourcesByCategory}, dispatch);
}

export default connect(null, mapDispatchToProps)(CategoryBar);