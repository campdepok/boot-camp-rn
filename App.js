import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import ListItem from './src/screens/ListItem';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Profile">
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
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
