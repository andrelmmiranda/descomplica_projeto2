import styles from './styles.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Product } from '../Product';
import { productList } from '../../products/productList';


export function Products({ setCart }){
  return(
    <section id="products">
      <Container className={ styles.main }>
        <h3 className={ styles.title }>Produtos</h3>
        <Row>
          { productList.map(i => <Col key={ i.id }><Product setCart={ setCart } product={ i }/></Col>) }
        </Row>
      </Container>
    </section>
  );
}