import React, { PureComponent } from 'react'

class Article extends PureComponent {
  render () {
    const {article, isOpen, toggleOpen} = this.props
    console.log('---', 'rendering article')
    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={() => toggleOpen(article.id)}>{isOpen ? 'close' : 'open'}</button>
        {this.getBody()} {this.getComments()}
      </div>
    )
  }

  getBody () {
    const {article, isOpen} = this.props
    if (!isOpen) return null

    return (
      <section>
        {article.text}
      </section>
    )
  }

  getComments () {
    const {article} = this.props
    let comments = ''
    let hasComments = article.comments && article.comments.length > 0
    if (hasComments) {
      comments = article.comments.map(comments => (
        <li key={comments.id}>
          <div className="comment-user">{comments.user}</div>
          <div className="comment-text">{comments.text}</div>
        </li>
      ))
      return (
        <div className="article-comments">
          <h4>Comments</h4>
          <ul>
            {comments}
          </ul>
        </div>
      )
    } else {
      return (
        <div className="article-comments">
          <h4>This article has no comments yet</h4>
        </div>
      )
    }
  }
}

export default Article