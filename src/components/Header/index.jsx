import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <span className={styles.badge}>
          <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
          <p className={styles.numberOfElements}>0</p>
        </span>
      </Container>
    </Navbar>
  );
}