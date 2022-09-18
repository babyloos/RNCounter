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
  TouchableOpacity,
} from 'react-native';

import NeumorphismButton from './src/neumorphism-button';


const App: () => Node = () => {

  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((count) => count+1);
  };
  const countReset = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={[styles.sectionContainer, {marginTop: 120}]}>
        <NeumorphismButton buttonType={0} size={31} marginTop={0} marginBottom={0} onPress={countUp}>
          <Text style={styles.buttonText}>Count</Text>
        </NeumorphismButton>
        <NeumorphismButton buttonType={1} size={16} marginTop={48} marginBottom={0} onPress={countReset}>
          <Text style={styles.buttonText}>Reset</Text>
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
  },
  countText: {
    fontFamily: 'Menlo-Bold',
    fontSize: 96,
    color: '#70c7ff',
    flexWrap: 'wrap',
    padding: 12,
    shadowColor: '#5293d0',
    shadowOpacity: 1.0,
  },
  buttonText: {
    fontFamily: 'Menlo-Bold',
    color: '#303030',
    fontSize: 18,
  },
});

export default App;
