import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'
import Item from './Item/Item'
import { menuItems } from '../../../constants'

const Items = ({ setActiveMenu, setPage }) => (
  <View style={styles.container}>
    {menuItems.map((item, index) => (
      <Item
        key={index}
        path={item.path}
        name={item.name}
        setActiveMenu={setActiveMenu}
        setPage={setPage}
      />
    ))}
  </View>
)

Items.propTypes = {
  setActiveMenu: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Items
