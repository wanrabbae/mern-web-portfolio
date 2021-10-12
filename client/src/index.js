import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './reducers';
import { getEducations } from './actions/educationAction';
import { getAbout } from './actions/aboutAction';
import { getExperiences } from './actions/experienceAction';
import { getSkills } from './actions/skillAction';
import { getProjects } from './actions/projectAction';
import { getCertificates } from './actions/certificateAction';

import App from './App';
import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(getEducations());
store.dispatch(getAbout());
store.dispatch(getExperiences());
store.dispatch(getSkills());
store.dispatch(getProjects());
store.dispatch(getCertificates());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
