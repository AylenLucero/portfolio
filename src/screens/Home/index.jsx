import React from "react";
import { H1, H2, Linea, Nav, ADownload, A, P } from "../../components/index.jsx";
import "./index.scss";
import foto from "../../assets/img/foto-cv.jpg";

const Home = () => {
    
    return(
        <section className="container-home">
            <Nav />
            <div className="body-home">
                <div className="container-body-home">
                    <div className="page">
                        <H1 txt="AYLEN LUCERO" clas="txt-name-cv" /> 
                        <div className="lineaCenter">
                            <Linea clas="linea" />
                        </div>                        
                        <H2 txt="FRONTEND DEVELOPER" clas="txt-cv" />
                        <P clas="txt" txt="Soy una persona muy curiosa, amable, tengo paciencia y pienso que es muy positivo seguir aprendiendo día a día un poco más. Poseo buena capacidad de organización, soy sociable, responsable y trabajo bien en equipo. Deseo seguir perfeccionándome a futuro y demostrando mis capacidades." />    
                        <div className="container-btns">
                            <div className="containter-btn">
                                <ADownload clas="btn-download-cv" txt="Descargar CV"/>
                            </div>  
                            <div className="containter-btn">
                                <A clas="btn-tech" txt="Tecnologías" link="#technologiesSection" icon="none"/>
                            </div> 
                        </div>                        
                    </div>
                    <div className="container-img">
                        <img src={foto} alt="foto cv" className="img-cv"/>  
                    </div>
                </div>
            </div>            
        </section>
    )
}

export {Home};