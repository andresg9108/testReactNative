import {
    View 
} from 'react-native'
import styles from './styles'
import Item from './Item/Item'
import { 
	menuItems 
} from '../../../constants'






const Items = props => (
	<View 
		style={styles.container} 
	>
		{
			menuItems.map((item, index) => (
				<Item 
					key={index} 
					path={item.path} 
					name={item.name} 
					setActiveMenu={props.setActiveMenu} 
					setPage={props.setPage} 
				/>
			))
		}
	</View>
)

export default Items