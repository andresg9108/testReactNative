import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { mainViewStyles } from './mainStyles.js'
import MyRoutes from './components/MyRoutes/MyRoutes'
import useMyRoutes from './components/MyRoutes/useMyRoutes'

const Main = () => {
  const [, routes] = useMyRoutes()

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={mainViewStyles}>
        <MyRoutes routes={routes} />
      </SafeAreaView>
    </>
  )
}

export default Main
