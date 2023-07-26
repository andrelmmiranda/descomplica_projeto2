import styles from './styles.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

export function Cart(){
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("db")));
  }, []) 

  return(
    <section id="cart">
      <Container className={styles.main}>
        <h3 className={styles.title}>Carrinho</h3>
        <Row>
          {/* {lista.map(i => <Col key={i.id}><Product product={i}/></Col>)} */}
          {cart.length === 0 && <p>Carrinho está vazio</p>}
        </Row>
      </Container>
    </section>
  )
}