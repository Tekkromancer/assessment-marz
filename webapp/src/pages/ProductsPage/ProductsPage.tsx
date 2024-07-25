import React, { useEffect, useState } from "react";
import { Product } from "../../components/interfaces";

import PageWrapper from '../PageWrapper';
import ProductItem from '../../components/ProductItem/ProductItem';
import { getActiveProducts } from '../ApiHelper';
import Spinner from '../../components/Spinner/Spinner';

const DATA_STATES = {
  waiting: 'WAITING',
  loaded: 'LOADED',
  error: 'ERROR'
};

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState([] as Product[]);

  const getProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { products, errorOccured } = await getActiveProducts();
    setData(products);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request

      SDG: This seems to conflict with the instructions in  README.md.
  */

  useEffect(() => {
    getProducts();
  }, []);


  let content;
  if (loadingState === DATA_STATES.waiting) {
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  } else if (loadingState === DATA_STATES.loaded) {
    content = (
      <div data-testid="products-container">
        <h1 className="text-3xl font-bold text-white mb-[50px]">
          Products
        </h1>
        <div className="flex flex-wrap gap-4">
          {data.length === 0 && (
            <h2>No products to display</h2>
          )}
          {data && data.map((item) => (
            <div key={item.ProductID} className="w-1/4" >
              <ProductItem {...item} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );
  }

  return (
    <PageWrapper>
      {content}
    </PageWrapper>
  );
};

export default ProductsPage;
