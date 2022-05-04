import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./components/homescreen/Homescreen";
import { Container } from "react-bootstrap";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProductScrean from "./components/product/ProductScrean";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
            <h4>E commerce app</h4>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/products/:id" element={<ProductScrean/>} />
            </Routes>
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;