import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IHomeDetailScreenProps {}

const HomeDetailScreen: React.FC<IHomeDetailScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>HomeDetailScreen</Text>
    </SafeAreaView>
  );
};

export default HomeDetailScreen;
