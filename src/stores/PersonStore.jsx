import { makeObservable, observable } from 'mobx';

export default class PersonStore {
  @observable
  name = 'Two';

  @observable
  age = 20;

  constructor() {
    makeObservable(this);
  }
  plus() {
    this.age++;
  }
}
