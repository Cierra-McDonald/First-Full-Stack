import React, { Component } from 'react'
import request from 'superagent';
import PlantList from './PlantList.js';
import { getAllPlants } from './apiUtils.js';

export default class PlantsPage extends Component {

    state = { 
        plantData: [],
        loading: true
    }


    componentDidMount = async () => { 
        
        this.setState({
            loading: true
        })

        const data = await getAllPlants();
        
        this.setState({
            loading: false,
            plantData: data,
        })
    
    }

    filterPlants = async () => { 
        this.setState({ 
            loading: true
        })
        const data = await getAllPlants();

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
