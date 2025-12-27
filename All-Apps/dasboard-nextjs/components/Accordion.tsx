import styles from '../styles/accordion.module.css'
import { useState } from 'react'
import CloseIcon from './icons/CloseIcon'
import OpenIcon from './icons/OpenIcon'
import { AccordionPropsType } from '../types/accordion.type'
import { Filter } from './Filter'

const Accordion = ({
  title,
  isOpen,
  setIsOpen,
  children,
  titleClassName,
  containerClassName,
}: AccordionPropsType) => {
  const [isDateRangePickerShow, setIsDateRangePickerShow] =
    useState<boolean>(false)
  return (
    <div
      className={`${
        isOpen ? styles.openAccordionBgColor : styles.closeAccordionBgColor
      } ${containerClassName}`}
    >
      <div className={styles.container}>
        <p className={styles.accordionTitle}>{title}</p>
        {isOpen && title === 'Closed Tickets' ? (
          <Filter
            isDateRangePickerShow={isDateRangePickerShow}
            setIsDateRangePickerShow={setIsDateRangePickerShow}
          />
        ) : null}
        <button
          className='reset-btn-style'
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          {isOpen ? (
            <CloseIcon color='#003032' width={15} height={10} />
          ) : (
            <OpenIcon color='#003032' width={15} height={10} />
          )}
        </button>
      </div>
      {isOpen ? children : null}
      {/* // DONE: Render null instead of empty string */}
    </div>
  )
}

export default Accordion
