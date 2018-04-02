import React, { PureComponent } from 'react'
import Comments from './comments'

class Article extends PureComponent {
  render () {
    const {article, isOpen, toggleOpen} = this.props
  //  console.log('---', 'rendering article')
    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={() => toggleOpen(article.id)}>{isOpen ? 'close' : 'open'}</button>
        {this.getBody()}
        <Comments article={article}/>
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
}

export default Article