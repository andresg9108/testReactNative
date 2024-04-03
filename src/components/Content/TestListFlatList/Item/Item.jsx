import {
	View, 
	Text 
} from 'react-native'
import styles from './styles'





const Item = props => (
	<View style={styles.container}>
		<Text style={styles.title}>
			{props.name}
		</Text>
		<Text style={styles.description}>
			{props.description}
		</Text>
	</View>
)

export default Item