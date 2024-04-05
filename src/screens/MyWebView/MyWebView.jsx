import React from 'react'
import LayoutMain from '../../layauts/LayoutMain/LayoutMain'
import { WebView } from 'react-native-webview'

const MyWebView = () => (
  <LayoutMain>
    <WebView
      // source={{ uri: 'https://example.com' }}
      source={require('../../webview/index.html')}
      javaScriptEnabled
      // injectedJavaScript={'alert("Hola desde WebView")'}
      style={{
        flex: 1
      }}
    />
  </LayoutMain>
)

export default MyWebView
