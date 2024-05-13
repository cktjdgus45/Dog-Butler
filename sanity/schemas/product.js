/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'lprice',
            title: 'Lowest Price',
            type: 'number'
        },
        {
            name: 'hprice',
            title: 'Highest Price',
            type: 'number',
            validation: Rule => Rule.min(0) // 가격은 0 이상이어야 함
        },
        {
            name: 'mallName',
            title: 'Mall Name',
            type: 'string'
        },
        {
            name: 'productId',
            title: 'Product ID',
            type: 'string'
        },
        {
            name: 'productType',
            title: 'Product Type',
            type: 'string'
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'string'
        },
        {
            name: 'maker',
            title: 'Maker',
            type: 'string'
        },
        {
            name: 'category1',
            title: 'Category 1',
            type: 'string'
        },
        {
            name: 'category2',
            title: 'Category 2',
            type: 'string'
        },
        {
            name: 'category3',
            title: 'Category 3',
            type: 'string'
        },
        {
            name: 'category4',
            title: 'Category 4',
            type: 'string'
        }
    ]
}
