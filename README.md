# Test React Native

## Cargar componentes dependiendo de la plataforma

### Cargar componentes externos dependiendo de la plataforma

```javascript
import { Platform } from 'react-native'

const AppBar = Platform.select({
  ios: () => require('./IOSAppBar.jsx').default,
  default: () => require('./AppBar.jsx').default
})()

const Test = () => <AppBar />
```

### Cargar componentes propios dependiendo de la plataforma

```javascript
import AppBar from './AppBar'

const Test = () => <AppBar />
```
Y después creamos dos archivos de la siguiente manera:

* AppBar.jsx
* AppBar.ios.jsx

## Uso de formularios

Podríamos usar las dos siguientes opciones para el uso de formularios

* [formik](https://formik.org)
* [react-hook-form](https://react-hook-form.com)