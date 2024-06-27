import { Link } from "react-router-dom";

import './sobremi.css';


function Sobremi() {
    return (<>
        <header className="header-info">
            <div className="container nav-empresas">
                <Link to='/'>Home</Link>
            </div>
        </header>
        <section id="mas-info" className="mas-info">
            <div className="container">
                <h1>Mi experiencia con otras empresas</h1>
                <p>Durante mi trayectoria como desarrollador he trabajado en empresas internacionales con proyectos de varios países, estos proyectos me han permitido mejorar mis habilidades como Desarrollador Web.</p>
                <p>Participar en estos proyectos fue base fundamental para mejorar mis habilidades, reforzar mis conocimientos y perfeccionar las metodologías de trabajo.</p>
                <p>Estos proyectos pertenecen a estas empresas, mi participación fue en calidad de integrante de equipos multidisciplinarios y que además en algunos tuve la oportunidad de estar al frente del proyecto.</p>
                <p>A continuación algunas de estas empresas.</p>

                <h2>DEVELOOP SOFTWARE, S.L.</h2>

                <p>Empresa Española especializada en el Desarrollo de Software, y en prestar servicios a otras empresas e instituciones en áreas de las tecnologías de la información.</p>

                <p>Empresa que me permitió iniciar en el mundo del desarrollo web como <span className="enfasis">Analista Programador</span>, participando en proyectos de varios países y de diferentes índoles, donde cada proyecto contaba con su forma particular y diferente de plantear lo que se requería.</p>

                <p>Contando con un equipo multidisciplinario para cada desarrollo pudimos adaptarnos eficientemente a cada una de las exigencias, tanto del cliente, como de los estándares de ejecución de los proyectos por parte de Develoop Software.</p>

                <p>También tuve la oportunidad de estar al frente de algunos proyectos tales como:</p>
                
                <a href="https://www.gls-spain.es/es/" target="_blank">GLS</a> <span className="separadorLink">/</span> 
                <a href="https://www.xxlonline.net/">XXl Online</a> <span className="separadorLink">/</span>
                <a href="https://www.cal.com.br/">CAL </a>

                <p>Que me permitieron dirigir y coordinas los objetivos de cada etapa del desarrollo FrontEnd y proponer las herramientas más adecuadas, o que le competía a mi equipo, para poder direccionar las técnicas necesarias y adecuadas que debían ser aplicadas para obtener los resultados requeridos.</p>

                <h2>Barna Builden de Arrendamientos, S.L.</h2>
                <p>Esta es una empresa que se defdica a la compra, venta y alquiler de bienes inmuebles, se encuentra ubicada en Barcelona, España, y como toda compañía actual quería expandirse y especializarse en los servicios digitales.</p>

                <p>Mi puesto fue de <span className="enfasis">Consultor Senior</span>, y tenia la responsabiliad de la creacion de algunas de sus páginas, las cuales nuestro a continuación.</p>

                <a href="https://certificados.gestiondirect.eu/">Certificados Digitales</a> 
                <span className="separadorLink">/</span>
                <a href="https://blog.gestiondirect.eu/">Blog GD</a>

            </div>
        </section>
    </>
    )
}

export default Sobremi;