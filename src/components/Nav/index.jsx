import React, {useState} from "react";
import {Linea} from "../Linea/index";
import "./index.scss";

const Nav = () => {

    const arrayMenu = [
        {
            "hrefLink":"google.com",
            "iconTip":"fa-sharp fa-solid fa-house fa-lg",
            "name":"Principal"
        },
        {
            "hrefLink":"google.com", 
            "iconTip":"fa fa-laptop",
            "name":"Tecnologías"
        },
        {
            "hrefLink":"google.com",
            "iconTip":"fa-solid fa-code fa-lg",
            "name":"Proyectos"
        },
        {
            "hrefLink":"google.com",
            "iconTip":"fa-sharp fa-solid fa-lg fa-graduation-cap",
            "name":"Educación"
        },
        {
            "hrefLink":"google.com",
            "iconTip":"fa-sharp fa-solid fa-briefcase fa-lg",
            "name":"Laboral"
        }
    ]

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
                        {
                            arrayMenu.map((elem) => {
                                return(
                                    <a href={elem.hrefLink} className="nav-link">
                                        <div className="icons-menu-2">
                                            <i class={elem.iconTip}></i>
                                            <p className={icons}> {elem.name} </p>
                                        </div>  
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export {Nav};