import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; 
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import reportWebVitals from './reportWebVitals';
import '@fontsource/montserrat'; 

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// Report web vitals (performance metrics) to the console or an analytics endpoint
reportWebVitals();
