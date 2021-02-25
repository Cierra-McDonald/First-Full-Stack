import React, { Component } from 'react'
import { postNewPlant } from './apiUtils.js'

export default class CreatePage extends Component {

    state = { 

        image: '',
        genus: '',
        name: '',
        sizes_id: '1',
        light: '',
        price: ''


    }
    
    handleGenusChange = (e) => { 
        console.log(e.target.value)
        this.setState({
            genus: e.target.value
        })
    }
    
    handleSizeChange = (e) => { 
        console.log(e.target.value)
        this.setState({ 
            sizes_id: e.target.value
        })
    }

    handleLightChange = (e) => { 
        console.log(e.target.value)
        this.setState({ 
            light: e.target.value
        })
    }

    handlePriceChange = (e) => { 
        console.log(e.target.value);

        this.setState({ 
            price: e.target.value
        })

    }
    
    
    handleNameChange = (e) => { 

        this.setState({ 
            name: e.target.value
        })
    }

    handleSubmit = async (e) => { 
        e.preventDefault();
            
        
            

            await postNewPlant(this.state)
            
            this.props.history.push('/Plants');
    }

    render() {
        return (
            <div>
                <form className="create-form" > 
                    <h2>Create a Plant Entry to add to our Inventory!</h2>
                    <label> Genus:
                        <input
                         value={this.state.genus}
                         onChange={this.handleGenusChange}/>
                    </label><br/>
                    <label> Name:
                        <input
                         value={this.state.name}
                         onChange={this.handleNameChange}/>
                    </label><br/>
                    <label> 
                        Size:
                        <select defaultValue={this.state.sizes_id}
                            onChange={this.handleSizeChange}>
                        <option value="1">Small </option>
                        <option value="2">Medium </option>
                        <option value="3">Large</option>
                        </select>
                    </label><br/>
                    <label> Light:
                        <input
                         value={this.state.light}
                         onChange={this.handleLightChange}/>
                    </label><br/>
                    <label> Price:
                        <input
                         type="number"
                         value={this.state.price}
                         onChange={this.handlePriceChange}/>
                    </label><br/>

                    <button
                        type="submit"
                        onClick={this.handleSubmit}>
                        Create!
                    </button>
                </form>
            </div>
        )
    }
};
