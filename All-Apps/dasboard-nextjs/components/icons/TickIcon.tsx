import { IconType } from '../../types'

const TickIcon = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 28 21'
      fill='white'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.6619 17.0213L2.82335 11.1763C2.17277 10.525 1.13852 10.525 0.487936 11.1763C-0.162645 11.8276 -0.162645 12.863 0.487936 13.5143L7.47751 20.5115C8.12809 21.1628 9.17903 21.1628 9.82961 20.5115L27.5121 2.82644C28.1626 2.17515 28.1626 1.13976 27.5121 0.488469C26.8615 -0.162823 25.8272 -0.162823 25.1766 0.488469L8.6619 17.0213Z'
        fill={color}
      />
    </svg>
  )
}
TickIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default TickIcon
