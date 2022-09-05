import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { autorun, makeObservable, observable } from 'mobx';

const isLogin = observable(true);
const person = observable({
  name: 'mark',
  age: 30,
});
class PersonStore {
  @observable
  name = 'Two';

  @observable
  age = 20;

  constructor() {
    makeObservable(this);
  }
}
const personStore = new PersonStore();

autorun(() => {
  console.log(isLogin.get());
  console.log(person.age);
  console.log(personStore.age);
});

isLogin.set(false);
person.age = 40;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
