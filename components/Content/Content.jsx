import {
    View 
} from 'react-native'
import styles from './styles'
import Users from '../Users/Users'
import HelloWorld from './HelloWorld/HelloWorld'
import MyWebView from './MyWebView/MyWebView'






const Content = props => {
    switch (props.page) {
      case 'mywebview':
        return(
            <View style={styles.container}>
                <MyWebView />
            </View>
        )
      case 'users':
        return(
            <View style={styles.container}>
                <Users />
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