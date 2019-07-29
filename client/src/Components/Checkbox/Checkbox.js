import React from "react";

const Checkbox = (props) => {

    return (
        <input name="checked" type="checkbox" onClick={props.click} onChange={props.change}></input>
    )
};

export default Checkbox;