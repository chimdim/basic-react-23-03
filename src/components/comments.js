import React, { PureComponent } from 'react'

class Comments extends PureComponent {
  state = {
    isOpen: false
  }

  render () {
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

          <h4>Comments <button onClick={this.toggleComments}>{this.state.isOpen ? 'hide' : 'show'}</button></h4>
          {this.state.isOpen &&
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

  toggleComments = () => {
    this.setState({
        isOpen: !this.state.isOpen
      }
    )
  }
}

export default Comments