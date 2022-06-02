import { Button, Col, Container, Row } from "react-bootstrap";
import InsertBookForm from "@/components/insert-book-form";
import ListBookCard from "@/components/list-book-card";
import { useDispatch } from "react-redux";
import bookSlice from "./store/slices/book";

function App() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="mt-3">
        <Col sm={12} lg={4}>
          <h1>Bookist</h1>
          <InsertBookForm />
          {/* Click refresh multiple time to see ListBookCard is rerender */}
          <Button
            className="w-100 mt-3"
            onClick={() => dispatch(bookSlice.actions.refresh())}
          >
            Refresh
          </Button>
        </Col>
        <Col sm={12} lg={8} className="mt-3 mt-lg-0">
          <ListBookCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
