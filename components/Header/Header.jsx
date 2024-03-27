import {
    View, 
    Text, 
    Image, 
    TouchableWithoutFeedback 
} from 'react-native'
import styles from './styles'




const Header = props => (
	<View style={styles.content}>
      <TouchableWithoutFeedback onPress={() => props.setLoadMenu(prev => !prev)}>
          <Image 
              style={styles.iconImage} 
              source={require('../../assets/menu.png')}
          />
      </TouchableWithoutFeedback>
      <View style={styles.title}>
          <Text style={styles.titleText}>
              Header
          </Text>
      </View>
      <Image 
          style={styles.iconImage} 
          source={require('../../assets/favicon.png')}
      />
    </View>
)

export default Header