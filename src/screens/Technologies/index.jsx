import React from "react";
import "./index.scss";
import { H2 } from "../../components";
import { objectTecnhologies } from "../../assets/img/Technologies/technologiess";

const Technologies = () => {
    return(
        <section className="container-technologies">
            <div className="container-tech">
                <H2 txt="TECNOLOGÍAS" clas="title-tec" id="technologiesSection" />
                <div className="container-logs">
                    <div className="container-logs2">
                    {
                        objectTecnhologies.map((elem) => {
                            return(
                                <div className="technology">
                                    <p>{elem.name}</p>
                                    <img src={elem.img} alt={elem.alt} />
                                </div>
                            )
                        })
                    }  
                    </div>  
                </div>
                              
            </div> 
        </section>
    )
}

export {Technologies};