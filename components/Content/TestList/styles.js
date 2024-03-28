import {
    fontSize,
    colorPalette
} from '../../../mainStyles.js'
import {
    StyleSheet
} from 'react-native'




const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        backgroundColor: colorPalette.color3 
    },
    itemTitle: {
        fontSize: fontSize+3,
        color: colorPalette.textColor1
    },
    itemDetail: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },
    textItemDetail: {
        fontSize: fontSize,
        color: colorPalette.textColor1
    }
})

export default styles