import styles from './Cart.module.css'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { removeItem, increment, decrement, selectItems, CartItem } from './cartSlice'

function getTotal(items: CartItem[]): string {
  let total = 0;
  
  items.forEach(item => {
    total += item.quantity * item.price
  })

  return total.toFixed(2)
}

const Cart = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);

  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
      {items.map((item: any) => {
        return (
          <div className={styles.cartItem}>
            <span className={styles.name}>{item.name}</span> 
            <span className={styles.price}>{item.price.toFixed(2)}</span>
            <div className={styles.buttons}> 
              <button onClick={() => dispatch(increment(item.name))}>+</button>
              <span>{"     "}{item.quantity}{"      "}</span>
              <button onClick={() => dispatch(decrement(item.name))}>-</button>
              <button onClick={() => dispatch(removeItem(item.name))}>x</button>
            </div>
            <span className={styles.price}>{(item.price * item.quantity).toFixed(2)}</span> 
          </div>
        )
      })}
      </div>
      <span className={styles.total}>
        Total {getTotal(items)}
      </span>
    </div>
  )
}

export default Cart