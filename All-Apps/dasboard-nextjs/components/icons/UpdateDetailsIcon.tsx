import { IconType } from '../../types'

const UpdateDetailsIcon = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.30833 2.51853L13.3333 6.55471V14.2176H1.66667V2.51853H9.30833ZM9.30833 0.847229H1.66667C0.75 0.847229 0 1.59931 0 2.51853V14.2176C0 15.1368 0.75 15.8889 1.66667 15.8889H13.3333C14.25 15.8889 15 15.1368 15 14.2176V6.55471C15 6.11181 14.825 5.68563 14.5083 5.37644L10.4833 1.34026C10.175 1.02272 9.75 0.847229 9.30833 0.847229ZM3.33333 10.875H11.6667V12.5463H3.33333V10.875ZM3.33333 7.53241H11.6667V9.20371H3.33333V7.53241ZM3.33333 4.18982H9.16667V5.86112H3.33333V4.18982Z'
        fill={color}
      />
    </svg>
  )
}

UpdateDetailsIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default UpdateDetailsIcon
