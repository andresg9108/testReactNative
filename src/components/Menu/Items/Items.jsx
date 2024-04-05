import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'
import Item from './Item/Item'
import { menuItems } from '../../../constants'

const Items = () => (
  <View style={styles.container}>
    {menuItems.map((item, index) => (
      <Item key={index} path={item.path} name={item.name} />
    ))}
  </View>
)

export default Items
