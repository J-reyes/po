import React from 'react';
import NavBar from './navbar';

class Home extends React.Component {
    render() {
        return (
             <div>
                <NavBar />
                <h1>homepage</h1>
             </div>
        );
    }
}

export default Home;