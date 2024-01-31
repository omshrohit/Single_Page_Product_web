import React  from "react";
const Hero=()=>{
    return(
        <main className="hero container">
            <div className="hero-containt">
                <h1>YOUR FEET
                    DESERVE 
                    THE BEST
                </h1>
                <div className="hero-p">
                <p >YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                </div>
                
                <div className="hero-btn">
                    <button>Shopnow</button>
                    <button>Categories</button>
                </div>
                <div className="shoping">
                <div className="hero-p"><p>Also Available On</p></div>
                
                <div className="hero-logo">
                    <img src="/images/flipkart.png" alt='flipcart-log'/>
                    <img src="/images/amazon.png" alt='amazon-log'/>
                </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/shoe_image.png" alt='shoe-image'/>
            </div>

        </main>
    )
}
export default Hero;