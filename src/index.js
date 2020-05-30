import { render } from 'lit-html'
import ha from 'hyperactiv'

import App from './App.js'

ha.computed(() => {
    render(App(), window.app)
})
