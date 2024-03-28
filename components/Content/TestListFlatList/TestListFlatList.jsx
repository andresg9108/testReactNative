import {
	FlatList, 
	Text 
} from 'react-native'
import Title from '../../Title/Title'
import Item from './Item/Item'




const TestListFlatList = props => {

	return(
		<>
			<Title>
				Test List (FlatList)
			</Title>
			<FlatList 
				data={props.dogs}
				renderItem={({ item: dog }) => (
					<Item 
						key={dog.id} 
						name={dog.attributes.name} 
						description={dog.attributes.description} 
					/>
				)}
			/>
		</>
	)
}

export default TestListFlatList