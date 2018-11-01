import React, {Component} from "react";

export default class ArticleItem extends Component {
    render() {
        let {article, goToArticle} = this.props;
        return (
            <div className="article" key={article.title}>
                <img srcSet={article.urlToImage} src={article.urlToImage} alt={article.title}/>
                <h3>{article.title}</h3>
                {article.author ? <span className="mdl-chip">
                        <span className="mdl-chip__text">{article.author}</span> </span> : ''}
                {article.source.name ? <span className="mdl-chip">
                        <span className="mdl-chip__text">{article.source.name}</span>
                    </span> : ''}
                {article.publishedAt ? <span className="mdl-chip mdl-chip--deletable">
                        <span className="mdl-chip__text">{moment(article.publishedAt).hours()} hours ago</span>
                    <button type="button" className="mdl-chip__action"><i
                        className="material-icons">timelapse</i></button>
                    </span> : ''}
                <blockquote>{article.description}</blockquote>
                <button className="article__btn" onClick={() => goToArticle(article.url)}>Click here to read the whole article
                </button>
            </div>
        );
    }
}