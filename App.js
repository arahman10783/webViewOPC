import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/home';
import Playground from './src/playground';
import {AuthContext} from './context/contextprovider';

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    dark: '#050505',
    light: '#F5F1E3',
    button: '#b25b00',
    textLight: '#FFFFFF',
    textDark: '#4E598C',
    input: '#DDDBCB',
  },
};

export default function App() {
  const [authData, setAuthData] = useState(null);
  return (
    <AuthContext.Provider value={{authData, setAuthData}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Webviews" component={Home} />
          <Stack.Screen name="Playground" component={Playground} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
