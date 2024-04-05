import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text } from 'react-native'
import styles from './styles'
import LayoutMain from '../../layauts/LayoutMain/LayoutMain'
import Title from '../../components/Title/Title'

const TestList = ({ users }) => (
  <LayoutMain>
    <ScrollView>
      {/* <ScrollView horizontal> */}
      <Title red>Test List</Title>

      {users.map(user => (
        <View key={user.id} style={styles.item}>
          <Text style={styles.itemTitle}>{user.name}</Text>
          <View style={styles.itemDetail}>
            <Text style={styles.textItemDetail}>{user.id}</Text>
            <Text style={styles.textItemDetail}>
              {' - '}
              {user.email}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </LayoutMain>
)

TestList.propTypes = {
  users: PropTypes.array.isRequired
}

export default TestList
