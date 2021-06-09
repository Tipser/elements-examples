import * as React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {Content} from "../../components/Content";
import {ProductTile} from "../../components/ProductTile/ProductTile";

const PRODUCT_ID = '5ea772ad536e9f0001357ecb';

export const CustomProductTileView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Custom product tile </h2>
                <ProductTile productId={PRODUCT_ID} size="small" />
            </Content>
            <Footer />
        </>
    );
};
