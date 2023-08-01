import React from "react";

const A = ({link, clas, txt}) => {
    return(
        <a href={link} className={clas}>
            {txt}
        </a>
    )
}

export {A};