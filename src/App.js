import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DateCard from './components/DateCard/DateCard';

class App extends Component {
    render() {

        // Set the image details to use later
        var image = { src: 'test.png', alt:'' };

        return (
            <div className='app'>
                <header>
                    <div className='wrapper'>
                        <h1>GDI</h1>
                    </div>
                </header>
                <div className='container'>
                    <section className='display-item'>
                        <div className='wrapper'>
                            <DateCard title="Best Date Ever" image = { image } />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
