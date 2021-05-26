import * as React from 'react';
import { ProductTile } from '@tipser/tipser-elements';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {Content} from "../../components/Content";

const PRODUCT_ID = '5ea772ad536e9f0001357ecb';

export const ProductTileView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Small product tile </h2>
                <ProductTile productId={PRODUCT_ID} size="small" />

                <h2 className="heading">Medium product tile</h2>
                <ProductTile productId={PRODUCT_ID} size="medium" />

                <h2 className="heading">Large product tile</h2>
                <ProductTile productId={PRODUCT_ID} size="large" />

                <h2 className="heading">Small horizontal product tile </h2>
                <ProductTile productId={PRODUCT_ID} size="small" orientation="horizontal" />

                <h2 className="heading">Medium horizontal product tile</h2>
                <ProductTile productId={PRODUCT_ID} size="medium" orientation="horizontal" />

                <h2 className="heading">Large horizontal product tile</h2>
                <ProductTile productId={PRODUCT_ID} size="large" orientation="horizontal" />
            </Content>
            <Footer />
        </>
    );
};
