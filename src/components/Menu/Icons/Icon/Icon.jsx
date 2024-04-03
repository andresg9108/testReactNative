import {
    Image, 
    TouchableWithoutFeedback 
} from 'react-native'
import styles from './styles'





const Icon = props => (
	<TouchableWithoutFeedback
		onPress={props.onPress} 
	>
		<Image 
			style={styles.icon} 
			source={props.img}
		/>
	</TouchableWithoutFeedback>
)

export default Icon