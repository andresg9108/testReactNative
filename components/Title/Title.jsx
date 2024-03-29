import {
	View, 
	Text 
} from 'react-native'
import styles from './styles'





const Title = ({
	children, 
	red, 
	blue 
}) => {
	const textStyles = [ 
		styles.text, 
		red && styles.textRed, 
		blue && styles.textBlue 
	]

	return(
		<View style={styles.content}>
			<Text style={textStyles}>
				{ children } 
			</Text>
		</View>
	)
}

export default Title