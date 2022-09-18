/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import type { Node } from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NeumorphismButton from './src/neumorphism-button';


const App: () => Node = () => {

  var count = 0;
  const countUp = () => {
    count += 1;
    console.log(count);
  };
  const countReset = () => {
    count = 0;
    console.log(count);
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={[style=styles.sectionContainer, {marginTop: 248}]}>
        <NeumorphismButton buttonType={0} size={31} marginTop={0} marginBottom={0} onPress={countUp}>
          <Text>Count</Text>
        </NeumorphismButton>
        <NeumorphismButton buttonType={1} size={16} marginTop={48} marginBottom={0} onPress={countReset}>
          <Text>Reset</Text>
        </NeumorphismButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#61adf5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 0,
    alignItems: 'center',
  }
});

export default App;
