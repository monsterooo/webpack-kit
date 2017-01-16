import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './table.css';

@CSSModules(styles)
class Table extends Component {
  render() {
    return(
      <div styleName="table-box">
        <div styleName="table">
          <div styleName="row">
              <div styleName="cell">CSSModules example</div>
            <div styleName="cell">React.js</div>
            <div styleName="cell">React Native</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Table;
//export default CSSModules(Table, styles);
