import React from 'react';

import './Content.css';

export const Content = ({ children }) => {
    return (
        <main className="main-content">
            {children}
        </main>
    )
}
