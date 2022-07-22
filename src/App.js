import "./App.css";
import Home from "./pages/Home";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Item from "./pages/Item";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Womens" component={Womens} />
        <Route exact path="/Mens" component={Mens} />
        <Route exact path="/Jewelery" component={Jewelery} />
        <Route exact path="/Electronics" component={Electronics} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route
          exact
          path="/Item/:id"
          component={(props) => <Item {...props} />}
        />
        <Route
          exact
          path="/Product/:id"
          component={(props) => <Product {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;
