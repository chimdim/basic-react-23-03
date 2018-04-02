import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render () {
    return (
      <ul>
        {this.getArticles()}
      </ul>
    )
  }

  getArticles () {
    const {articles, openItemId, toggleItem} = this.props
    if (articles.length > 0) {
      return articles.map(article => (
        <li key={article.id}>
          <Article article={article} isOpen={article.id === openItemId} toggleOpen={toggleItem} ref={this.setListElementRef}/>
        </li>
      ))
    } else {
      return <li>No Articles in selected range</li>
    }

  }

  setListElementRef = listElement => {
    //      console.log('---', listElement, findDOMNode(listElement))
  }
}

export default accordion(ArticleList)