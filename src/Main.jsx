import { SafeAreaView } from 'react-native'
import React from 'react'
import { mainViewStyles } from './mainStyles.js'
import { NativeRouter, Route, Routes } from 'react-router-native'
import HelloWorld from './screens/HelloWorld/HelloWorld'
import MyWebView from './screens/MyWebView/MyWebView'
import TestList from './screens/TestList/TestList'
import useTestList from './screens/TestList/useTestList'
import TestListFlatList from './screens/TestListFlatList/TestListFlatList'
import useTestListFlatList from './screens/TestListFlatList/useTestListFlatList'

const Main = () => {
  const [, users] = useTestList()
  const [, dogs] = useTestListFlatList()

  return (
    <SafeAreaView style={mainViewStyles}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/mywebview" element={<MyWebView />} />
          <Route path="/testlist" element={<TestList users={users} />} />
          <Route
            path="/testlist-flatlist"
            element={<TestListFlatList dogs={dogs} />}
          />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  )
}

export default Main
