import React from "react";

const Checkbox = (props) => {

    return (
        <input type="checkbox" onChange={props.boxChange}></input>
    )
};

export default Checkbox;