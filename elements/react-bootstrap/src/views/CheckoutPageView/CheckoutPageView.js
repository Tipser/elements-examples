import * as React from 'react';
import {CheckoutPage} from '@tipser/tipser-elements';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';

export const CheckoutPageView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Checkout page</h2>
                <CheckoutPage />
            </Content>
            <Footer />
        </>
    );
};
