import { SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { mainViewStyles } from './mainStyles.js'
import Menu from './components/Menu/Menu'
import useMenu from './components/Menu/useMenu'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

const Main = () => {
  const [page, setPage] = useState('')
  const [{ setActive: setActiveMenu }, menuWidth, menuTranslateX] = useMenu()

  return (
    <SafeAreaView style={mainViewStyles}>
      <Header setActiveMenu={setActiveMenu} />
      <Content page={page} />
      <Footer />
      <Menu
        menuWidth={menuWidth}
        menuTranslateX={menuTranslateX}
        setActiveMenu={setActiveMenu}
        setPage={setPage}
      />
    </SafeAreaView>
  )
}

export default Main
