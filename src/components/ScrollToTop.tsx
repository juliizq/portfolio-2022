import React, { useEffect, useState } from 'react'

export default function ScrollToTop () {
  const [showButton, setShowButton] = useState(false)

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
    console.log('top')
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div>
      <button onClick={scrollToTop}>top</button>
    </div>

  )
}
