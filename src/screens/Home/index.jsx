import React from "react";
import { H1, H2, Linea, Nav } from "../../components/index.jsx";
import "./index.scss";
import foto from "../../assets/img/foto-cv.jpg";

const Home = () => {
    
    return(
        <div className="container">
            <Nav />
            <div className="body-home">
               <div className="page">
                    <H1 txt="AYLEN LUCERO" clas="txt-name-cv" /> 
                    <div className="lineaCenter">
                        <Linea clas="linea" />
                    </div>
                    
                    <H2 txt="FRONTEND DEVELOPER" clas="txt-cv" />
                    <div className="txt">
                        <p>
                        Soy una persona muy curiosa, amable, tengo paciencia y pienso que es muy positivo seguir aprendiendo día a día un poco más. Poseo buena capacidad de organización, soy sociable, responsable y trabajo bien en equipo. Deseo seguir perfeccionándome a futuro y demostrando mis capacidades.
                        </p>
                    </div>                    
                </div>
                <div>
                   <img src={foto} alt="foto cv" className="img-cv"/>  
                </div>
                 
            </div>
            
        </div>
    )
}

export {Home};