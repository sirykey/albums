import React from 'react'

function Photo (props) {
  return (
    <li>
        <a href={props.photo.url}>{props.photo.title}</a>
    </li>
  )
}

export default Photo