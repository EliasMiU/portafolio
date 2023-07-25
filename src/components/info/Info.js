import React, { Component } from 'react';
import pc from '../../assets/img/monitor-de-pc.png';
import laptop from '../../assets/img/ordenador-portatil.png';
import mobil from '../../assets/img/telefono-celular.png';


function ListResolitions (){
  return <ul className='resolution-disp'>
    <li><img src={pc} alt="Resolucion de PC" /></li>
    <li><img src={laptop} alt="Resolucion de laptop" /></li>
    <li><img src={mobil} alt="Resolucion Mobile" /></li>
  </ul>
}

class Info extends Component {
    render(){
        return <section className="description py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2  text-center mb-5">
                        <h2 className="text-center">Apasionado del desarrollo web</h2>
                        <p>Desarrollo páginas web cada tipo de negocios y todo tipo de requerimientos, cuento con 5 años de experiencia en el área, empleo los estándares actuales y consolidados para el desarrollo web.</p>
                    </div>
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mb-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-md-2">
                                <ListResolitions />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2  text-center mb-5">    
                        <p>Diseños personalizados y herramientas ideales para acelerar la creación de tu sitios web, además de aplicar el mejor enfoque adaptativo, así tu web será visible en todas las resoluciones y los distintos dispositivos móviles.</p>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Info;

