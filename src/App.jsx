import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Button,
  Card,
} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row className="mt-3">
        <Col sm={12} lg={4}>
          <h1>Bookist</h1>
          <Form>
            <Form.Group className="mb-3" controlId="textInput">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="authorInput">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Enter Author" />
            </Form.Group>
            <Button variant="primary" className="w-100">
              Insert Book
            </Button>
          </Form>
        </Col>
        <Col sm={12} lg={8} className="mt-3 mt-lg-0">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>How to learn Redux</Card.Title>
              <Card.Text
                className="fst-italic"
                style={{
                  color: "#B1B1B1",
                }}
              >
                Albert
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex">
              <Button variant="danger" className="ms-auto">
                Delete
              </Button>
              <Button variant="primary" className="ms-2">
                Update
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
