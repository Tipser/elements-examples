import * as React from 'react';
import { Carousel } from '@tipser/tipser-elements';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';

export const CarouselView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Collection carousel</h2>
                <Carousel collectionId="5f675d6a05c9dc00013bfb48" />

                <h2 className="heading">Product list carousel</h2>
                <Carousel productIds={["5ea772ad536e9f0001357ecb", "5e8fb70a39dd2a0001c3eea4"]} />
            </Content>
            <Footer />
        </>
    );
};
