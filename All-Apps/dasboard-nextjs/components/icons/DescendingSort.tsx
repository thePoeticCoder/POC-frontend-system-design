import { IconType } from '../../types'

const DescendingSort = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      viewBox='0 0 10 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.69311 12.492L9.48581 10.6993C9.69142 10.4937 9.55006 10.1467 9.26092 10.1467L8.11077 10.1467L8.11077 1.15112C8.11077 0.797719 7.82162 0.508574 7.46822 0.508574C7.11483 0.508574 6.82568 0.797719 6.82568 1.15112L6.82568 10.1467L5.67553 10.1467C5.38638 10.1467 5.24502 10.4937 5.45064 10.6929L7.24333 12.4856C7.36542 12.6141 7.57103 12.6141 7.69311 12.492Z'
        fill={color}
      />
    </svg>
  )
}
DescendingSort.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default DescendingSort
