import { action, observable, computed } from "mobx";
import * as mobx from 'mobx';

class Store {
  @observable newUser = "";
  @observable users = [];

  @action
  log = () => {
    console.log(this.newUser)
  };

  @action
  update = name => {
    this.newUser = name;
  };

  @action 
  add = () => {
    this.users.push(this.newUser);
  };

  @computed 
  get total() {
    return this.users.length
  }


  @computed 
  get getUsers() {
    return this.users;
  }

}

export default new Store();
