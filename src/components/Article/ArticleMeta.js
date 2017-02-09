import ArticleActions from './ArticleActions';
import { Link } from 'react-router';
import React from 'react';

const ArticleMeta = props => {
    const article = props.article;
    return (
        <div className="article-meta">
            <Link to={`@${article.author.username}`}>
                <img src={article.author.image} />
            </Link>

            <div className="info">
                <Link className="author" to={`@${article.author.username}`}>
                    {article.author.username}
                </Link>
                <span className="date">
                    {new Date(article.createdAt).toDateString()}
                </span>
            </div>

            <ArticleActions canModify={props.canModify} article={article} />
        </div>
    );
}

export default ArticleMeta;