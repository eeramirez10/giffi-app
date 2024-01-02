import { useRef } from "react"
import { useState, useEffect } from "react"

export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        observer.disconnect()
        setShow(true)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '50px'
    })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  })
  return {
    show,
    ref
  }
}
