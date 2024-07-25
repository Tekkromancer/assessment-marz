import React, { useState } from "react";
import { Product, ProductData } from "../../components/interfaces";


import PageWrapper from '../PageWrapper';

const DATA_STATES = {
  waiting: 'WAITING',
  loaded: 'LOADED',
  error: 'ERROR'
};

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState({ Products: [] } as ProductData);

  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request

      SDG: This seems to conflict with the instructions in  README.md.
  */

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-white">
        Product Page Goes Here! XXX
      </h1>
    </PageWrapper>
  );
};

export default ProductsPage;
