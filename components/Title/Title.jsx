import {
	View, 
	Text 
} from 'react-native'
import styles from './styles'





const Title = props => (
	<View style={styles.title}>
		<Text style={styles.titleText}>
			{ props.children } 
		</Text>
	</View>
)

export default Title