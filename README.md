# Test React Native

### Para cargar un componente externo

```javascript
import { Platform } from 'react-native'

const AppBar = Platform.select({
  ios: () => require('./IOSAppBar.jsx').default,
  default: () => require('./AppBar.jsx').default
})()

const Test = () => <AppBar />
```

### Para cargar componentes creados por nosotros es mejor lo siguiente

```javascript
import AppBar from './AppBar'

const Test = () => <AppBar />
```
Y después creamos dos archivos de la siguiente manera:

* AppBar.jsx
* AppBar.ios.jsx