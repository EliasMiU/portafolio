import "./Cuadricula.css";

import DevMedida from "../../assets/img/desarrollo-medida-2.png";
import cms from "../../assets/img/ilustracion-sistema-gestion-contenido.png";
import pro from "../../assets/img/ilustracion-concepto-integracion-software.png"

function Cuadricula() { 
    return(
        <section className="cuadricula">
            <div className="container">
                <h2>Sobre mi</h2>
                <div className='row'>
                    <div className='col-12 col-md-6 order-2 order-md-1 dev-m'>
                        <div className="text-cuadricula">
                            <h3>DESARROLLO A MEDIDA</h3>
                            <p>Por mi gran habiilidad y conocimiento en la creacion de estructuras adaptativas a todas als resoluciones, desarrollo soluciones a madida para cada sueño que quieras llevar a la web, con gran compatibilidad en dispositivos moviles</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 order-1 dev-m'>

                        <img src={DevMedida} alt="" className="img-cuadricula" />
                        
                    </div>

                    <div className='col-12 col-md-6 order-3 cms'>
                    <img src={cms} alt="" className="img-cuadricula" />                        
                    </div>
                    <div className='col-12 col-md-6 order-4 cma'>
                        <h3>PASIONES DE DISENO</h3>
                        <p>Con sólida experiencia en WordPress, construyo sitios web atractivos y funcionales. Dominio en la personalización de temas, creación de tipos de contenido personalizados, integración de plugins y optimización para motores de búsqueda. Mis proyectos destacan por su diseño responsivo, velocidad de carga y facilidad de uso.</p>
                    </div>
                    
                    <div className='col-12 col-md-6 order-last order-md-5 objetivos'>
                        <h3>PASIONES DE DISENO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium provident quisquam in, culpa aperiam nisi accusantium quibusdam ullam repudiandae!</p>
                    </div>
                    <div className='col-12 col-md-6 order-5 objetivos'>
                    <img src={pro} alt="" className="img-cuadricula" /> 
                    </div>
                </div>
            </div>
        </section>
    ) 
}

export default Cuadricula;