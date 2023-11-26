import React from 'react';
import HomeBanner from './components/HomeBanner';
import Container from './components/Container';
import { products } from '../../utils/Products';
import { truncateText } from '../../utils/truncateText';
import ProductCard from './components/products/ProductCard';


const page = () => {
  return (<div className="p-8">
    <Container>
      <div>
        <HomeBanner />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {products.map((product: any) => {
          return <ProductCard data={product}/>
        } )}
      </div>
    </Container>
    </div>
  )
}

export default page