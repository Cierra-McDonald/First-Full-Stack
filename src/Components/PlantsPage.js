import React, { Component } from 'react'
import request from 'superagent';
import PlantList from './PlantList.js';

export default class PlantsPage extends Component {

    state = { 
        plantData: [],
        loading: true
    }


    componentDidMount = async () => { 
        
        this.setState({
            loading: true
        })
        const data = await request.get(`https://murmuring-hollows-82372.herokuapp.com/plants`);
        
        await this.setState({
            loading: false,

            plantData: data.body
        })
        console.log(data.body);
    }

    filterPlants = async () => { 
        this.setState({ 
            loading: true
        })
        const data = await request.get(`https://murmuring-hollows-82372.herokuapp.com/plants`);

        return data.body;
    }

    render() {
        
        console.log(this.state.plantData)
        return (
            <div>
                <PlantList
                loading={this.state.loading}
                filterPlants={this.state.plantData}/>
            </div>

        )
    }
}
