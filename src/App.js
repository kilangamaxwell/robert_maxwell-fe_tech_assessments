import "./App.css";
import NavBarCom from "./components/NavBarCom";
import Products from "./components/Products";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBarCom />
      <Container>
        <Products />
      </Container>
    </div>
  );
}

export default App;
