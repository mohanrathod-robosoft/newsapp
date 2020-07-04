/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import CommentBlock from '../../molecules/commentBlock';

import styles from './style.css'


const Comment = (props) => (
    
  <div className={classnames(styles.comment, props.className)}>
    <CommentBlock></CommentBlock>
    {props.children}
  </div>
)

Comment.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Comment
