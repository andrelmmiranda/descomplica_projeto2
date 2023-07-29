import styles from './styles.module.css';
import Container from 'react-bootstrap/Container';

import { CartList } from '../CartList';

export function Cart({ cart, setCart }){
  return(
    <section id="cart">
      <Container className={styles.main}>
        <h3 className={styles.title}>Carrinho</h3>
        {
          cart.length === 0 ? 
            <p>Carrinho está vazio!</p> :
            <CartList cart={ cart } setCart={ setCart }/> 
        }
      </Container>
    </section>
  )
}