import './index.css'

const HistorySearch = props => {
  const {userDetails, deleteUser} = props
  const {logoUrl, title, domainUrl, timeAccessed, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="user-card-container">
      <div>
        <p>{timeAccessed}</p>
      </div>
      <img src={logoUrl} className="profile-pic" alt="domain logo" />
      <div className="user-details-container">
        <p className="user-name"> {title} </p>
        <p className="user-designation"> {domainUrl} </p>
      </div>
      <button
        type="button"
        testid="delete"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistorySearch
