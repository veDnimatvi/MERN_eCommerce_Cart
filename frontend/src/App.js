import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeScreen from './screen/HomeScreen';
import CartScreen from './screen/CartScreen';
import ProductScreen from './screen/ProductScreen';
import Navbar from './components/Navbar';
import BackDrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <BackDrop show={sideToggle} click={() => setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      {/* SideDrawer */}
      {/* Backdrop */}
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
