import { useState } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'
import styles from '../styles/dropdown.module.css'
import { DropDownType, OptionType, ReactDivClickEvent } from '../types'
import CloseIcon from './icons/CloseIcon'
import OpenIcon from './icons/OpenIcon'

const Dropdown = ({
  searchFilter,
  selectOption,
  options,
  classNameForDropDown,
  classNameForOpenDropDown,
  classNameForOption,
}: DropDownType) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleClick = (event: ReactDivClickEvent) => {
    event.stopPropagation()
    setShowOptions((prev) => !prev)
  }

  const updateCurrentValue = (
    event: ReactDivClickEvent,
    option: string,
    value: string
  ) => {
    event.stopPropagation()
    selectOption(option, value)
    setShowOptions((prev) => !prev)
  }

  const filterRef = useClickOutside(() => setShowOptions(false))

  return (
    <div
      className={`${styles.container} ${
        showOptions ? classNameForOpenDropDown : classNameForDropDown
      }`}
    >
      <div ref={filterRef} className={styles.dropDown}>
        <div className={styles.dropDownBtn} onClick={handleClick}>
          {searchFilter?.option}
        </div>
        {showOptions ? (
          <div className={`${styles.optionsContainer} ${classNameForOption}`}>
            {options?.map(
              (
                ele: OptionType, // DONE: Fix any type
              ) =>
                ele.value !== searchFilter.value ? (
                  <div
                    key={crypto.randomUUID()}
                    className={styles.dropDownOption}
                    onClick={(event) =>
                      updateCurrentValue(event, ele?.option, ele.value)
                    }
                  >
                    {ele?.option}
                  </div>
                ) : null
            )}
          </div>
        ) : null}
      </div>
      <div onClick={handleClick}>
        {showOptions ? (
          <CloseIcon
            className={styles.icon}
            height={10}
            width={10}
            color='white'
          />
        ) : (
          <OpenIcon
            className={styles.icon}
            height={10}
            width={10}
            color='white'
          />
        )}
      </div>
    </div>
  )
}

export default Dropdown
