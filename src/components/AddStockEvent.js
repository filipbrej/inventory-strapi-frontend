import React from 'react'
import axios from 'axios'

class AddStockEvent extends React.Component {

    state = {
        qty: 0,
        type: 'add',
        product: 'no',
        show: false
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {qty, type, product} = this.state
        console.log("qty:", qty)
        console.log("type:", type)

        if (product !== 'no') {
            const data = {
                qty,
                type,
                product: parseInt(product)
            }

            const addStockRes = await axios({
                method: 'POST',
                url: 'http://localhost:1337/stockevents',
                data
            })
            console.log('addStockRes:', addStockRes)
            if (addStockRes.status === 200) {
                alert('success')
                window.location = window.location

            }
        } else {
            return alert('no product chosen')
        }
    }

    render() {

        const {qty, type, product, show} = this.state
        const {products} = this.props

        return (
            <div className="AddStockEvent">
                <h1>Add Stock Event <button onClick={() => this.setState({show: true})}>+ Add</button> </h1>
                {show && 
                    <form onSubmit={this.handleSubmit}>
                        <select onChange={this.handleChange} name="product" value={product}>
                            <option value="no">Please select a product</option>
                                {products.map((product, i) => (
                                    <option key={i} value={product.id}>
                                        {product.name}
                                    </option>
                                ))}
                        </select>
                        <input onChange={this.handleChange} type="number" name='qty' value={qty}/>
                        <select onChange={this.handleChange} name="type" value={type}>
                            <option value="add">Add</option>
                            <option value="remove">Remove</option>
                        </select>
                        <button>Submit</button>
                    </form>
                }
               
            </div>
        )
    }
}

export default AddStockEvent