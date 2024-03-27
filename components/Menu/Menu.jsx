import {
    ScrollView, 
    View, 
    Text 
} from 'react-native'
import styles from './styles'





const Menu = props => (
	<View style={{
		...styles.content, 
		transform: [{
            translateX: props.loadMenu ? 0 : -250 
        }]
	}}>
		<Text>Hola Mundo</Text>
		<Text>Hola Mundo</Text>
		<Text>Hola Mundo</Text>
		<Text>Hola Mundo</Text>
		<Text>Hola Mundo</Text>
	</View>
)

export default Menu