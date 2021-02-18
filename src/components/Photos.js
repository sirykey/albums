import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Photo from './Photo'
import { setFilterText } from '../redux/actions'
import { useParams } from 'react-router-dom'

function Photos () {
  const photos = useSelector(state => state.photos.photos)
  const filter = useSelector(state => state.photos.filter)
  const id = parseInt(useParams().id)
  const dispatch = useDispatch()

  const filteredPhotos = photos
    .filter(photo => photo.albumId === id)
    .filter(photo => photo.title.indexOf(filter) > -1)

  const handleChangeFilter = (e) => {
    dispatch(setFilterText(e.target.value))
  }

  if (isNaN(id)) {
    return (
      <div className='no-album-selected'>
        ⬅️Выберите альбом из списка слева
      </div>
    )
  }

  return (
    <div className='photos'>
      <div className='filter'>
        <input type="text"
               placeholder='Фильтр по альбомам...'
               value={filter}
               onChange={handleChangeFilter}
        />
      </div>
      <ul>
        {filteredPhotos.map(photo => {
          return <Photo key={photo.id} photo={photo}/>
        })}
      </ul>
    </div>
  )
}

export default Photos