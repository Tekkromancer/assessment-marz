import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import { ACTIVE_PRODUCTS_URL } from "../ApiHelper";

export default {
    title: 'Products Page',
    component: ProductsPage,
    decorators: [(Story) => (<MemoryRouter><Story /></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: ACTIVE_PRODUCTS_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [
                    {
                        "ProductID": 1,
                        "ProductName": "Test Hat",
                        "ProductPhotoURL": "https://m.media-amazon.com/images/I/81WgMcwuyUL._AC_UY350_.jpg",
                        "ProductStatus": "Active"
                    },
                    {
                        "ProductID": 2,
                        "ProductName": "Test Shoes",
                        "ProductPhotoURL": "https://litb-cgis.rightinthebox.com/images/640x640/202212/bps/product/inc/hqakbi1670911937545.jpg",
                        "ProductStatus": "Active"
                    },
                    {
                        "ProductID": 3,
                        "ProductName": "Test Pants",
                        "ProductPhotoURL": "https://i5.walmartimages.com/seo/Mens-Medieval-Capri-Pants-Vintage-Banded-Pirate-Pants-Navigator-Renaissance-Costume-Elastic-Waist-Below-Knee-Shorts_170ab53f-8ce4-46da-8ce1-ffddd7ea6b80.bf28bf094c9b41829f5e5e124b9d00cc.jpeg?odnHeight=768&odnWidth=768&odnB",
                        "ProductStatus": "Active"
                    }
                ],
                message: ""
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: ACTIVE_PRODUCTS_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: ACTIVE_PRODUCTS_URL,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        },
    ],
};
