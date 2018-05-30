import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Menu from '../containers/Menu/Menu';
import DateCard from '../components/DateCard/DateCard';

export default class Home extends Component {
    render() {

        // Set the image details to use later
        var image = { src: 'test.png', alt:'' };

        return (
            <div className='app'>
                <Menu>
                  <p>Hello World of React and Webpack!</p>
                  <p>
                    <Link to="/dynamic">Navigate to Dynamic Page</Link>
                  </p>
                </Menu>
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
