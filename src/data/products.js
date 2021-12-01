// import uuid for made fake id
import { v4 as uuidu4 } from 'uuid';

let productsData = [
    {
        id: uuidu4(),
        productImage: 'https://becomestar.files.wordpress.com/2016/03/jas_2.jpg',
        productName: 'Denim T-Shirt',
        productRef: 'Ref. 00712464',
        productColor: 'Blue',
        count: 2,
        price: 20
    },
    {
        id: uuidu4(),
        productImage: 'https://becomestar.files.wordpress.com/2016/03/jas_2.jpg',
        productName: 'Denim T-Shirt',
        productRef: 'Ref. 00712464',
        productColor: 'Blue',
        count: 1,
        price: 30
    },
    {
        id: uuidu4(),
        productImage: 'https://becomestar.files.wordpress.com/2016/03/jas_2.jpg',
        productName: 'Denim T-Shirt',
        productRef: 'Ref. 00711464',
        productColor: 'Blue',
        count: 1,
        price: 10
    },
    {
        id: uuidu4(),
        productImage: 'https://becomestar.files.wordpress.com/2016/03/jas_2.jpg',
        productName: 'Denim T-Shirt',
        productRef: 'Ref. 00711464',
        productColor: 'Blue',
        count: 1,
        price: 40
    },
]

export default productsData;