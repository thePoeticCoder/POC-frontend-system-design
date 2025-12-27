import { IconType } from '../../types'

const AscendingSort = ({ height, width, color, className }: IconType) => {
  return (
    <svg
      className={`${className} ml-3`}
      width={width}
      height={height}
      viewBox='0 0 10 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.10295 0.0907745L0.310258 1.88347C0.104644 2.08908 0.246003 2.43606 0.535148 2.43606L1.6853 2.43606L1.6853 11.4317C1.6853 11.7851 1.97444 12.0742 2.32784 12.0742C2.68124 12.0742 2.97039 11.7851 2.97039 11.4317L2.97039 2.43606L4.12054 2.43606C4.40968 2.43606 4.55104 2.08908 4.34543 1.88989L2.55273 0.0972003C2.43065 -0.0313083 2.22504 -0.0313083 2.10295 0.0907745Z'
        fill={color}
      />
    </svg>
  )
}
AscendingSort.defaultProps = {
  width: 15,
  height: 15,
  color: 'green',
}

export default AscendingSort
