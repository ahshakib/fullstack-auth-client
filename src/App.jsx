import { Col, Container, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import AuthComponent from "./AuthComponent";
import FreeComponent from "./FreeComponent";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication</h1>
          <section id="navigation">
            <Link to="/">Home</Link>
            <Link to="/free">Free Component</Link>
            <Link to="/auth">Auth Component</Link>
          </section>
        </Col>
      </Row>

      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/auth" element={<AuthComponent />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
