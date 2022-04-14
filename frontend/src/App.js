import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./components/homescreen/Homescreen"
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
            <h4>E commerce app</h4>
            <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;