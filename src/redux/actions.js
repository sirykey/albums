export const loadAlbums = () => {
  return dispatch => {
    dispatch({ type: 'albums/load/start' })
    fetch('https://jsonplaceholder.typicode.com/albums/?_limit=10')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'albums/load/success',
          payload: json
        })
      })
  }
}

export const loadPhotos = () => {
  return dispatch => {
    dispatch({ type: 'photos/load/start' })
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'photos/load/success',
          payload: json
        })
      })
  }
}

export const selectAlbum = (userId) => {
  return {
    type: 'albums/select',
    payload: userId
  }
}

export const setFilterText = (text) => {
  return {
    type: 'filter/set',
    payload: text
  }
}