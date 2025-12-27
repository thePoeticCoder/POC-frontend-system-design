import { IconType } from '../../types'

const OpenIcon = ({ height, width, color, className }: IconType) => {
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
        d='M8.44631 8.88089L14.6074 2.7027C15.1309 2.17776 15.1309 1.32977 14.6074 0.804827C14.0839 0.279883 13.2383 0.279883 12.7148 0.804827L7.49329 6.02735L2.28524 0.804827C1.76175 0.279883 0.916108 0.279883 0.392618 0.804827C-0.130872 1.32977 -0.130872 2.17776 0.392618 2.7027L6.55369 8.88089C7.06376 9.40583 7.92282 9.40583 8.44631 8.88089Z'
        fill={color}
        fillOpacity='0.87'
      />
    </svg>
  )
}

OpenIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default OpenIcon
