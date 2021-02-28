import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
               <Link to="/" className="navbar-brand">Exercise tracker</Link>
               <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-Link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-Link">Create Exercise log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-Link">Create User</Link>
                        </li>
                    </ul>
               </div>
           </nav>
        );
    }
}