import React from "react";

const Checkbox = (props) => {

    return (
        <input name="checked" defaultChecked={props.checked} onClick={props.click} type="checkbox" ></input>
    )
};

export default Checkbox;