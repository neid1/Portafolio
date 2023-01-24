import React from "react";
import {Routes,Route,BrowserRouter,Navigate}from "react-router-dom";
import { Trabajo } from "../components/pages/trabajo";
import { Conocimiento } from "../components/pages/conocimiento";
import { Educacion } from "../components/pages/educacion";
import { Header } from "../components/layout/header";
import {Nav} from "../components/layout/nav"
import {Footer} from "../components/layout/footer"
import { NavLateral } from "../components/layout/navLateral";

export const Rutas =()=>{


    return(
        <BrowserRouter>

            <Header/>
            <Nav/>
            
                <Routes>
                    <Route path="/" element={<Trabajo/>}></Route>
                    <Route path="/trabajos" element={<Trabajo/>}/>
                    <Route path="/conocimiento" element={<Conocimiento/>}></Route>
                    <Route path="/educacion" element={<Educacion/>}/>
                </Routes>

            <NavLateral/>
            <Footer/>

        </BrowserRouter>
    )
}