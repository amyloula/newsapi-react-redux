import React, {Component} from 'react';

export default class CategoryItem extends Component {
    render() {
        let {category, setCategory} = this.props;
        return (
            <li className="" onClick={() => setCategory(category)}>
                {category}
            </li>
        );
    }
}
