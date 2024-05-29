import React from 'react';


type TextWrapperPropsType = {
  tag: string;
  text: string;
}


export const TextWrapper = (props: TextWrapperPropsType) => {
  return (
    <>
      {props.tag === 'span' ? <span>{props.text}</span>
        : <p>{props.text}</p>}
    </>
  )
}
