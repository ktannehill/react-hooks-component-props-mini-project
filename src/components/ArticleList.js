import React from 'react'
import Article from './Article'

const ArticleList = ({posts}) => {

    const articles = posts.map(post => <Article key={post.id} {...post}/>)

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList