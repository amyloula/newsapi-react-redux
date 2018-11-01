import React, {Component} from 'react';

export default class CategoryItem extends Component {
    render() {
        let {category, setCategory} = this.props;
        return (
            <li className="mdl-menu__item" onClick={() => setCategory(category)}>
                {category}
            </li>
        );
    }
}
