'use client'

import { useEffect } from 'react'
import Scroll from '@/utils/scroll'

const ScrollToTop = () => {
  useEffect( () => Scroll.scrollToTop(), [] )

  return null
}

export default ScrollToTop
