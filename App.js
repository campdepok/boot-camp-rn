import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import ListItem from './src/screens/ListItem';
import Maps from './src/screens/Maps';
import Live from './src/screens/Live';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Live">
        <Screen name="Home" component={Home} />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            title: 'Halaman Profile',
          }}
        />
        <Screen name="List" component={ListItem} />
        <Screen name="Maps" component={Maps} />
        <Screen name="Live" component={Live} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
