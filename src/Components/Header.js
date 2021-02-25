import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

export default withRouter (class Header extends Component {
    render() {
        return (
            <div className="header">
               El Jardin Plants 
               {
                    this.props.location.pathname !== '/Home'
                        &&<NavLink exact activeClassName="selected" to="/Home" className="nav-link">
                    Home Page
                </NavLink>
                }
                {
                    this.props.location.pathname !== '/Plants'
                        && <NavLink exact activeClassName="selected" to="/Plants" className="nav-link">
                    Plants
                </NavLink>
                }
                {
                    this.props.location.pathname !== '/Details'
                        && <NavLink exact activeClassName="selected" to="/Details" className="nav-link">
                    Details
                </NavLink>
                }
                {
                    this.props.location.pathname !== '/Create'
                        && <NavLink exact activeClassName="selected" to="/Create" className="nav-link">
                    Create
                </NavLink>
                }

            </div>
        )
    }

})
