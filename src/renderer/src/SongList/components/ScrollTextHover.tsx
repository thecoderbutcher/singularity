import { useEffect, useRef, useState } from 'react'

interface ScrollTextHoverProps {
  children: React.ReactNode
}

const ScrollTextHover = ({ children }: ScrollTextHoverProps): React.JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [shouldScroll, setShouldScroll] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const textEl = textRef.current
    if (container && textEl) setShouldScroll(textEl.scrollWidth > container.clientWidth)
  }, [children])
  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div
        ref={textRef}
        className={` whitespace-nowrap transition-transform duration-[3000ms] ease-linear ${
          shouldScroll ? 'hover:translate-x-[-50%]' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default ScrollTextHover
