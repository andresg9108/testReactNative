import React from 'react'
import { WebView } from 'react-native-webview'

const MyWebView = () => (
  <WebView
    // source={{ uri: 'https://example.com' }}
    source={require('../../webview/index.html')}
    javaScriptEnabled
    // injectedJavaScript={'alert("Hola desde WebView")'}
    style={{
      flex: 1
    }}
  />
)

export default MyWebView
