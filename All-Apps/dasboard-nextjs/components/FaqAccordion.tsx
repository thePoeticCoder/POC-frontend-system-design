import { useState } from 'react'
import styles from '../styles/faqAccordion.module.css'
import { QuestionType } from '../types/questionType.types'
import MinusIcon from './icons/MinusIcon'
import PlusIcon from './icons/PlusIcon'

const FaqAccordion = ({ heading, questions }: QuestionType) => {
  //TODO: Add default props of data to [], heading to ''

  const [showQuestions, setShowQuestions] = useState(false)
  const toggleVisibility = () => {
    setShowQuestions((prev) => !prev)
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <div
        className={`${styles.dataContainer} ${
          showQuestions ? styles.padding : ''
        }`}
      >
        {showQuestions
          ? questions?.map((ele,index) => (
              <div
                className={styles.questionContainer}
                key={crypto.randomUUID()}
              >
                <p className={styles.question}>
                  {index + 1}. {ele?.question}
                </p>
                <p className={styles.answer}>{ele?.answer}</p>
              </div>
            ))
          : null}
      </div>
      <div className={styles.iconContainer}>
        <div onClick={toggleVisibility}>
          {showQuestions ? (
            <MinusIcon height={20} width={20} color='#003032' />
          ) : (
            <PlusIcon height={20} width={20} color='#003032' />
          )}
        </div>
      </div>
    </div>
  )
}

export default FaqAccordion
