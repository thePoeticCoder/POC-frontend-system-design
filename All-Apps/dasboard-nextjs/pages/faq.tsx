import FaqAccordion from '../components/FaqAccordion'
import styles from '../styles/faq.module.css'
import { QuestionType } from '../types/questionType.types'
import StaticData from '../json/data.json'

const Faq = () => {
  const { questions } = StaticData

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>FAQs</h2>
      {questions?.map((ele: QuestionType) => (
        <FaqAccordion
          key={crypto.randomUUID()}
          heading={ele.heading}
          questions={ele.questions}
        />
      ))}
    </div>
  )
}

Faq.auth = true
Faq.title = 'FAQ'
export default Faq
