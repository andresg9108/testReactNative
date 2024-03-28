import {
    StyleSheet
} from 'react-native'
import {
    fontSize, 
    colorPalette 
} from '../../mainStyles'




const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        backgroundColor: colorPalette.color1, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        alignContent: 'flex-start' 
    }
})

export default styles