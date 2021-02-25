import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class PlantItem extends Component {
    render() {
        return (
            <div>
                 <div className="plant-item" >
                 <NavLink exact activeClassName="selected" to={`/Details/${this.props.plantProp.id}`} className="nav"> 
                    <div className="images">{this.props.plantProp.name}</div>
                </NavLink>
                    <div className="images">Genus: {this.props.plantProp.genus}</div>
                    <div className="images">Size: {this.props.plantProp.sizes}</div>
                    <div className="images">Light: {this.props.plantProp.light}</div>
                    <div className="images">Price: ${this.props.plantProp.price}</div>
                </div>  
            </div>
        )
    }
}
