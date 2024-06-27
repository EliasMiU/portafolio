import "./Proyectos.css";
import sandras from '../../assets/img/sandras-taqueria.jpg';
import xxl from '../../assets/img/xxl-online.jpg';
import wcc from '../../assets/img/wcc.jpg';
import laundry from '../../assets/img/laundry-room.jpg';
import capsec from '../../assets/img/capsec.jpg';
import jdgcargo from '../../assets/img/jdgcargo.jpg';

function Proyectos() {

  const proyectos = [
    {
        id: 0,
        name: "Capse21",
        description: "Lorem ipsum dolor net isssue, lore nade lerene donaes core",
        year: 2022,
        img: capsec,
        url: "https://capsec21.com/"
    },
    {
        id: 1,
        name: "Sandras taqueria",
        description: "Realizado mientras formaba parte de NDS System, lo construí completamente de acuerdo a las sugerencias, estandares y modelos planteados por la agencia, cada uno de las secciones que tiene fueron sugeridas por el equipo encargado de conversar y solicitar el modelo al cliente.",
        agencia: "NDS System",
        year: 2021,
        img: sandras,
        url: "https://www.sandrastaqueria.com/"
    },
    {
        id: 2,
        name: "XLL Online",
        description: "Lorem ipsum dolor net isssue, lore nade lerene donaes core",
        agencia: "Develoop SoftWare SL.",
        year: 2021,
        img: xxl,
        url: "https://www.xxlonline.net/"
    },
    {
        id: 3,
        name: "White Clouds Cleaning",
        description: "Lorem ipsum dolor net isssue, lore nade lerene donaes core",
        year: 2021,
        img: wcc,
        url: "https://whitecloudscleaning.com/"
    },
    {
        id: 4,
        name: "The Laundry Room",
        description: "Lorem ipsum dolor net isssue, lore nade lerene donaes core",
        year: 2021,
        img: laundry,
        url: "https://jdgcargo.com/"
    },
    {
        id: 6,
        name: "JDG Cargo",
        description: "Lorem ipsum dolor net isssue, lore nade lerene donaes core",
        year: 2021,
        img: jdgcargo,
        url: "https://jdgcargo.com/"
    }
]


  return(
    <section className="proyectos">
        <div className="container">
          <div className="content-p">
            {
              proyectos.map( proyecto => {
                return(
                  <div className="card" style={{backgroundImage:`url(${proyecto.img})`}}>
                      <div className="card-body">
                          <h5 className="card-title">{proyecto.name}</h5>
                          <p className="card-text">{proyecto.description}</p>
                          <a href={proyecto.url} className="btn btn-primary" target="_blank">Ver Proyecto</a>
                      </div>
                  </div>
                );
              })
            }
          </div>
        </div>
    </section>
  )
}

export default Proyectos;