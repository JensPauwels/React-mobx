import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TestComponent from './components/TestComponent'

@inject("Store")
@observer
class App extends Component {
  render() {
    const { Store } = this.props;
    return (
      <TestComponent store={Store}></TestComponent>
    );
  }
}

export default App;
