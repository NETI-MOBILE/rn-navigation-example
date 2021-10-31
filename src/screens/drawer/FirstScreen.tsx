import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Navigation from '../../navigation/Navigation';
import {Tabs} from '../../navigation/consts/tabs';

interface IFirstScreenProps {}

const FirstScreen: React.FC<IFirstScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>FirstScreen</Text>
      <Button
        onPress={() => Navigation.navigate(Tabs.TAB_HOME)}
        title={'Go to HomeScreen'}
      />
    </SafeAreaView>
  );
};

export default FirstScreen;
