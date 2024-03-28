import {
	ScrollView, 
	View, 
	Text 
} from 'react-native'
import styles from './styles'
import Title from '../../Title/Title'





const TestList = props => (
	<ScrollView>
		<Title>
			Test List
		</Title>

		{
			props.users.map(user => (
				<View 
					key={user.id} 
					style={styles.item}
				>
		      		<Text style={styles.itemTitle}>
		      			{user.name}
		      		</Text>
		      		<View style={styles.itemDetail}>
		      			<Text style={styles.textItemDetail}>
		      				{user.id}
		      			</Text>
		      			<Text style={styles.textItemDetail}>
		      				{' - '}{user.email}
		      			</Text>
		      		</View>
		      	</View>
			))
		}
	</ScrollView>
)

export default TestList