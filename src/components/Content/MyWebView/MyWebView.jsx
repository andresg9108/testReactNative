 import { 
 	WebView 
 } from 'react-native-webview'





const MyWebView = props => (
	<WebView
		// source={{ uri: 'https://example.com' }} 
		source={require('../../../webview/index.html')} 
		javaScriptEnabled={true} 
		// injectedJavaScript={'alert("Hola desde WebView")'} 
		style={{
			flex: 1 
		}} 
	/>
)

export default MyWebView