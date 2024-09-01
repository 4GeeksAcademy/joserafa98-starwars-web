//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout/>)

//pseudocodigo:
//crear componentes navbar y cards DONE
//navbar: logo de star wars y al otro lado un boton DONE
//navbar: el boton debe ser un desplegable DONE
//cards: crear la plantilla cards con bootstrap DONE
//cards: la plantilla debe tener espacio para imagenes, titulo, descripcion y dos botones: favorito y learn more DONE
//cards: llamar dos veces a las cards: una para conectarla con la api de personajes y la otra con planetas
//conectar el boton de favoritos con el desplegable del navbar
// añadir boton de eliminar dentro del desplegable de favoritos.