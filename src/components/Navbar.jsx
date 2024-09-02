import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatNumber } from "../scripts";

function NavbarApp() {
  const total = 25000;
  const token = true;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand >Pizzería Mamma Mia!</Navbar.Brand>
          <Button className="btn-sm" variant="outline-light" >
            🍕Home
          </Button>
          {token ? (
            <>
              <Button
                className="btn-sm"
                variant="outline-light"
                href="#profile"
              >
                🔓Profile
              </Button>
              <Button className="btn-sm" variant="outline-light" href="#Logout">
                🔒Logout
              </Button>
            </>
          ) : (
            <>
              <Button className="btn-sm" variant="outline-light" href="#Login">
                🔐Login
              </Button>
              <Button
                className="btn-sm"
                variant="outline-light"
                href="#register"
              >
                🔐Register
              </Button>
            </>
          )}
        </Nav>
        {token && (
          <Button className="btn-sm" variant="outline-info" href="#total">
            🛒Total: {formatNumber(total)}
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
