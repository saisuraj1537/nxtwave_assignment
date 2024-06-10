import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const constData = {
  failure: 'FAILURE',
  loading: 'LOADING',
  success: 'SUCCESS',
  initial: 'INITIAL',
}

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    buttonId: 'ALL',
    responseList: '',
    responseStatus: constData.loading,
  }

  componentDidMount() {
    this.repositoryFunc()
  }

  getId = id => {
    this.setState(
      {buttonId: id, responseStatus: constData.loading},
      this.repositoryFunc,
    )
  }

  repositoryFunc = async () => {
    const {buttonId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${buttonId}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const getDataFromRepo = data.popular_repos
      const responseList = getDataFromRepo.map(eachData => ({
        name: eachData.name,
        id: eachData.id,
        issuesCount: eachData.issues_count,
        forksCount: eachData.forks_count,
        starsCount: eachData.stars_count,
        avatarUrl: eachData.avatar_url,
      }))
      this.setState({responseStatus: constData.success, responseList})
    } else {
      this.setState({responseStatus: constData.failure})
    }
  }

  render() {
    const {responseStatus, responseList, buttonId} = this.state
    return (
      <div className="bg">
        <h1 className="head">Popular</h1>
        <ul className="filterUl">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem
              key={eachData.id}
              eachData={eachData}
              giveId={this.getId}
              buttonId={buttonId}
            />
          ))}
        </ul>
        {responseStatus === constData.loading && (
          <div data-testid="loader" className="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}
        {responseStatus === constData.success && (
          <ul className="responseUl">
            {responseList.map(eachList => (
              <RepositoryItem key={eachList.id} eachList={eachList} />
            ))}
          </ul>
        )}
        {responseStatus === constData.failure && (
          <div className="failureCard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
              className="failureImg"
            />
            <h1 className="head">Something Went Wrong</h1>
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
