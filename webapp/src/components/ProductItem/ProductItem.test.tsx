import React from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { create, ReactTestRenderer } from 'react-test-renderer';
import ProductItem from './ProductItem';

describe('ProductItem', () => {
  let tree: ReactTestRenderer;
  const ID = '1234';
  beforeEach(() => {
    const props = {
      ProductID: 1234,
      ProductName: "Shoes",
      ProductPhotoURL: "https://litb-cgis.rightinthebox.com/images/640x640/202212/bps/product/inc/hqakbi1670911937545.jpg",
    };
    tree = create(<ProductItem {...props} />);
  });
  afterEach(() => {
    tree.unmount();
  });
  it('rendersProductItem', async () => {
    const testInstance = tree.root;
    await testInstance.findByProps({ 'data-testid': `productItem-${ID}` });
  });
});