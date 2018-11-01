import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from "moment/moment";
import {getTopHeadlinesByUserAgentLanguage} from '../actions';

class ArticleList extends Component {
    goToArticle(url) {
        window.location.href = url;
    }

    renderArticleList() {
        return this.props.articles.map((article) => {
            return (
                <div className="article" key={article.title}>
                    <img srcSet={article.urlToImage} src={article.urlToImage} alt={article.title}/>
                    <h3>{article.title}</h3>
                    {article.author ? <span className="mdl-chip">
                        <span className="mdl-chip__text">{article.author}</span> </span> : ''}
                    <span className="mdl-chip">
                        <span className="mdl-chip__text">{article.source.name}</span>
                    </span>
                    <span className="mdl-chip mdl-chip--deletable">
                        <span className="mdl-chip__text">{moment(article.publishedAt).hours()} hours ago</span>
                    <button type="button" className="mdl-chip__action"><i
                        className="material-icons">timelapse</i></button>
                    </span>
                    <blockquote>{article.description}</blockquote>
                    <button className="article__btn" onClick={() => this.goToArticle(article.url)}>Click here to read
                        the whole article
                    </button>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="article--outer-wrapper">
                {this.props.articles.length > 0 ? this.renderArticleList() : 'No articles found'}
            </div>
        );
    }
}

function mapStateToProps({articles}) {
    return {
        articles: articles
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ComponentDidMount: () => {
            dispatch(getTopHeadlinesByUserAgentLanguage());
        }
    }
}
export default connect(mapStateToProps)(ArticleList);

