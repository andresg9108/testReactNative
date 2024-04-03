import {
    Text, 
    TouchableWithoutFeedback 
} from 'react-native'
import styles from './styles'






const Item = props => {
	
	const itemClick = path => {
		props.setActiveMenu(false)
		props.setPage(path)
	}

	return(
		<TouchableWithoutFeedback
			onPress={() => itemClick(props.path)} 
		>
			<Text style={styles.item}>
				{ props.name }
			</Text>
		</TouchableWithoutFeedback>
	)
}

export default Item