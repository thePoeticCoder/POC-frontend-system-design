import { IconType } from '../../types'

const CrossIcon = ({ height, width, className, color }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 2L2 14'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 2L14 14'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
CrossIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default CrossIcon
