import * as React from 'react';
import { ProductPage } from '@tipser/tipser-elements';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';

const PRODUCT_ID = '6058d994497db9d288980d45';

export const ProductPageView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Product page</h2>
                <ProductPage productId={PRODUCT_ID} />
            </Content>
            <Footer />
        </>
    );
};
