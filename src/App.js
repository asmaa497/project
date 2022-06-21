import logo from './logo.svg';
import './App.css';
import Products from './pages/products/products';
import Login from './pages/login/login';
import Details from './pages/products/details';
import Header from './pages/header/header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/login/home/home';
function App() {
  return (
    <>
      <Router>
    <div style={{position:'sticky',top:'0',width:'100%',zIndex:'1'}}>
          <Header />
          </div>
      <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/details/:id" exact component={Details} />
          </Switch>
      </div>
      </Router>

    </>
  );
}

export default App;
