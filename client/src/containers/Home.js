import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Drinks on Us</h1>
                <Link to= "/" >View All Drinks</Link>
                
                <Link to="/collection" >View All Drinks</Link>

                <Link to="/"> More to Come</Link>
            </div>
        );
    }
}

export default Home;