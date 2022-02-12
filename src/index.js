import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/bootstrap.min.css';
import '../src/css/custom.css';
// import '../src/css/fontawesome.css';
// import '../src/css/fontawesome.min.css';
// import '../src/css/slick-theme.css';
// import '../src/css/slick-theme.min.css';
import '../src/css/slick.min.css';
import '../src/css/templatemo.css';
import '../src/css/templatemo.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

