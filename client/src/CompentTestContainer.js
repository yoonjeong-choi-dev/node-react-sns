import React from "react";

const ComponentTestContainertainer = ({title, children}) => {
    return (
        <div style={{margin: '10px', padding: '10px', border: '2px solid black'}}>
            <h2>{title}</h2>
            {children}
        </div>
    )
};

export default ComponentTestContainertainer;