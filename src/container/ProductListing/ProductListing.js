import React from 'react'
import ProductList from './ProductList/ProductList';
// import MultiSelectFilter from './MultiSelectFilter/MultiSelectFilter'
import Paging from './Paging/Paging'
import Footer from '../../components/Navigation/Footer/Footer';

const ProductListing = () => {
    return (
        <div>
            {/* <MultiSelectFilter/> */}
            <ProductList/>
            <Paging/>
            <Footer/>
        </div>
    )
}


export default ProductListing;