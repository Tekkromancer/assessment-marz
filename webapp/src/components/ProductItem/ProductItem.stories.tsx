import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { DraggableProvided } from 'react-beautiful-dnd';
import { Order } from '../interfaces';
import ProductItem from './ProductItem';

export default {
    title: 'Product Item',
    component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

const getArgs = () => ({
    ProductID: 1234,
    ProductName: "Shoes",
    ProductPhotoURL: "https://litb-cgis.rightinthebox.com/images/640x640/202212/bps/product/inc/hqakbi1670911937545.jpg",
});

export const ProductWidget = Template.bind({});
ProductWidget.args = getArgs();
