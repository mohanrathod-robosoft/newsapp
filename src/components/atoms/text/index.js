
import * as React from 'react';
import classnames from 'classnames';

import './style.css';

export const TextSize = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
  SPAN: 'span',
}

export const TextColor = {
  GRAY: 'gray',
  BLACK: 'black',
  WHITE: 'white',
}

export const TextBoldness = {
  NOTBOLD: 'notbold',
  BOLD: 'bold',
}

const Typography = (props) => {
  const { children, textsize, textcolor, textboldness, className } = props
  const classProps = classnames(
    [textsize],
    textcolor,
    textboldness,
    className
  )
  return (
    <p className={classProps}>
      {children}
    </p>
  )
}

Typography.defaultProps = {
  textsize: TextSize.P,
  textcolor: TextColor.BLACK,
  textboldness: TextBoldness.NOTBOLD,
  className: '',
}

export default Typography
