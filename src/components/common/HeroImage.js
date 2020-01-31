import React from "react";

const HeroImage = () => {
    const height = window.innerHeight;

    const style = {
        'position': 'relative',
        'top': 0,
        'left': 0,
        'minWidth': '100%',
        'marginBottom': '40px',
        'maxHeight': height - 250,
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

    return(
        <div style={style}>
            <img
                src={require("../../images/hero-image.jpg")}
              style={style}
              alt="Hero Background"
            />
            <div style={style.content}>
                <h1>Welcome to Jetcake Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
};

export default HeroImage;
