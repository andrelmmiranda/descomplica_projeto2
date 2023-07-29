import React, { useState } from "react";
import style from './style.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const CartItem = ({ item, setCart })=>{
  const [input,setInput] = useState(item.quantity);

  const handleChange = (e)=>{
    const { value } = e.target;

    const db = JSON.parse(localStorage.getItem('db'));

    const index = db.findIndex(el => el.id === item.id);

    db[index].quantity = Number(value);

    localStorage.removeItem('db');

    localStorage.setItem('db', JSON.stringify(db));

    setCart(db);

    setInput(value);
  }

  const handleDelete = (e)=>{
    e.preventDefault();

    const db = JSON.parse(localStorage.getItem('db'));

    const index = db.findIndex(el => el.id === item.id);

    db.splice(index, 1);

    localStorage.removeItem('db');

    localStorage.setItem('db', JSON.stringify(db));

    setCart(db);
  }

  return(
      <Card className={ style.card }>
        <Row>
          <Col>
            <Card.Img className={ style.card_image } variant="top" src={ item.image } />
          </Col>
          <Col xs={4}>
            <Card.Body>
              <Card.Title>{ item.name }</Card.Title>  
              <Card.Text>{ item.description }</Card.Text>
            </Card.Body>
          </Col>
          <Col>R$ { item.price }</Col>
          <Col>
            <input type="number" onChange={ (e)=> handleChange(e) } value={ input } min={1}/>
          </Col>
          <Col>
            <button onClick={ (e)=> handleDelete(e) }>
              <FontAwesomeIcon icon={ faTrash } />
            </button>
          </Col>
        </Row>
      </Card>
  );
}