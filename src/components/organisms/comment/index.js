/* @flow */
import * as React from 'react'
import CommentBlock from '../../molecules/commentBlock';
import { useLocation } from "react-router-dom";
import Header from "../Header";

import './style.css';

const Comment = (props) => {
  
  const location = useLocation();
  const mainId = Number(new URLSearchParams(location.search).get("id"));
    
  return (
    <>
      <Header />
        <div className="comment" >
          <CommentBlock id={mainId}></CommentBlock>
          {props.children}
        </div>
    </>
  )
}

Comment.defaultProps = {
  className: undefined,
  children: undefined
}

export default Comment
