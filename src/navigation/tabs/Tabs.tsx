import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import Navigation from '../Navigation';
import {Tabs} from '../consts/tabs';
import TabHomeStack from '../stacks/TabHomeStack';
import TabProfileStack from '../stacks/TabProfileStack';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName={Navigation.initialRoute}
    screenOptions={{headerShown: false, tabBarIconStyle: {display: 'none'}}}>
    <Tab.Screen
      name={Tabs.TAB_HOME}
      component={TabHomeStack}
      options={{
        tabBarLabel: 'Main',
      }}
    />
    <Tab.Screen
      name={Tabs.TAB_PROFILE}
      component={TabProfileStack}
      options={{
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);
