import React from "react";

const P = ({txt, clas}) => {
    return (
        <div className={clas}>
            <p>
                {txt}
            </p>
        </div>
    )
}

export {P};