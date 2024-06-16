import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./component/App.jsx";

const app = <App />
const root = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<React.StrictMode>{app}</React.StrictMode>)
