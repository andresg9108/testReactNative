import Constants from 'expo-constants';

import { 
  StatusBar 
} from 'expo-status-bar';

import { 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text 
} from 'react-native';

import Users from './general/Users/Users';

const App = () => (
  <SafeAreaView style={styles.maincontainer}>
    <StatusBar />

    <View style={styles.headerandfooter}>
      <Text style={styles.headerandfooterText}>Header</Text>
    </View>
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.containerText}>{'\n'}My first program{'\n'}</Text>
        <Users />
      </ScrollView>
    </View>
    <View style={styles.headerandfooter}>
      <Text style={styles.headerandfooterText}>Footer</Text>
    </View>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: Constants.statusBarHeight
  },
  headerandfooter: {
    width: '100%', 
    backgroundColor: '#808080', 
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center' 
  },
  headerandfooterText: {
    color: '#fff', 
    fontSize: 25 
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000'
  },
  containerText: {
    fontSize: 25, 
    color: '#fff' 
  }
});