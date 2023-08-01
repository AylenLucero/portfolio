import React from "react";
import DocCV from "../../assets/doc/AYLENLUCERO.pdf";
import "./index.scss";

const ADownload = ({clas, txt}) => {
    return(
        <a href={DocCV} download={""} className={clas} rel="noreferrer" target="_blank">
            {txt}
            <i class="fa fa-download icon-btn" aria-hidden="true"></i>
        </a>
    )
}

export {ADownload};