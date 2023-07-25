import styles from './styles.module.css';
import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Text href="#"><Link to="/"><h3>Loja Online</h3></Link></Navbar.Text>
        <Link to="/cart">
          <span className={styles.badge}>
            <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
            <p className={styles.numberOfElements}>0</p>
          </span>
        </Link>
      </Container>
    </Navbar>
  );
}