import React, { Component } from 'react';
import { TipserElementsProvider, TipserEnv, TipserLang } from '@tipser/tipser-elements';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ProductTileView } from './views/ProductTileView';
import {ProductListingView} from "./views/ProductListingView";
import {ProductPageView} from "./views/ProductPageView";
import {CollectionView} from "./views/CollectionView";
import {CarouselView} from "./views/CarouselView";
import {CartPageView} from "./views/CartPageView";
import {CheckoutPageView} from "./views/CheckoutPageView";
import {StoreView} from "./views/StoreView";

import '@tipser/tipser-elements/dist/index.css';
import './App.css';


const hashHistory = createBrowserHistory();

let tipserConfig = {
  lang: TipserLang.enUS,
  env: TipserEnv.stage,
  primaryColor: '#000000',
  eventsHandlers: {
    onError: error => {
      console.log(error);
    },
    onAddToCart: ({ cartSize, product }) => {
      console.log('Hurray, you have added item to cart. ', product);
      console.log('Your cart size is now. ', cartSize);
    },
  },
};

class App extends Component {
  render() {
    return (
        <TipserElementsProvider posId={'59e86b79b8f3f60a94ecd26a'} config={tipserConfig}>
          <Router history={hashHistory}>
            <Switch>
              <Route path="/product-tile" component={ProductTileView} />
              <Route path="/product-listing" component={ProductListingView} />
              <Route path="/product-page" component={ProductPageView} />
              <Route path="/collection" component={CollectionView} />
              <Route path="/carousel" component={CarouselView} />
              <Route path="/store" component={StoreView} />
              <Route path="/cart-page" component={CartPageView} />
              <Route path="/checkout-page" component={CheckoutPageView} />
              <Redirect path="/" to="/product-tile" />
            </Switch>
          </Router>
        </TipserElementsProvider>
    );
  }
}

export default App;
