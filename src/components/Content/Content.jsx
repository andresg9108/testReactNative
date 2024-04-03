import {
    View 
} from 'react-native'
import styles from './styles'
import HelloWorld from './HelloWorld/HelloWorld'
import MyWebView from './MyWebView/MyWebView'
import TestList from './TestList/TestList'
import useTestList from './TestList/useTestList'
import TestListFlatList from './TestListFlatList/TestListFlatList'
import useTestListFlatList from './TestListFlatList/useTestListFlatList'






const Content = props => {
    const [{}, users] = useTestList()
    const [{}, dogs] = useTestListFlatList()

    switch (props.page) {
      case 'mywebview':
        return(
            <View style={styles.container}>
                <MyWebView />
            </View>
        )
      case 'testlist':
        return(
            <View style={styles.container}>
                <TestList 
                    users={users} 
                />
            </View>
        )
      case 'testlist-flatlist':
        return(
            <View style={styles.container}>
                <TestListFlatList 
                    dogs={dogs} 
                />
            </View>
        )
      default:
        return(
            <View style={styles.container}>
                <HelloWorld />
            </View>
        )
    }
}

export default Content