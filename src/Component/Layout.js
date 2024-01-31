import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
const Layout=({children})=>{
    return(
        <div>
            <Navbar/>
            <Hero/>
            {/* <div className="content">
                {children}
            </div>
            <Footer/> */}
        </div>
    )
}
export default Layout;