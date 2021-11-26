import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/hero';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  buttonMenu: document.querySelector('#btn-menu'),
  buttonClose: document.querySelector('#btn-close'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
