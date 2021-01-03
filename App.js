import React from 'react';
import Main from './src/components/Main';
import { NativeRouter as Router } from 'react-router-native';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;
