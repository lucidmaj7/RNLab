import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TransparentCircleButton({name, color, hasMarginRight, onPress}) {
  return (
    <View
      style={[style.iconButtonWrapper, hasMarginRight && style.marginRight]}>
      <Pressable
        style={style.iconButton}
        onPress={onPress}
        android_ripple={{color: '#ededed'}}>
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  marginRight: {
    marginRight: 8,
  },
});

export default TransparentCircleButton;
