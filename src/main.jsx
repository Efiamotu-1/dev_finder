import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#F6F8FF] max-w-[573px] lg:max-w-[700px] m-auto dark:bg-[#141D2F]'>
    <App />
    </div>
  </React.StrictMode>,
)
