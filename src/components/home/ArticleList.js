import React from 'react';
import ArticlePreview from './ArticlePreview';

const ArticleList = props => {
    if (!props.articles) {
        return (
            <div className="article-preview">Loading...</div>
        );
    }

    if (props.articles.length === 0) {
        return (
            <div className="article-preview">No article are here.. Yet.</div>
        );
    }

    return (
        <div>
        {
            props.articles.map((article,index) => {
                return (
                    <ArticlePreview article={article} key={index} />
                );
            })
        }
        </div>
    );
}

export default ArticleList;