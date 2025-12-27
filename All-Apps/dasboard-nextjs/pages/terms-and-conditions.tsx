import TermsVectorIcon from '../components/icons/TermsVectorIcon'
import styles from '../styles/termsAndConditions.module.css'
import StaticData from '../json/data.json'

const TermsAndConditions = () => {
  const { termsHeader, firstTerm, secondTerm } = StaticData
  return (
    <div className={styles.container}>
      <TermsVectorIcon />
      <div className={styles.heading}>{termsHeader}</div>
      <p>{firstTerm}</p>
      <p>{secondTerm}</p>
    </div>
  )
}

TermsAndConditions.auth = true //DONE: DO this before exporting
TermsAndConditions.title = 'Platform Help'
export default TermsAndConditions
