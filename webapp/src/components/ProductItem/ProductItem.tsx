import React from 'react';
import { Product } from '../interfaces';

const ProductItem = ({
  ProductID,
  ProductName,
  ProductPhotoURL
}: Product) => (
  <div
    className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full flex items-center justify-center'
    data-testid={`productItem-${ProductID}`}
  >
    {(() => {
      return (
        <div
          className='w-full'
        >
          <img src={ProductPhotoURL} width="100%" />
          <div className="text-center">{ProductName}</div>
        </div>
      );
    })()}
  </div>
);

export default ProductItem;