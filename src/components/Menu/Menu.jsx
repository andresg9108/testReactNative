import {
    Animated, 
    StyleSheet 
} from 'react-native'
import styles from './styles'
import Items from './Items/Items'
import Icons from './Icons/Icons'





const Menu = props => {
	const contentStyles = [
		styles.content, 
		StyleSheet.create({
			width: props.menuWidth, 
			transform: [{
		        translateX: props.menuTranslateX 
		    }]
		})
	]

	return(
		<Animated.View style={contentStyles}>
			<Items 
				setActiveMenu={props.setActiveMenu} 
				setPage={props.setPage} 
			/>
			<Icons 
				setActiveMenu={props.setActiveMenu} 
			/>
		</Animated.View>
	)
}

export default Menu