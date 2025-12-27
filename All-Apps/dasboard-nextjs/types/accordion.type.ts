import { Dispatch, SetStateAction } from 'react'

export type AccordionPropsType = {
  isOpen: boolean
  title: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
  titleClassName?: string
  containerClassName?: string
}
