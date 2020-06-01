import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Dimensions from './src/screens/Dimensions';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Dimensions">
        <Screen name="Home" component={Home} />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            title: 'Halaman Profile',
          }}
        />
        <Screen name="Dimensions" component={Dimensions} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
