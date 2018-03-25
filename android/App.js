import React from 'react';
import { View } from 'react-native';
import styles from './src/Styles';
import TaskInput from './src/TaskInput';
import TaskList from './src/TaskList';
import ListAva from './src/ListAvatar/ListAvatarView';

const App = () => (
  <View style={styles.App}>
    <TaskInput />
    <TaskList />
    <ListAva />
  </View>
);

export default App;
