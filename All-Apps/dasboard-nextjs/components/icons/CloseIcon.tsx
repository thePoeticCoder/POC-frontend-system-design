import { IconType } from '../../types'

const CloseIcon = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      cursor='pointer'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 15 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.55369 0.749253L0.392617 6.92744C-0.130872 7.45238 -0.130872 8.30037 0.392617 8.82532C0.916107 9.35026 1.76174 9.35026 2.28523 8.82532L7.50671 3.60279L12.7148 8.82532C13.2383 9.35026 14.0839 9.35026 14.6074 8.82532C15.1309 8.30037 15.1309 7.45238 14.6074 6.92744L8.44631 0.749253C7.93624 0.224309 7.07718 0.224309 6.55369 0.749253Z'
        fill={color}
        fillOpacity='0.87'
      />
    </svg>
  )
}
CloseIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default CloseIcon
