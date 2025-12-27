import { IconType } from '../../types'

const MinusIcon = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z'
        fill={color}
        fillOpacity='0.87'
      />
      <line x1='6' y1='10' x2='14' y2='10' stroke='#184540' strokeWidth='2' />
    </svg>
  )
}

MinusIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default MinusIcon
