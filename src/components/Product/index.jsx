import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productList } from '../../products/productList';

export function Product({product, setCart}) {
  function teste(e){
    const id = Number(e.target.id);

    let db = JSON.parse(localStorage.getItem('db'));

    const dbProduct = db.find(item => item.id === id);

    if(dbProduct === undefined){
      const product = productList.find(item => item.id === id);
      product.quantity = 1;
      db.push(product);
    } else if(dbProduct.id === id){
      dbProduct.quantity += 1;
      const tempDb = db;
      db = [];
      db.push(...tempDb);
    }
    setCart(db);

    localStorage.setItem('db', JSON.stringify(db));
  }


  return (
    <Card style={{ width: '18rem', margin: '8px 0' }}>
      <Card.Img variant="top" src={ product.image } alt={ product.alt } />
      <Card.Body>
        <Card.Title>{ product.name }</Card.Title>
        <Card.Text>
          { product.description }
        </Card.Text>
        <Card.Text>R$ { product.price }</Card.Text>
        <Button id={ product.id } onClick={ (e)=> teste(e) } variant="primary">Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
}