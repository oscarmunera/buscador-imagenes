import React, { Component} from "react";
import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

class Resultado extends Component {
mostrarImagenes = () =>{
    const imagenes =  this.props.imagenes;
    if(imagenes.length===0) return (<div>
        <p className="lead text-center">No hay imágenes que mostrar</p>
    </div>)
    
    ;
   return (
    <React.Fragment>
        <Paginacion 
          paginaAnterior={this.props.paginaAnterior}
          paginaSiguiente={this.props.paginaSiguiente}         
         />   
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => (
            <Imagen
            key={imagen.id}
            imagen={imagen}
            />
            ) )}

         </div>
         <Paginacion 
          paginaAnterior={this.props.paginaAnterior}
          paginaSiguiente={this.props.paginaSiguiente}
         
         />   
    </React.Fragment>
   )
}

render() {
    return(
       <React.Fragment>
        { this.mostrarImagenes()}
       </React.Fragment>

    );

    }
}

export default Resultado;