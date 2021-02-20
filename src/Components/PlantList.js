import React, { Component } from 'react'
import PlantItem from './PlantItem'

export default class PlantList extends Component {
    render() {
        const loading = this.props.loading;
        return (
            <div>
                {
                    loading 
                        ?
                        <div>Hi, I'm loading!</div>
                        :
                    <ul className="plant-list"> 
                        {this.props.filterPlants.map(singlePlant => <PlantItem 
                        key={singlePlant.id}
                        plantProp={singlePlant}
                        />)}
                    </ul>
                }
            </div>
        )
    }
}