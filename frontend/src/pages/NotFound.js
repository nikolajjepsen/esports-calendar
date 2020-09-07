import React from 'react';

import Header from './../components/Header.js';

import './NotFound.scss';

const NotFound = ( {location} ) => {
    return (
        <main id="not-found">
            <Header />
            <div className="not-found-container">
                <span class="error-code">404</span>
                <span class="divider">|</span>
                <span class="message">Not Found</span>
            </div>
        </main>
    )
}

export default NotFound;