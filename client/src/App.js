import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Rights from '../src/components/Rights';
import Home from './components/Home';
import ProductCard from './components/ProductCard.js';
import ProductScreen from './components/ProductScreen';
import Categories from './components/Categories';
import ProdCategoryScreen from './components/ProdCategoryScreen';
import CreateProductScreen from './components/CreateProductScreen';


function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };


  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">E-commerce</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Crear categoria</a>
            <Link to="/products/create">Cargar producto</Link>
          </div>
        </header>
        <main className="main">
          <Route path="/" exact={true} component={Home} />
          <Route path="/category/:id" component={ProdCategoryScreen} />
          <Route path="/products/:id" component={ProductScreen}/>
          <Route path="/products/create" component={CreateProductScreen}/>
          <Route path="/category/create" component={CreateProductScreen}/>
        </main>
        <aside className="sidebar">
          <h3>Categorias</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <Categories/>
        </aside>
        <footer className="footer">
          <Rights />
        </footer>
      </div>
    </BrowserRouter>
    
    
 // TODO LO QUE ESTA DEBAJO ES LA RAMA MASTER!!!

    /*
import { AllProductsCRUD } from './components/AllProductsCRUD';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from '../src/components/Home';
import Guest from '../src/pages/Guest.js';
import ProductComplete from '../src/pages/ProductComplete.js';
import NotFound from '../src/pages/NotFound.js'
import './App.css';
import FormIngresos from './pages/FormIngresos.js';
import AppBar from '../src/components/AppBar';
import UploadForm from '../src/components/UploadForm';
import Rights from '../src/components/Rights';
import Registro from '../src/components/Registro';
import Login from '../src/components/Login';

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>s
        </div>
      </nav>
      <React.StrictMode>
      <BrowserRouter>
      <header> <AppBar/> 
      <Home/>
      </header>
      <main>
      
      <Switch>
          <Route exact path="/" component={Guest} />
          <Route exact path="/producto" component={ProductComplete} />
          <Route exact path='/formulario' component={FormIngresos} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/login' component={Login} />
          <Route path='*' component={NotFound} />
      </Switch>
      </main>
      <footer><Rights/></footer>
      </BrowserRouter>
    </React.StrictMode>
    </div> */
  );
}
export default App;
