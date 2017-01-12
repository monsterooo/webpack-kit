import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './table.css';

@CSSModules(styles)
class Table extends Component {
  render() {
    return(
      <div>
        <div styleName="table">
          <div styleName="row">
            <div styleName="cell">A0</div>
            <div styleName="cell">B1</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Table;
//export default CSSModules(Table, styles);
