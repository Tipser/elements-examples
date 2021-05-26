import * as React from 'react';
import { ProductListing } from '@tipser/tipser-elements';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';

const PRODUCT_ID = '5ea772ad536e9f0001357ecb';

export const ProductListingView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Product listing </h2>
                <ProductListing productId={PRODUCT_ID} />
            </Content>
            <Footer />
        </>
    );
};
