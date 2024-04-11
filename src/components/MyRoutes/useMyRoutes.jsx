import React from 'react'
import HelloWorld from '../../screens/HelloWorld/HelloWorld'
import MyWebView from '../../screens/MyWebView/MyWebView'
import TestList from '../../screens/TestList/TestList'
import useTestList from '../../screens/TestList/useTestList'
import TestListFlatList from '../../screens/TestListFlatList/TestListFlatList'
import useTestListFlatList from '../../screens/TestListFlatList/useTestListFlatList'
import FormsFormik from '../../screens/FormsFormik/FormsFormik'

const useMyRoutes = () => {
  const [, users] = useTestList()
  const [, dogs] = useTestListFlatList()

  return [
    {},
    [
      {
        name: '¡Hello World!',
        path: '/',
        element: HelloWorld
      },
      {
        name: 'My WebView',
        path: '/mywebview',
        element: MyWebView
      },
      {
        name: 'Test List',
        path: '/testlist',
        element: () => <TestList users={users} />
      },
      {
        name: 'Test List (FlatList)',
        path: '/testlist-flatlist',
        element: () => <TestListFlatList dogs={dogs} />
      },
      {
        name: 'Forms (Formik)',
        path: '/forms-formik',
        element: FormsFormik
      }
    ]
  ]
}

export default useMyRoutes
