import { IconType } from '../../types'

const HomeIcon = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 17 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.5 0.383301L0 7.90413H2.55V14.5893H14.45V7.90413H17L8.5 0.383301ZM4.25 12.918V6.39161L8.5 2.63119L12.75 6.39161V12.918H4.25Z'
        fill={color}
      />
    </svg>
  )
}
HomeIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default HomeIcon
