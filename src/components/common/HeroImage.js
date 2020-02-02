import React from "react";

const HeroImage = () => {
    return(
        <div style={style}>
            <img
                src={require("../../images/hero-image.jpg")}
              style={style}
              alt="Hero Background"
            />
            <div style={style.content}>
                <h1>Welcome to Jetcake Page</h1>
            </div>
        </div>
    )
};

const style = {
    'position': 'relative',
    'top': 0,
    'left': 0,
    'width': '100%',
    'minWidth': '100%',
    'marginBottom': '40px',
    'maxHeight': '550px',
    content: {
        'position': 'absolute',
        'top': 50,
        'margin': 'auto',
        'textAlign': 'center',
        'left': 0,
        'right': 0,
        'marginTop': -9
    }
};

export default HeroImage;
