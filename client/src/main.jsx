import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './Contexts/AuthContext.jsx'

import reducer, { initialState } from "./Contexts/reducer.jsx";
import { StateProvider } from "./Contexts/stateprovider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
