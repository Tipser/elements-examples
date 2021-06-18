import React, {useEffect, useState, useCallback} from 'react';

import styles from './ProductTile.module.css';
import {useInternalFunctions, useTipserContext} from "@tipser/tipser-elements";

function useProduct(productId) {
    const {posId, tipserApiUrl} = useTipserContext();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (product && product.id === productId) {
            return;
        }
        fetch(`${tipserApiUrl}/v4/products/${productId}?pos=${posId}`).then((result) => {
            if (result.ok) {
                result.json().then(setProduct)
            }
        })
    }, [product, productId, setProduct, posId, tipserApiUrl]);
    return product;
}

function useOnClick(productId) {
    const {goToProduct} = useInternalFunctions()
    return useCallback(() => goToProduct(productId), [goToProduct, productId]);
}

export const ProductTile = ({productId}) => {
    const product = useProduct(productId);
    const handleClick = useOnClick(productId);
    if (!product) {
        return null;
    }
    const price = product.discountPriceIncVat || product.priceIncVat;
    return (
        <div className={styles.item}>
            <div className={styles.imageContainer}>
                <img src={product.images[0]['250x']} className={styles.image}/>
            </div>
            <div className={styles.footer}>
                <div className={styles.details}>
                    <p className={styles.brand}>{product.brand.toLowerCase()}</p>
                    <p className={styles.title}>{product.title.toLowerCase()}</p>
                    <p className={styles.price}>{price.formatted}</p>
                </div>
                <button className={styles.button} onClick={handleClick}>Buy</button>
            </div>
        </div>
    );
}
