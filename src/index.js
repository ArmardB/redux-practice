import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer,
})

const store = createStore(rootReducer);

const main = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
