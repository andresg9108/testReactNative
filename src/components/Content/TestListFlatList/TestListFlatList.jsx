import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, Text } from 'react-native'
import Title from '../../Title/Title'
import Item from './Item/Item'

const TestListFlatList = ({ dogs }) => {
  return (
    <>
      <Title blue>Test List (FlatList)</Title>
      <FlatList
        data={dogs}
        renderItem={({ item: dog }) => (
          <Item
            key={dog.id}
            name={dog.attributes.name}
            description={dog.attributes.description}
          />
        )}
      />
    </>
  )
}

TestListFlatList.propTypes = {
  dogs: PropTypes.array.isRequired
}

export default TestListFlatList
