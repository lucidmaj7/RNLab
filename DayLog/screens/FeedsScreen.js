import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

function FeedsScreen() {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  console.log(logs);
  return (
    <View style={style.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const style = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
