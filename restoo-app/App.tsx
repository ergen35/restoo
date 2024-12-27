/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    StyleSheet,
} from 'react-native';

import WebView from 'react-native-webview';

function App(): React.JSX.Element {

    return (
        <>
            <WebView
                collapsable={true} 
                source={{ uri: 'https://www.google.com' }} />
        </>
    );
}

export default App;
