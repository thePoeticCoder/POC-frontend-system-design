export type ButtonType = {
  content: string
  className: string
  handleClick?: () => void
  isDisabled?: boolean
  buttonType?: 'button' | 'submit' | 'reset'
}
