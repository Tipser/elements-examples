import * as React from 'react';
import {Link} from 'react-router-dom';
import {CartIcon} from '@tipser/tipser-elements';

import logo from '../../logo.svg';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <Link className="te-logo" to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <ul className="horizontal-menu">
                    <li className="horizontal-item">
                        <Link to="/product-tile">Product tile</Link>
                    </li>
                    <li className="horizontal-item">
                        <Link to="/collection">Collection</Link>
                    </li>
                    <li className="horizontal-item">
                        <Link to="/store">Store</Link>
                    </li>
                    <li className="horizontal-item">
                        <Link to="/cart-page">Cart page</Link>
                    </li>
                    <li className="horizontal-item">
                        <Link to="/checkout-page">Checkout page</Link>
                    </li>
                    <li className="horizontal-item">
                        <a
                            className="link"
                            href="https://tipser.readme.io/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Documentation
                        </a>
                    </li>
                    <li className="horizontal-item">
                        <a
                            className="link"
                            href="https://github.com/Tipser/elements-examples"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub repo
                        </a>
                    </li>
                </ul>
                <div>
                    <CartIcon/>
                </div>
            </nav>
        </header>
    );
}
