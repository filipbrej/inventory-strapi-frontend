import React from 'react'
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
// Components
import StockEventsTable from './components/StockEventsTable'
import AddStockEvent from './components/AddStockEvent'
import AddProduct from './components/AddProduct'
import Nav from './components/Nav'

class App extends React.Component {
  state = {
    fetchedProducts: [],
    fetchedStockEvents: []
  }

  async componentDidMount() {
    const productsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    })

    const stockEventsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    })

    console.log('component mounted')

    const fetchedProducts = productsRes.data
    const fetchedStockEvents = stockEventsRes.data

    this.setState({fetchedProducts, fetchedStockEvents})
  }

  render() {
    const {fetchedProducts, fetchedStockEvents} = this.state
    return (
      <div className="App">
        <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/stock/add'>
            <AddStockEvent products={fetchedProducts} />
          </Route>
          <Route exact path='/products'>
            <AddProduct  />
          </Route>
          <Route exact path='/stock'>
            <StockEventsTable
              products={fetchedProducts}
              stockEvents={fetchedStockEvents}
            />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
