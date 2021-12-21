// import uuid for made fake id
import { v4 as uuidu4 } from 'uuid';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

let productsData = [
    {
        id: uuidu4(),
        productImage: img1,
        productName: 'Denim T-Shirt',
        productRef: 'Ref. 00712464',
        productColor: 'Blue',
        count: 2,
        price: 20
    },
    {
        id: uuidu4(),
        productImage: img2,
        productName: 'Denim T-Shirt',
        productRef: 'Ref. 00712464',
        productColor: 'Blue',
        count: 1,
        price: 30
    },
    {
        id: uuidu4(),
        productImage: img3,
        productName: 'Denim T-Shirt',
        productRef: 'Ref. 00711464',
        productColor: 'Blue',
        count: 1,
        price: 10
    },
    {
        id: uuidu4(),
        productImage: img1,
        productName: 'Denim T-Shirt',
        productRef: 'Ref. 00711464',
        productColor: 'Blue',
        count: 1,
        price: 40
    },
]

export default productsData;