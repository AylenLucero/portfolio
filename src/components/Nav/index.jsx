import React, {useState} from "react";
import {Linea} from "../Linea/index";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Nav = () => {

    let [classMenu, setClassMenu] = useState("menu menu-close");
    let [icons, setIcons] = useState("icons-close");
    let [iconsMobile, setIconsMobile] = useState("icons-close-mobile");
    let [bool, setBool] = useState(false);

    const clickMenu = () => {
        if(bool===false) {
           setClassMenu("menu menu-open");
           setIcons("icons-open");
           setIconsMobile("icons icons-open-mobile");
           setBool(true);
        } else {
            setClassMenu("menu menu-close");
            setIcons("icons-close");
            setIconsMobile("icons icons-close-mobile");
            setBool(false);
        }
    }

    return(
        <div className={classMenu}>
                <div onClick={()=> clickMenu()} className="lineas">
                    <Linea clas="linea-dos" />
                    <Linea clas="linea-dos abajo-una" />
                    <Linea clas="linea-dos abajo-dos" />   
                </div>
                <div className="icons-menu">
                    <div className={iconsMobile}>
                        <NavLink to="/" className="nav-link">
                            <div className="icons-menu-2">
                                <i class="fa-sharp fa-solid fa-house fa-lg"></i>
                                <p className={icons}> Principal </p>
                            </div>  
                        </NavLink>
                        <NavLink to="/academy" className="nav-link">
                            <div className="icons-menu-2">
                                <i class="fa-sharp fa-solid fa-lg fa-graduation-cap"></i> 
                                <p className={icons}> Educación </p>
                            </div>  
                        </NavLink>
                        <NavLink to="/work" className="nav-link">
                            <div className="icons-menu-2">
                                <i class="fa-sharp fa-solid fa-briefcase fa-lg"></i>
                                <p className={icons}> Laboral </p>
                            </div>
                        </NavLink>
                        <NavLink to="/projects" className="nav-link">
                            <div className="icons-menu-2">
                                <i class="fa-solid fa-code fa-lg"></i>
                                <p className={icons}> Proyectos </p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
    )
}

export {Nav};