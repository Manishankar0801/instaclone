import React, { Component } from 'react';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <MainContent/>
            </div>
         );
    }
}
 
export default Home;