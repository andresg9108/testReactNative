import {
    View 
} from 'react-native'
import styles from './styles'
import Icon from './Icon/Icon'






const Icons = props => {

	const clickClose = () => {
		props.setActiveMenu(false)
	}

	return(
		<View 
			style={styles.container} 
		>
			<Icon 
				onPress={clickClose} 
				img={require('../../../assets/close.png')} 
			/>
		</View>
	)
}

export default Icons