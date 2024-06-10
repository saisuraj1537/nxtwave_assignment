// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {eachData, giveId, buttonId} = props
  const {id, language} = eachData

  const languageClick = () => {
    giveId(id)
  }

  return (
    <li className="languageLi">
      <button
        type="button"
        onClick={languageClick}
        className={buttonId === id ? 'colouredBtn' : 'languageBtn'}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
