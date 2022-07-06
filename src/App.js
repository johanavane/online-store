import "./App.css";
import Products from "./pages/Products";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/Womens" exact component={Womens} />
          <Route path="/Mens" exact component={Mens} />
          <Route path="/Jewelery" exact component={Jewelery} />
          <Route path="/Electronics" exact component={Electronics} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
