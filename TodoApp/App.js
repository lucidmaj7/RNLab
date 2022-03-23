import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import AsyncStorage from '@react-native-community/async-storage';
import todosStorage from './storages/todosStorage';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '작업환경 설정1', done: false},
  ]);
  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      //
    }
  };
  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodo = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodo);
  };

  const onRemove = id => {
    const nextTodo = todos.filter(todo => todo.id !== id);
    setTodos(nextTodo);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
