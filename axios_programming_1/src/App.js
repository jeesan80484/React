import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import UsersContainer from './components/UsersContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
