type IconType = {
  height?: number
  width?: number
  color?: string
  className?: string
}

type EditIconType = {
  height?: number
  width?: number
  color?: string
  className?: string
  onClick: () => void
}

export type { IconType, EditIconType }
