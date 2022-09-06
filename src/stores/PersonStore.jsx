import { computed, makeObservable, observable } from 'mobx';

export default class PersonStore {
  @observable
  name = 'Mark';

  @observable
  age = 20;

  @computed
  get age10() {
    return Math.floor(this.age / 10) * 10;
  }
  constructor() {
    makeObservable(this);
  }
  plus() {
    this.age++;
  }
}
