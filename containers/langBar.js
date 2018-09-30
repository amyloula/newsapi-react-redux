import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTopHeadlinesByLanguage} from "../actions";
import LangItem from "../components/langItem";

class LangBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: '',
            userLanguages: ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"]
        };
        this.setLanguage = this.setLanguage.bind(this);
    }

    setLanguage(lang) {
        console.log(lang);
        this.setState({language: lang})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.language !== this.state.language) {
            getTopHeadlinesByLanguage(this.state.language);
        }
    }

    render() {
        return (
            <div>
                <button id="setUserLanguageBtn"
                        class="mdl-button mdl-js-button mdl-button--icon top-bar--header-btn">
                    <i class="material-icons">language</i>
                </button>
                <div class="mdl-tooltip" data-mdl-for="setUserLanguageBtn" id="userLanguageTooltip">
                </div>

                <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                    for="setUserLanguageBtn" id="setUserLanguageUl">
                    {this.state.userLanguages.map((language) => {
                        return (
                            <LangItem setLanguage={this.setLanguage} key={language} lang={language}/>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getTopHeadlinesByCountry: getTopHeadlinesByLanguage}, dispatch);
}

export default connect(null, mapDispatchToProps)(LangBar);
