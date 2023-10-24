import { 
  useState, 
  useEffect 
} from 'react';

import { 
  StyleSheet, 
  View, 
  Text 
} from 'react-native';

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((oResponse) => { return oResponse.json(); })
		.then((oResponse) => {
			setUsers(oResponse);
		});
	}, []);

	return(
		<View style={styles.items}>
			<View style={styles.item}>
    		<Text style={styles.itemTitle}>Andrés González</Text>
    		<View style={styles.detail}>
    			<Text style={styles.textDetail}>Test#1</Text>
    			<Text style={styles.textDetail}>{' - '}andres.gonzalez@example.com</Text>
    		</View>
    	</View>
    	<View style={styles.item}>
    		<Text style={styles.itemTitle}>Oscar</Text>
    		<View style={styles.detail}>
    			<Text style={styles.textDetail}>Test#2</Text>
    			<Text style={styles.textDetail}>{' - '}oscar@example.com</Text>
    		</View>
    	</View>
			{
        users.map(item => (
        	<View key={item.id} style={styles.item}>
        		<Text style={styles.itemTitle}>{item.name}</Text>
        		<View style={styles.detail}>
        			<Text style={styles.textDetail}>{item.id}</Text>
        			<Text style={styles.textDetail}>{' - '}{item.email}</Text>
        		</View>
        	</View>
        ))
      }

      <Text>{'\n'}</Text>
		</View>
	);
};

export default Users;

const styles = StyleSheet.create({
  items: {
  	width: '100%', 
  	flexDirection: 'column', 
  	flexWrap: 'wrap', 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    alignContent: 'flex-start' 
  },
  item: {
  	width: '100%',
  	fontSize: 30,
  	flexDirection: 'column', 
  	flexWrap: 'wrap', 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    alignContent: 'flex-start', 
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,
    backgroundColor: '#404040' 
  },
  itemTitle: {
  	fontSize: 20,
  	color: '#fff'
  },
  detail: {
  	flexDirection: 'row', 
  	flexWrap: 'wrap', 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    alignContent: 'flex-start', 
  },
  textDetail: {
  	fontSize: 15,
  	color: '#fff'
  }
});