import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";



class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina : []
  }

  scroll =() => {
const elemento = document.querySelector('.jumbotron');
elemento.scrollIntoView('smooth','end');

  }

  paginaAnterior =() => {
 //leer el state de la pagina actual
 let pagina = this.state.pagina;
//leer si a pagina es 1, no restar mas
if (pagina === 1) return null;

 //resta uno a la pagina actual
 pagina-=1;
 //agregar el cambio al state
 this.setState({pagina
},() => {
  this.consultarApi();
  this.scroll();

});
 //console.log(pagina)
  }
  paginaSiguiente =() => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    //sumar uno a la pagina actual
    pagina+=1;
    //agregar el cambio al state
    this.setState({pagina
    },() => {
      this.consultarApi();});
      this.scroll();
    //console.log(pagina)
  }

consultarApi = () => {
   const termino = this.state.termino;
   const pagina = this.state.pagina;
   const url = `https://pixabay.com/api/?key=37550362-6fb3b189b707e4ddafae617f4&q=${termino}&per_page=30&page=${pagina}`;

   fetch(url)
   .then(respuesta => respuesta.json())
   .then(resultado => this.setState({ imagenes : resultado.hits }))
}

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
  }, () => {
    this.consultarApi();
  })
}
  render() { 
    return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagénes</p>
        <Buscador
        datosBusqueda={this.datosBusqueda}
        />
      </div>
      <div className="row justify-content-center">
      <Resultado 
      imagenes={this.state.imagenes}
      paginaAnterior={this.paginaAnterior}
      paginaSiguiente={this.paginaSiguiente}
      />
        </div>
    </div>
    );
  }
}

export default App;
