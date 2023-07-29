import React, {useState, useEffect} from "react";

import ListGroup from 'react-bootstrap/ListGroup';
import { CartItem } from "../CartItem";

export const CartList = ({ cart, setCart })=>{
    const [total, setTotal] = useState(0);

    useEffect(()=>{
      setTotal(
        cart
          .map(item => parseFloat(item.price) * item.quantity)
          .reduce((acc, cur)=> acc + cur, 0)
          .toFixed(2)
      );
    });
    return(
        <ListGroup>
            {
                cart.map(item =>
                    <ListGroup.Item key={ item.id }>
                        <CartItem item={ item } setCart={ setCart }/>
                    </ListGroup.Item>
                )
            }
            <ListGroup.Item>
                <p style={{ textAlign: 'right', margin: '0' }}>Total: R$ { total }</p>
            </ListGroup.Item>
        </ListGroup>
    );
}