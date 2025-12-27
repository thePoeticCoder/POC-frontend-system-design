import { IconType } from '../../types'

const CheckIcon = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 62 62'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='31' cy='31' r='31' fill='#859762' />
      <path
        d='M23.518 39.074L16.4284 31.8374C15.6384 31.031 14.3825 31.031 13.5925 31.8374C12.8025 32.6437 12.8025 33.9256 13.5925 34.732L22.0798 43.3952C22.8698 44.2016 24.146 44.2016 24.936 43.3952L46.4075 21.4994C47.1975 20.693 47.1975 19.4111 46.4075 18.6048C45.6175 17.7984 44.3616 17.7984 43.5716 18.6048L23.518 39.074Z'
        fill={color}
      />
    </svg>
  )
}
CheckIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'white',
}

export default CheckIcon
