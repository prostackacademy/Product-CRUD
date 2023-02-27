import React from 'react'
import Products from './Products/Products'
import CreateProducts from './Products/CreateProduct'
import Admin from './Products/Admin'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/admin" component={Admin} />
          <Route path="/create" component={CreateProducts} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
