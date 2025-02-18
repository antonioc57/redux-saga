import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import Info from './Info';
import UserAgent from './UsetAgent';

import createSagaMiddleware from 'redux-saga';

import indexSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(indexSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Info />
        <UserAgent />
      </div>
    </Provider>
  );
}

export default App;
