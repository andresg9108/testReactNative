import {
    ScrollView, 
    View 
} from 'react-native'
import styles from './styles'
import Users from '../Users/Users'
import HelloWorld from './HelloWorld/HelloWorld'






const Content = props => (
	<View style={styles.container}>
      <ScrollView>
        {
            props.page === 'users' ? (
                <Users />
            ) : (
                <HelloWorld />
            )
        }
      </ScrollView>
    </View>
)

export default Content