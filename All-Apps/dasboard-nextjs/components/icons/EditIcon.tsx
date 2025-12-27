
import { EditIconType, IconType } from '../../types/icon.type'

const EditIcon = ({ height, width, className }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.36744 2.26514H2.19276C1.87642 2.26514 1.57304 2.3908 1.34935 2.61449C1.12567 2.83818 1 3.14156 1 3.4579V11.8073C1 12.1236 1.12567 12.427 1.34935 12.6507C1.57304 12.8744 1.87642 13 2.19276 13H10.5421C10.8585 13 11.1618 12.8744 11.3855 12.6507C11.6092 12.427 11.7349 12.1236 11.7349 11.8073V7.63258'
        stroke='#003032'
        strokeOpacity='0.87'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.8404 1.37054C11.0777 1.13329 11.3995 1 11.735 1C12.0705 1 12.3923 1.13329 12.6296 1.37054C12.8668 1.6078 13.0001 1.92959 13.0001 2.26512C13.0001 2.60065 12.8668 2.92244 12.6296 3.15969L6.96396 8.82532L4.57843 9.42171L5.17481 7.03618L10.8404 1.37054Z'
        stroke='#003032'
        strokeOpacity='0.87'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

EditIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default EditIcon
