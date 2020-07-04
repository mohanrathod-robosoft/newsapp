/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import CommentBlock from '../../molecules/commentBlock';

import './style.css'


const Comment = (props) => (
    
  <div className="comment" >
    <CommentBlock></CommentBlock>
    {props.children}
  </div>
)

Comment.defaultProps = {
  className: undefined,
  children: undefined
}

export default Comment
