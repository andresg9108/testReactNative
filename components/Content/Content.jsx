import {
    ScrollView, 
    View, 
    Text 
} from 'react-native'
import styles from './styles'
import Users from '../Users/Users'






const Content = () => (
	<View style={styles.container}>
      <ScrollView>
        <Text style={styles.containerText}>
          {'\n'}My first program{'\n'}
        </Text>

        <Users />
      </ScrollView>
    </View>
)

export default Content