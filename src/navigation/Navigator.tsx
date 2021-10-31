import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Navigation from './Navigation';
import {TabsStack} from './stacks/TabsStack';
import {DrawerStack} from './stacks/DrawerStack';
import HomeStack from './stacks/HomeStack';
import {Stacks} from './consts/stacks';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer
      ref={Navigation.navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {TabsStack}
        {DrawerStack}
        <Stack.Screen name={Stacks.HOME_STACK} component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
