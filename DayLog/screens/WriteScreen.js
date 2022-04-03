import React, {useState} from 'react';
import {StyleSheet, Platform, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';

function WriteScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <SafeAreaView style={style.block}>
      <KeyboardAvoidingView
        style={style.avoidView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidView: {
    flex: 1,
  },
});

export default WriteScreen;
