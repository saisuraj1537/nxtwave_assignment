// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {eachList} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachList

  return (
    <li className="responseLi">
      <div className="responseImgCard">
        <img src={avatarUrl} alt={name} className="responseImg" />
        <h1 className="responseName">{name}</h1>
      </div>
      <div className="responseRow">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="responseSmallImgs"
        />
        <p className="responseFeedText">{starsCount} stars</p>
      </div>
      <div className="responseRow">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="responseSmallImgs"
        />
        <p className="responseFeedText">{forksCount} forks</p>
      </div>
      <div className="responseRow">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="responseSmallImgs"
        />
        <p className="responseFeedText">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
