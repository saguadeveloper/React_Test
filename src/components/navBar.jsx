import React, {Component} from 'react';

//Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return ( 
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" >
          Navbar {" "}
          <span className="badge badge-pill badge-secondary">
            { totalCounters }
          </span>
        </a>
         
      </nav>
     );
}
 
export default NavBar;

// Object Destructuring
/* 
  ({ <nombre_del_parametro> })
*/

/**
 * Lifecycle Hooks
 * 
 * Mount
 * render
 * componentDidMount
 * 
 * 
 * Update
 * render
 * componentDidUpdate
 * 
 * 
 * UnMount
 * componentWillUnmount
 * 
 */
