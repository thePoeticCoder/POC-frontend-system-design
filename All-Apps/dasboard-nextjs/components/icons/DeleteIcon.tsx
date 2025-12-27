import { IconType } from '../../types'

const DeleteIcon = ({ height, width, className, color }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 14 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      k
      <path
        d='M1 3.3999H2.33333H13'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.48572 3.72V2.36C4.48572 1.99931 4.61817 1.65338 4.85393 1.39833C5.08969 1.14329 5.40945 1 5.74286 1H8.25715C8.59056 1 8.91032 1.14329 9.14608 1.39833C9.38184 1.65338 9.51429 1.99931 9.51429 2.36V3.72M11.4 3.72V13.24C11.4 13.6007 11.2676 13.9466 11.0318 14.2017C10.796 14.4567 10.4763 14.6 10.1429 14.6H3.85715C3.52373 14.6 3.20397 14.4567 2.96821 14.2017C2.73245 13.9466 2.60001 13.6007 2.60001 13.24V3.72H11.4Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
DeleteIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}
export default DeleteIcon
