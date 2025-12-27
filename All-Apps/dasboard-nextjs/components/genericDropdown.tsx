import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'
import styles from '../styles/genericDropdown.module.css'
import { ReactDivClickEvent } from '../types'
import { genericDropdownType } from '../types/genericDropdown.type'
import CloseIcon from './icons/CloseIcon'
import OpenIcon from './icons/OpenIcon'

const GenericDropdown = ({
  setChangeHandler,
  initialOption,
  initialValue,
  options,
  fontSize,
  width,
  color,
  backgroundColor,
  maxWidth,
}: genericDropdownType) => {
  const [showOptions, setShowOptions] = useState(false)
  const [currentValue, setCurrentValue] = useState({
    option: initialOption,
    value: initialValue,
  })

  useEffect(()=>{
    setCurrentValue({
    option: initialOption,
    value: initialValue,
  })
  },[initialOption, initialValue])

  const handleClick = (event: ReactDivClickEvent) => {
    event.stopPropagation()
    setShowOptions((prev) => !prev)
  }
  const dropDownRef = useClickOutside(() => setShowOptions(false))

  const updateCurrentValue = (
    event: ReactDivClickEvent,
    option: string,
    value: string | number
  ) => {
    event.stopPropagation()

    setCurrentValue({ option, value })
    setChangeHandler(value)
    setShowOptions((prev) => !prev)
  }
  return (
    <div ref={dropDownRef} 
      className={styles.container}
      style={{
        borderRadius: showOptions ? '8px 8px 0 0' : '8px',
        fontSize,
        width,
        color: color || '#053233',
        backgroundColor: backgroundColor || 'white',
        maxWidth,
      }}
    >
      <div className={styles.dropDown}>
        <div className={styles.dropDownBtn} onClick={handleClick}>
          {currentValue.option}
        </div>
        {showOptions && (
          <div
            className={styles.optionsContainer}
            style={{
              color: color || '#053233',
              backgroundColor: backgroundColor || 'white',
            }}
          >
            {options?.map((ele) =>
              ele.value !== currentValue.value ? (
                <div
                  key={nanoid()}
                  className={styles.dropDownOption}
                  onClick={(event) =>
                    updateCurrentValue(event, ele?.option, ele.value)
                  }
                >
                  {ele?.option}
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        )}
      </div>
      <div onClick={handleClick}>
        {showOptions ? (
          <CloseIcon
            className={styles.icon}
            height={10}
            width={10}
            color={color}
          />
        ) : (
          <OpenIcon
            className={styles.icon}
            height={10}
            width={10}
            color={color}
          />
        )}
      </div>
    </div>
  )
}

export default GenericDropdown
