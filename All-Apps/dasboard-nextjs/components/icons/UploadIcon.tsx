import { IconType } from '../../types'

const UploadIcon = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 14 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 6.25021H9.25V7.00021V12.0002C9.25 12.136 9.13579 12.2502 9 12.2502H5C4.86421 12.2502 4.75 12.136 4.75 12.0002V7.00021V6.25021H4H2.41C2.20071 6.25021 2.07393 5.98695 2.24033 5.82054L6.83033 1.23054C6.92744 1.13344 7.08256 1.13344 7.17967 1.23054L11.7697 5.82054C11.9247 5.97562 11.8153 6.25021 11.59 6.25021H10ZM1 15.7502H13C13.1358 15.7502 13.25 15.8644 13.25 16.0002C13.25 16.136 13.1358 16.2502 13 16.2502H1C0.864214 16.2502 0.75 16.136 0.75 16.0002C0.75 15.8644 0.864213 15.7502 1 15.7502Z'
        stroke={color}
        strokeWidth='1.5'
      />
    </svg>
  )
}

UploadIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default UploadIcon
