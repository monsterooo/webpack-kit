import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import Table from '../table/Table';
import './resources/app.css';
import './resources/fontawesome/css/font-awesome.css';

class App extends Component {
  render() {
    return(
      <div>
        <Logo />
        <div className="">
          <h3><i className="fa fa-hand-peace-o"></i>&nbsp;webpack react 脚手架</h3>
        </div>
        <Table />
        {this.props.children || null}
      </div>
    );
  }
}
function mapStateProps(state) {
    return {
        num: state.counter
    }
}

module.exports = connect(mapStateProps)(App);
//export default App;
