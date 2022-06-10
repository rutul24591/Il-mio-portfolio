import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Preload = (props: any) => {
    return(
        <div id={ props.loader ? "preloader" : "no-preloader"}></div>
    )
}

export default Preload;