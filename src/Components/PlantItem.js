import React, { Component } from 'react'

export default class PlantItem extends Component {
    render() {
        return (
            <div>
                 <div className="plant-item" >
                    <div className="images">{this.props.plantProp.name}</div>
                    <div className="images">Genus: {this.props.plantProp.genus}</div>
                    <div className="images">Size: {this.props.plantProp.size}</div>
                    <div className="images">Light: {this.props.plantProp.light}</div>
                    <div className="images">Price: ${this.props.plantProp.price}</div>
                </div>  
            </div>
        )
    }
}
