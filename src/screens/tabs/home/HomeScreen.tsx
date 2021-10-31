import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Navigation from '../../../navigation/Navigation';
import {Stacks} from '../../../navigation/consts/stacks';
import {Drawers} from '../../../navigation/consts/drawer';
import {Screens} from '../../../navigation/consts/screens';

interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <View style={{marginBottom: 20}}>
        <Button
          onPress={() =>
            Navigation.navigate(Stacks.HOME_STACK, {
              screen: Screens.HOME_DETAIL_SCREEN,
            })
          }
          title={'Go to HomeDetailScreen'}
        />
      </View>
      <View style={{marginBottom: 16}}>
        <Button
          onPress={() =>
            Navigation.navigate(Stacks.DRAWER_STACK, {
              screen: Drawers.DRAWER_FIRST,
            })
          }
          title={'Go to DrawerStack'}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
