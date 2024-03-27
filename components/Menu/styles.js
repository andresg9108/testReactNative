import {
    StyleSheet, 
    Dimensions 
} from 'react-native'




const styles = StyleSheet.create({
    content: {
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        width: 250, 
        backgroundColor: 'blue',
        transform: [{
            translateX: -250 
        }]
    }
})

export default styles