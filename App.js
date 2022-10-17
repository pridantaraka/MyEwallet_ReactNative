import React from 'react';
import Main from './src/screens/Main';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Main />
      </Provider>
    </PersistGate>
  );
};

export default App;
