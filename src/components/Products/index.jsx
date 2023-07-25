import styles from './styles.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Product } from '../Product';


export function Products(){
  const lista = [
    {
      id: 1,
      name: 'Telefone Retrô',
      description: 'Telefone Retrô, modelo Castiçal Antigo, com som da campainha antiga.',
      image: 'https://a-static.mlcdn.com.br/450x450/telefone-antigo-retro-castical-em-madeira-e-metal-branco-retro/liskoindustiraecomercioeireli/7586835405/62b72b4aad0dc829814ce28250669307.jpeg',
      alt: 'telefone antigo retro',
      price: '429,00'
    },
    {
      id: 2,
      name: 'Telefone Retrô',
      description: 'Telefone Retrô, modelo Castiçal Antigo, com som da campainha antiga.',
      image: 'https://a-static.mlcdn.com.br/450x450/telefone-antigo-retro-castical-em-metal-turquesa-multitoc/liskoindustiraecomercioeireli/15647838799/748b69e9b232beea36e55037757dc20d.jpeg',
      alt: 'telefone antigo retro',
      price: '399,00'
    },
    {
      id: 3,
      name: 'Telefone Retrô',
      description: 'Telefone Retrô, modelo Castiçal Antigo, com som da campainha antiga.',
      image: 'https://a-static.mlcdn.com.br/450x450/telefone-antigo-retro-castical-em-madeira-e-metal-verde-retro/liskoindustiraecomercioeireli/7586887776/96d441eaec0f26be0bd3435db8a52725.jpeg',
      alt: 'telefone antigo retro',
      price: '329,00'
    },
    {
      id: 4,
      name: 'Telefone Retrô',
      description: 'Telefone Retrô, modelo Castiçal Antigo, com som da campainha antiga.',
      image: 'https://a-static.mlcdn.com.br/450x450/telefone-de-mesa-antigo-castical-1949-retro-versare-anos-dourados/versareanosdourados/1158009/cfe92069ff3aa54acdb459968f34a24a.jpeg',
      alt: 'telefone antigo retro',
      price: '429,00'
    }
  ]

  return(
    <section id="products">
      <Container className={styles.main}>
        <h3 className={styles.title}>Produtos</h3>
        <Row>
          {lista.map(i => <Col key={i.id}><Product product={i}/></Col>)}
        </Row>
      </Container>
    </section>
  )
}