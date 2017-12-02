import React from 'react'
import ReactDOM from 'react-dom'

import './stylesheets/bootstrap.min.css'
import './stylesheets/style.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
