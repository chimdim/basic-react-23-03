import React, { PureComponent } from 'react'
import toggleContent from '../decorators/hide-content'

class Comments extends PureComponent {
  render () {
    const {article, isOpen, toggleItem} = this.props
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

          <h4>Comments <button onClick={toggleItem}>{isOpen ? 'hide' : 'show'}</button></h4>
          {isOpen &&
          <ul>
            {comments}
          </ul>
          }

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

export default toggleContent(Comments)