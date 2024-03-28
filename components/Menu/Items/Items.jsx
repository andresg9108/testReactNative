import {
    View 
} from 'react-native'
import styles from './styles'
import Item from './Item/Item'






const Items = props => (
	<View 
		style={styles.container} 
	>
		<Item 
			path={''} 
			name={'¡Hello World!'} 
			setActiveMenu={props.setActiveMenu} 
			setPage={props.setPage} 
		/>
		<Item 
			path={'users'} 
			name={'Users'} 
			setActiveMenu={props.setActiveMenu} 
			setPage={props.setPage} 
		/>
	</View>
)

export default Items