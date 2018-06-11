import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Page } from './containers/page';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
