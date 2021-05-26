import * as React from 'react';
import {Store} from '@tipser/tipser-elements';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';

export const StoreView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Store</h2>
                <Store />
            </Content>
            <Footer />
        </>
    );
};
