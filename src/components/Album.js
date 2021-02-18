import React from 'react'
import { Link } from 'react-router-dom'

function Album (props) {

  return (
    <li>
      <Link to={`/${props.album.id}`}>
        <div className='album-name'>
          {props.album.title}
        </div>
      </Link>
    </li>
  )
}

export default Album