import React from 'react';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';
import {Collection} from "../../components/Collection/Collection";

const COLLECTION_ID = '5e7881786bcc5f00010dc658';

export const CustomCollectionView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Custom collection</h2>
                <Collection collectionId={COLLECTION_ID} />
            </Content>
            <Footer />
        </>
    );
};
