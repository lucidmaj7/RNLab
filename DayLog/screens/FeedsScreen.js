import React from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';

function FeedsScreen() {
  return (
    <View style={style.block}>
      <FloatingWriteButton />
    </View>
  );
}

const style = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
