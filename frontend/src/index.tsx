import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './store/store';
import axios from 'axios';

interface State{
  store: Store,
}

const store = new Store();

export const Context = createContext<State>({
  store, 
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Context.Provider value={{store}}>        
        <App />
      </Context.Provider>
      </BrowserRouter>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
