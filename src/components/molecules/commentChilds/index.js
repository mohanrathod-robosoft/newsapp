/* @flow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jQuery from 'jquery';

import Text from '../../atoms/text'
import {Fetch} from '../../../util/fetch';
import {timeConversion} from '../../../util/timeConversion';


const CommentChilds = (props) => {
  const { level, kid } = props
  console.log("Props of comment childs : " + JSON.stringify(props));

  const [comment, setComment] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const response =  Fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`)
    response
    .then(res => {setComment(res); console.log("res: " + res);})
    .catch(err => {setErrors(err); console.log("err: " + err);});

    // let parser = new DOMParser();
    // let commentText = jQuery.parseHTML(comment.text);
    // console.log("commentText: " + JSON.stringify(commentText));
    // setcommentText(commentText);
    
    setIsLoading(false);

  }, [kid])

  return(
  <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : ( <div> {comment ? <div style={{paddingLeft: `${level * 50}px`}}>
      <Text textcolor="gray">{comment.by} | {timeConversion(comment.time)} </Text>
      <Text>{comment.text}</Text>
      <Text textcolor="gray"> reply </Text>
      </div> : null} </div> )}
      {hasError ? <p>{JSON.stringify(hasError)}</p> : null}
      <div>
        {comment.kids && comment.kids.map(item => (
              <li key={item}>
                <CommentChilds level={level+1} kid={item}></CommentChilds>
              </li>)
        )}
      </div>
  </div>)
}

CommentChilds.defaultProps = {
  className: '',
  children: '',
  title: '',
  button: ''
}

export default CommentChilds
