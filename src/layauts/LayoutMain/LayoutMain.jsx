import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Menu from '../../components/Menu/Menu'
import useMenu from '../../components/Menu/useMenu'

const LayoutMain = ({ children, routes }) => {
  const [{ setActive: setActiveMenu }, menuWidth, menuTranslateX] = useMenu()

  return (
    <>
      <Header setActiveMenu={setActiveMenu} />
      <View style={styles.container}>{children}</View>
      <Footer />
      <Menu
        routes={routes}
        menuWidth={menuWidth}
        menuTranslateX={menuTranslateX}
        setActiveMenu={setActiveMenu}
      />
    </>
  )
}

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
  routes: PropTypes.array.isRequired
}

export default LayoutMain
