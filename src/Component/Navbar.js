import React from 'react'


import './nav.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
const Navbar=()=>{
    return(
        <>
        <Router>
            <div>
                <nav className='Nav1 container'>
                    <div >
                        <img src="/images/brand_logo.png" alt="logo"></img>
                    </div>
                    <ul className='Nav'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/menu'>Menu</Link>
                        </li>
                        <li>
                            <Link  to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='profile'>Profile</Link>
                        </li>
                    </ul>

                    <button>Signin</button>
                    

                </nav>
            </div>
            {/* <Switch>
            <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route path='/menu'>
                    <Menu></Menu>
                </Route>
                <Route path='/about'>
                    <About></About>
                </Route>
                
                <Route path='/profile'>
                    <Profile></Profile>
                </Route>
               
            </Switch> */}
        </Router>
        </>
    )
}

export default  Navbar;