import React from "react";

const A = ({link, clas, txt, icon}) => {
    return(
        <a href={link} className={clas}>
            {txt}
            <i class={icon}></i>
        </a>
    )
}

export {A};