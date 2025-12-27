import { useRef, useEffect } from 'react'

export const useClickOutside = (handler: () => void) => {
  const domElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const subHandler = (event: MouseEvent) => {
      if (!domElementRef.current?.contains(event.target as Node)) {
        handler()
      }
    }
    document.addEventListener('mousedown', subHandler)
    return () => {
      document.removeEventListener('mousedown', subHandler)
    }
  })

  return domElementRef
}
