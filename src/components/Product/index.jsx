import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Product({product}) {
  return (
    <Card style={{ width: '18rem', margin: '8px 0' }}>
      <Card.Img variant="top" src={product.image} alt={product.alt} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>R$ {product.price}</Card.Text>
        <Button variant="primary">Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
}