import React from 'react'
import PropTypes from 'prop-types'
import { NativeRouter, Route, Routes } from 'react-router-native'
import LayoutMain from '../../layauts/LayoutMain/LayoutMain'
import NotFound from '../../screens/NotFound/NotFound'

const MyRoutes = ({ routes }) => (
  <NativeRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <LayoutMain routes={routes}>
              <route.element />
            </LayoutMain>
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </NativeRouter>
)

MyRoutes.propTypes = {
  routes: PropTypes.array.isRequired
}

export default MyRoutes
