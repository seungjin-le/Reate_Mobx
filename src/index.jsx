import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PersonContext from './contexts/PersonContext';
import PersonStore from './stores/PersonStore';
import { BrowserRouter } from 'react-router-dom';

//const isLogin = observable(true);
// const person = observable({
//   name: 'mark',
//   age: 30,
// });
//autorun(() => {
//   console.log(isLogin.get());
//   console.log(person.age);
// });
//isLogin.set(false);
// person.age = 40;

const personStore = new PersonStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PersonContext.Provider value={personStore}>
      <App />
    </PersonContext.Provider>
  </BrowserRouter>
);
