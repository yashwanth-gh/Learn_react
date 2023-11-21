import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// ^ creating elemnts through React.createElement
// & const websiteName ="Youtube";

// &    const ReactElement  = React.createElement(
// &      'a',
// &      {
// &        href:'https://youtube.com',
// &        target:'_blank'
// &      },
// &      "click this to go to the website ",
// &      websiteName,
// &      " website"
// &    )

// &    ReactDOM.createRoot(document.getElementById('root')).render(
// &        ReactElement
// &    )




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


