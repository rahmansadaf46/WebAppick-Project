import { useState } from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";

const CustomNavbar = () => {
  const [menu, setMenu] = useState("Home");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#245D51" }}
        expand="lg"
        className="d-none d-lg-flex justify-content-between p-3"
      >
        <div>
          <Navbar.Brand className="ps-5" href="#home">
            <b style={{ color: "white" }}>
              Skill <span style={{ color: "#CB8461" }}>Shoot</span>
            </b>
          </Navbar.Brand>
        </div>
        <div>
          <Nav
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="ml-auto"
          >
            <Nav.Link
              style={{ color: menu === "Home" ? "white" : "#A7BFB9" }}
              className="mx-3"
              href="#Home"
              onClick={() => setMenu("Home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: menu === "Course" ? "white" : "#A7BFB9" }}
              className="mx-3"
              href="#Course"
              onClick={() => setMenu("Course")}
            >
              Course
            </Nav.Link>
            <Nav.Link
              style={{ color: menu === "Subscribe" ? "white" : "#A7BFB9" }}
              className="mx-3"
              href="#Subscribe"
              onClick={() => setMenu("Subscribe")}
            >
              Subscribe
            </Nav.Link>

            <Nav.Link
              style={{ color: menu === "About" ? "white" : "#A7BFB9" }}
              className="mx-3"
              href="#About"
              onClick={() => setMenu("About")}
            >
              About
            </Nav.Link>
            <Nav.Link
              style={{ color: menu === "Testimonial" ? "white" : "#A7BFB9" }}
              className="mx-3"
              href="#Testimonial"
              onClick={() => setMenu("Testimonial")}
            >
              Testimonial
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="ml-auto"
          >
            <Nav.Link style={{ color: "white" }} href="#Login">
              Login
            </Nav.Link>

            <Button
              style={{
                color: "white",
                backgroundColor: "#CB8461",
                border: "none",
              }}
              className="mx-3 px-5"
              href="#register"
            >
              Register
            </Button>
          </Nav>
        </div>
      </Navbar>

      <Navbar
        style={{ backgroundColor: "#245D51", zIndex: 10 }}
        expand={false}
        className="d-lg-none"
      >
        <Navbar.Brand className="ps-5" href="#home">
          <b style={{ color: "white" }}>
            Skill <span style={{ color: "#CB8461" }}>Shoot</span>
          </b>
        </Navbar.Brand>
        <div className="me-3 text-white" onClick={handleShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-microsoft"
            viewBox="0 0 16 16"
          >
            <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
          </svg>
        </div>
      </Navbar>
              
      <Offcanvas
        style={{ backgroundColor: "#245D51" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <b className="ms-4" style={{ color: "white" }}>
              Skill <span style={{ color: "#CB8461" }}>Shoot</span>
            </b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ fontFamily: "Poppins, sans-serif" }}>
          <Nav className="text-center flex-grow-1">
            <Nav.Link
              style={{ color: menu === "Home" ? "white" : "#A7BFB9" }}
              href="#Home"
              className="w-100"
              onClick={() => {
                handleClose();
                setMenu("Home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="w-100"
              style={{ color: menu === "Course" ? "white" : "#A7BFB9" }}
              href="#Course"
              onClick={() => {
                handleClose();
                setMenu("Course");
              }}
            >
              Course
            </Nav.Link>
            <Nav.Link
              className="w-100"
              style={{ color: menu === "Subscribe" ? "white" : "#A7BFB9" }}
              href="#Subscribe"
              onClick={() => {
                handleClose();
                setMenu("Subscribe");
              }}
            >
              Subscribe
            </Nav.Link>

            <Nav.Link
              className="w-100"
              style={{ color: menu === "About" ? "white" : "#A7BFB9" }}
              href="#About"
              onClick={() => {
                handleClose();
                setMenu("About");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="w-100"
              style={{ color: menu === "Testimonial" ? "white" : "#A7BFB9" }}
              href="#Testimonial"
              onClick={() => {
                handleClose();
                setMenu("Testimonial");
              }}
            >
              Testimonial
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleClose();
              }}
              style={{ color: "white" }}
              href="#Login"
              className="w-100"
            >
              Login
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleClose();
              }}
              className="w-100"
            >
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#CB8461",
                  border: "none",
                }}
                className="mx-3 px-5"
                href="#register"
              >
                Register
              </Button>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
