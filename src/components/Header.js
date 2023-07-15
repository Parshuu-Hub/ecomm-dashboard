import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const user = JSON.parse(localStorage.getItem("user-info"));
  // console.log(user);
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_links">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/">Product List</Link>
                <Link to="/add">Add</Link>
                <Link to={"/update"}>Update</Link>
              </>
            ) : (
              <>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </>
  );
};
