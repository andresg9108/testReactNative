import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'
import Item from './Item/Item'

const Items = ({ routes, setActiveMenu }) => (
  <View style={styles.container}>
    {routes.map((route, index) => (
      <Item
        key={index}
        path={route.path}
        name={route.name}
        setActiveMenu={setActiveMenu}
      />
    ))}
  </View>
)

Items.propTypes = {
  routes: PropTypes.array.isRequired,
  setActiveMenu: PropTypes.func.isRequired
}

export default Items
