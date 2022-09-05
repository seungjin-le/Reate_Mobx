import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonContext from './contexts/PersonContext';
import PersonStore from './stores/PersonStore';

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
  <React.StrictMode>
    <PersonContext.Provider value={personStore}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
