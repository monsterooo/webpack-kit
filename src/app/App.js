import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../table/Table';
import './resources/app.css';
import './resources/app.scss';
import './resources/app.less';
import simpsons from './resources/simpsons.jpg';
import './resources/fontawesome/css/font-awesome.css';

class App extends Component {
  componentDidMount() {
    //console.log('mount', this.props);
  }
  // 原始递增一个数
  handleIncrement = () => {
    let dispatch = this.props.dispatch;
    //dispatch({type: 'INCREMENT'})
    dispatch({type: 'INCREMENT_ASYNC'});
  }
  handleDecrement = () => {
    let dispatch = this.props.dispatch;
    dispatch({type: 'DECREMENT_ASYNC'});
  }
  render() {
    return(
      <div>
        <img src={simpsons} />
        <div>dud ~~{this.props.num}~~ App</div>
        <p><i className="fa fa-address-book-o fa-6"></i></p>
        <Table />
        <div>
          <button onClick={this.handleIncrement}>INCREMENT 增加</button>
          <button onClick={this.handleDecrement}>DECREMENT 减少</button>
        </div>
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
