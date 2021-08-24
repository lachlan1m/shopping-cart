import styles from './ProductList.module.css';

import { addItem } from '../cart/cartSlice'
import { useAppDispatch } from '../../app/hooks';

interface Product { 
  name: string;
  price: number; 
} 

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.productList}>
      {products.map(({name, price}) => (
          <div className={styles.product}>
            <div>{name}</div>
            <div>${price.toFixed(2)}</div>
            <div>
              <button
                onClick={() => dispatch(addItem({name:name, price:price, quantity:1}))}
              >
              Add to Cart
              </button>
            </div>
          </div> 
      ))} 
    </div>
  )
}

export default ProductList;