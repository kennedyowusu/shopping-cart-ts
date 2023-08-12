import { data } from '../data/data'
import Product from '../components/Product'

const ProductContainer = () => {
  return (
    <div className='section grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {data.map((datum) => (
        <div className='card' key={datum.id}>
          <Product key={datum.id} {...datum} />
        </div>
      ))}
    </div>
  )
}

export default ProductContainer
