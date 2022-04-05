import React, {useRef, useState, useEffect} from 'react';
import {View, Button, Animated, StyleSheet} from 'react-native';

//import Easing from 'react-native/Libraries/Animated/Easing';

function AnimatedSample() {
  const animation = useRef(new Animated.Value(1)).current;
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);
  return (
    <View>
      <Animated.View
        style={[
          styles.ractangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button
        title="Toggle!!"
        onPress={() => {
          setEnabled(!enabled);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  ractangle: {width: 100, height: 100, backgroundColor: 'red'},
});
export default AnimatedSample;
