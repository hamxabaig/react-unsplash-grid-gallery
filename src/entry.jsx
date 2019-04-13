import 'normalize.css';
import React from 'react';
import DOM from 'react-dom';
import App from './app';

DOM.render(<App />, document.getElementById('app'))

if(__DEV__) {
  module.hot.accept()
}
