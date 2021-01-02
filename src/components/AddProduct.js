import React from 'react'
import axios from 'axios'

class AddProduct extends React.Component {

    state = {
        name: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {name} = this.state

        // Async
        const createProductRes = await axios({
            method: 'POST',
            url: 'http://localhost:1337/products',
            data: {
                name
            }
        })

        if (createProductRes.status === 200) {
            alert('successfully created product')
            window.location = window.location
        } else {

        }
    }
    render() {
        const {name} = this.state
        return (
            <div className='AddProduct'>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={(e) => this.setState({name: e.target.value})} name='name' value={name} type='text' />
                    <button type='submit'>Add Product</button>
                </form>
            </div>
        )
    }
}

export default AddProduct