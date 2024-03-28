import {
    fontSize,
    padding,
    colorPalette
} from '../../mainStyles.js'
import {
    StyleSheet
} from 'react-native'




const styles = StyleSheet.create({
    content: {
        width: '100%',
        backgroundColor: colorPalette.color2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    text: {
        color: colorPalette.textColor1,
        fontSize: fontSize * 1.5
    }
})

export default styles