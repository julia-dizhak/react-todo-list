import React from 'react';
import ReactDOM from 'react-dom';

import PageContainer from './components/PageContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageContainer />, document.getElementById('root'));
registerServiceWorker();
