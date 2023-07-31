import React from "react";

const H1 = ({txt, clas}) => {
    return(
        <h1 className={clas}>
            {txt}
        </h1>
    )
}

export {H1};