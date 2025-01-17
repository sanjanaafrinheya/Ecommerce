import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import { ContextApi } from './components/ContextApi.jsx';
import store from '../src/Store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ContextApi>
    <Provider  store={ store} >
    <App />
    </Provider>
  
  </ContextApi>,
)
