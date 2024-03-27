import {
    SafeAreaView, // Para que se muestre correctamente en todos los dispositivos
    ScrollView, // Es un View al que se le puede hacer scroll
    View, // Son los DIV de React Native
    Text // Permite cargar textos
} from 'react-native'
import { 
  mainViewStyles 
} from './mainStyles.js'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import Users from './components/Users/Users'
import { useState } from 'react'




const App = () => {
    const [loadMenu, setLoadMenu] = useState(false)

    return(
        <SafeAreaView style={mainViewStyles}>
          <Header 
              setLoadMenu={setLoadMenu} 
          />
          <Content />
          <Footer />
          <Menu 
              loadMenu={loadMenu} 
          />
        </SafeAreaView>
    )
}

export default App