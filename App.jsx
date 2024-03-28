import {
    SafeAreaView, // Para que se muestre correctamente en todos los dispositivos
    ScrollView, // Es un View al que se le puede hacer scroll
    View, // Son los DIV de React Native
    Text // Permite cargar textos
} from 'react-native'
import { useState } from 'react'
import { 
  mainViewStyles 
} from './mainStyles.js'
import Menu from './components/Menu/Menu'
import useMenu from './components/Menu/useMenu'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import Users from './components/Users/Users'




const App = () => {
    const [page, setPage] = useState('')
    const [{
        setActive: setActiveMenu 
    }, menuWidth, menuTranslateX] = useMenu()

    return(
        <SafeAreaView style={mainViewStyles}>
            <Header 
                setActiveMenu={setActiveMenu} 
            />
            <Content 
                page={page} 
            />
            <Footer />
            <Menu 
                menuWidth={menuWidth} 
                menuTranslateX={menuTranslateX} 
                setActiveMenu={setActiveMenu} 
                setPage={setPage} 
            />
        </SafeAreaView>
    )
}

export default App