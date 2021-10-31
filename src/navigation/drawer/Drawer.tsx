import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import Navigation from '../Navigation';
import {Drawers} from '../consts/drawer';
import FirstScreen from '../../screens/drawer/FirstScreen';
import SecondScreen from '../../screens/drawer/SecondScreen';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator
    initialRouteName={Navigation.initialRoute}
    screenOptions={{drawerType: 'front'}}>
    <Drawer.Screen name={Drawers.DRAWER_FIRST} component={FirstScreen} />
    <Drawer.Screen name={Drawers.DRAWER_SECOND} component={SecondScreen} />
  </Drawer.Navigator>
);
