import { Col, Container, Row } from "react-bootstrap";
import InsertBookForm from "@/components/insert-book-form";
import ListBookCard from "@/components/list-book-card";

function App() {
  return (
    <Container>
      <Row className="mt-3">
        <Col sm={12} lg={4}>
          <h1>Bookist</h1>
          <InsertBookForm />
        </Col>
        <Col sm={12} lg={8} className="mt-3 mt-lg-0">
          <ListBookCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
