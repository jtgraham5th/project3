import React, {Component} from 'react';
// import {propTypes} from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';
import "./style.css";
// import {MapFlagStyle} from './MapFlagStyle.js';

// import { Nav, NavItem, NavLink } from 'reactstrap';

// export default class MapFlag extends Component {
  // static propTypes = {
    // text: PropTypes.string
  // };

  // static defaultProps = {};

  // const shouldComponentUpdate = shouldPureComponentUpdate;

  // constructor(props) {
    // super(props);
  // }

  function MapFlag(props) {
      return (
       <div>
          {props.text}
       </div>
    );
  }
  export default MapFlag;
