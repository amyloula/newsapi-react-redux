import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from "moment/moment";

class ArticleList extends Component {

    renderArticleList() {
        return this.props.articles.map((article) => {
            return (
                <div key={article.title}>
                    <img srcSet={article.urlToImage} src={article.urlToImage} alt={article.title}/>
                    <h3>{article.title}</h3>
                    <span className="mdl-chip">
                    <span className="mdl-chip__text">{article.author}</span>
                    </span>
                    <span className="mdl-chip">
                    <span className="mdl-chip__text">{article.source.name}</span>
                    </span>
                    <span className="mdl-chip mdl-chip--deletable">
                    <span className="mdl-chip__text">{article.formattedDate} hours ago</span>
                    <button type="button" className="mdl-chip__action"><i
                    className="material-icons">timelapse</i></button>
                    </span>
                    <blockquote>{article.description}</blockquote>
                    <button onClick="goToArticle('${url}')">Click here to read the whole article</button>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="article--outer-wrapper">
                {this.renderArticleList()}
            </div>
        );
    }
}

function mapStateToProps({articles}) {
    return {
        articles: articles
    }
}

export default connect(mapStateToProps)(ArticleList);

