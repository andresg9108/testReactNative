import React, { useState, useEffect } from 'react'
import { Dimensions, Animated } from 'react-native'

const useMenu = () => {
  const [active, setActive] = useState(false)
  const space = 100
  const [width, setWidth] = useState(Dimensions.get('window').width - space)
  const [translateX, setTranslateX] = useState(new Animated.Value(-width))

  Dimensions.addEventListener('change', () => {
    setWidth(Dimensions.get('window').width - space)
  })

  useEffect(() => {
    if (!active) {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }, [active, width])

  // Animated.timing() o Animated.spring()

  return [
    {
      setActive
    },
    width,
    translateX
  ]
}

export default useMenu
