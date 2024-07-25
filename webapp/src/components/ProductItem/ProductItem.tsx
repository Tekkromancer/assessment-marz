import React from 'react';
import { Product } from '../interfaces';

const ProductItem = ({
  ProductID,
  ProductName,
  ProductPhotoURL
}: Product) => (
  <div
    className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full flex items-center justify-center shadow-lg'
    data-testid={`productItem-${ProductID}`}
  >
    {(() => {
      return (
        <div
          className='flex flex-col h-[200px] w-[200px] justify-between'
        >
          <div
            className='flex flex-col w-full h-[150px] justify-center'
          >
            <img
              src={ProductPhotoURL}
              className="h-[100%] w-auto mix-blend-multiply"
            />
          </div>
          <div className="text-center">{ProductName}</div>
        </div>
      );
    })()}
  </div>
);

export default ProductItem;