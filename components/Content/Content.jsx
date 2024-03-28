import {
    View 
} from 'react-native'
import styles from './styles'
import HelloWorld from './HelloWorld/HelloWorld'
import MyWebView from './MyWebView/MyWebView'
import TestList from './TestList/TestList'
import useTestList from './TestList/useTestList'






const Content = props => {
    const [users] = useTestList()

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
      default:
        return(
            <View style={styles.container}>
                <HelloWorld />
            </View>
        )
    }
}

export default Content