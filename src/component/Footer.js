import React from "react";

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

function Footer({ children }) {
    return (
        <div style={style}>
            <p>Copyright All rights reserved.</p>
            { children }
        </div>
    )
}

export default Footer