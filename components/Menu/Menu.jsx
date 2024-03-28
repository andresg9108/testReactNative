import {
    Animated 
} from 'react-native'
import styles from './styles'
import Items from './Items/Items'
import Icons from './Icons/Icons'





const Menu = props => (
	<Animated.View style={{
		...styles.content, 
		width: props.menuWidth, 
		transform: [{
	        translateX: props.menuTranslateX 
	    }]
	}}>
		<Items 
			setActiveMenu={props.setActiveMenu} 
			setPage={props.setPage} 
		/>
		<Icons 
			setActiveMenu={props.setActiveMenu} 
		/>
	</Animated.View>
)

export default Menu