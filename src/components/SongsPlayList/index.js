import './index.css'

const SongsPlayList = props => {
  const {songsList, onDeleteItem} = props
  const {id, imageUrl, name, duration, genre} = songsList

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="playlist">
        <div className="image-container">
          <img src={imageUrl} alt="track" className="image" />
          <div className="name-genre">
            <p>{name}</p>
            <p>{genre}</p>
          </div>
        </div>
        <div className="duration-delete">
          <p>{duration}</p>
          <button
            data-testid="delete"
            className="delete-button"
            type="button"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongsPlayList
