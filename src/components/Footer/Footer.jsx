// Import dependencies
import React from "react";

// Import Styles
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../../styles/Footer.css";

// Import images
import Logo from "../../assets/img/Logo.svg";
import LogoWirkiSoft from "../../assets/img/Logo-WirkiSoft.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>

              <p className="logo__text">
                Somos una tienda de venta de productos eróticos. Nos encontramos
                en la ciudad de Bogotá D.C.
              </p>
            </Col>

            <Col lg="4" md="4" sm="6">
              <h5 className="footer__title">Horario de Atención</h5>

              <ListGroup className="opening__time-list">
                <ListGroupItem className="opening__time-item border-0 ps-0">
                  <span>Lunes a Viernes:</span>

                  <p>09:00 am - 09:00 pm</p>
                </ListGroupItem>

                <ListGroupItem className="opening__time-item border-0 ps-0">
                  <span>Sábados:</span>

                  <p>10:00 am - 08:00 pm</p>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="4" md="4" sm="6">
              <h5 className="footer__title">Contacto</h5>

              <ListGroup className="opening__time-list">
                <ListGroupItem className="opening__time-item border-0 ps-0">
                  <span>Correo Electrónico:</span>

                  <p>ventas-fantasy@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem className="opening__time-item border-0 ps-0">
                  <span>Número de Contacto:</span>

                  <p>320 251 0584</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="copyright">
        <Container>
          <Row>
            <p>Copyright 2022.</p>

            <p>Todos los derechos reservados.</p>

            <div className="logo logo-wirkisoft">
              <a
                href="https://wirkisoft.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LogoWirkiSoft} alt="Logo" />
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
