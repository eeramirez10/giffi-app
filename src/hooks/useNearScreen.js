import { useRef } from "react"
import { useState, useEffect } from "react"

export const useNearScreen = ({ once = true } = {}) => {
  const [show, setShow] = useState(false)
  const ref = useRef()


  const onChange = (entries, observer) => {
    const el = entries[0]
    if (el.isIntersecting) {
      setShow(true)
      once && observer.disconnect()
    } else {
      !once && setShow(false)
    }
  }

  useEffect(() => {

    let observer;


    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')

    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '50px'
      })

      if (ref.current) observer.observe(ref.current)

    })
    .catch(console.log)

    return () => observer?.disconnect()
  })
  return {
    show,
    ref
  }
}
