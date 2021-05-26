import * as React from 'react';
import {CartPage} from '@tipser/tipser-elements';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';

export const CartPageView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Cart page</h2>
                <CartPage />
            </Content>
            <Footer />
        </>
    );
};
