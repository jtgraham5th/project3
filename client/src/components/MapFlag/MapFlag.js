import React, {PropTypes, Component} from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import {MapFlagStyle} from './MapFlagStyle';

export default class MapFlag extends Component {
  

  

//   shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={MapFlagStyle}>
          {this.props.text}
          <img src= "http://cdn.onlinewebfonts.com/svg/img_37413.png" className = "w-50"/>
       </div>
    );
  }
}