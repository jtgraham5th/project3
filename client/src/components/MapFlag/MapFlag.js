import React, {PropTypes, Component} from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import {MapFlagStyle} from './MapFlagStyle';

export default class MapFlag extends Component {
  

  

//   shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={MapFlagStyle}>
          {this.props.text}
       </div>
    );
  }
}