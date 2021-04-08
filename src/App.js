import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Products from './components/products';
import ProductDetails from './components/productDetails';
import Home from './components/home';
import Posts from './components/posts';
import NotFound from './components/notFound';
import { Route } from 'react-router';
import Dashboard from './components/admin/dashboard';
import './App.css';

class App extends Component {
  
  render() { 
    return (  
      <div>
        <NavBar />
        <div className="content">

          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/" component={Home} />
        </div>

      </div>
      
      
      );
  }
}
 
export default App;



