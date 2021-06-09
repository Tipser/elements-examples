import React from 'react';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';
import {Collection} from "../../components/Collection/Collection";

const COLLECTION_ID = '5f675d6a05c9dc00013bfb48';

export const CustomCollectionView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Collection</h2>
                <Collection collectionId={COLLECTION_ID} />
            </Content>
            <Footer />
        </>
    );
};
