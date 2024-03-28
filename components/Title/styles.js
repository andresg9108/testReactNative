import {
    fontSize,
    colorPalette
} from '../../mainStyles.js'
import {
    StyleSheet
} from 'react-native'




const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: 30,
        paddingHorizontal: 30
    },
     titleText: {
        color: colorPalette.textColor1, 
        fontSize: fontSize*2
    }
})

export default styles