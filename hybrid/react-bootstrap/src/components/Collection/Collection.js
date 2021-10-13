import React, {useState, useEffect} from 'react';
import {useTipserContext} from "@tipser/tipser-elements";
import {ProductTile} from "../ProductTile/ProductTile";

import styles from './Collection.module.css';

function useCollection(collectionId) {
    const {tipserApiUrl} = useTipserContext();
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        if (collection && collection.id === collectionId) {
            return;
        }
        fetch(`${tipserApiUrl}/v4/collections/${collectionId}`).then((result) => {
            if (result.ok) {
                result.json().then(setCollection)
            }
        })
    }, [collection, collectionId, setCollection, tipserApiUrl]);
    return collection;
}

export const Collection = ({collectionId}) => {
    const collection = useCollection(collectionId);

    if (!collection) {
        return null;
    }

    return (
        <div className={styles.items}>
            {collection.items.map((item) => {
                return (
                    <ProductTile productId={item.product.id} />
                )
            })}
        </div>
    )
}
