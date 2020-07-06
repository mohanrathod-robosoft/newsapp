/* @flow */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from '../commentBlock/style.css';
import './style.css';

import Button from '../../atoms/button';
import Text from '../../atoms/text';
import {Fetch} from '../../../util/fetch';
import {timeConversion} from '../../../util/timeConversion';
import CommentChilds from '../commentChilds';


const CommentBlock = (props) => {

  const { id } = props;

  const [comment, setComment] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const qid = id; // 23712676
    setIsLoading(true);
    const response =  Fetch(`https://hacker-news.firebaseio.com/v0/item/${qid}.json?print=pretty`)
    response
    .then(res => {setComment(res); console.log("res: " + res);})
    .catch(err => {setErrors(err); console.log("err: " + err);});
    
    setIsLoading(false);

  }, [])

  return(
  <div className={classnames(styles.commentblock, props.className)}>
    {isLoading ? (
        <div>Loading ...</div>
      ) : ( <div> {comment ? <div className={classnames(styles.commentblock, props.className)}>
      <Text textcolor="gray" label={`${comment.by} | ${timeConversion(comment.time)} | Parent | favorite`} />
      <div className="content" dangerouslySetInnerHTML={{ __html: comment.type == "comment" ? comment.text : comment.title }} />
      <textarea id="w3review" name="w3review" rows="6" cols="60" />
      <div><Button size="small" theme="rounded"> reply </Button></div>
    </div> : null} </div> )}
    {hasError ? <p>{JSON.stringify(hasError)}</p> : null}
    <div>
      {comment.kids && comment.kids.map(item => (
            <li key={item}>
              <CommentChilds level={1} kid={item}></CommentChilds>
            </li>)
      )}
    </div>
  </div>)
}

CommentBlock.defaultProps = {
  className: '',
  children: '',
  text: '',
  button: '',
}

export default CommentBlock
