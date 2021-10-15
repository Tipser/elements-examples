import * as React from 'react';
import {Collection, ProductList} from '@tipser/tipser-elements';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';

const COLLECTION_ID = '5e7881786bcc5f00010dc658';

export const CollectionView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Collection</h2>
                <Collection collectionId={COLLECTION_ID} />

                <h2 className="heading">Product list</h2>
                <ProductList productIds={["5ea772ad536e9f0001357ecb", "5e8fb70a39dd2a0001c3eea4"]} />
            </Content>
            <Footer />
        </>
    );
};
