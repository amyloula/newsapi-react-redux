import React, {Component} from 'react';

export default class LangItem extends Component {
    render() {
        let { lang, setLanguage } = this.props;
        return (
            <li className="mdl-menu__item" onClick={() => setLanguage(lang)}>
                {lang}
            </li>
        );
    }
}
