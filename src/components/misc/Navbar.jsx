import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t } = useTranslation()
  return (
    <>
      <Navbar key="md" bg="light" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Go Up</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} style={{ border: "none" }} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
            style={{ maxWidth: "13rem" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Go Up
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">{t('navbar.home')}</Nav.Link>
                <Nav.Link href="#action2">{t('navbar.about')}</Nav.Link>
                <Nav.Link href="#action2">{t('navbar.contact')}</Nav.Link>
              </Nav>
            </Offcanvas.Body>
            <Offcanvas.Header>
             INFO
            </Offcanvas.Header>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;