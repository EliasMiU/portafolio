import "./Proyectos.css";
import jdgcargo from '../../assets/img/jdgcargo.jpg';
import expedite from '../../assets/img/expedite-proyecto.png';
import envioscol from '../../assets/img/envios-colombia-proyecto.png'

function Proyectos() {
  const proyectosNew = [
    {
      id: 6,
      name: "JDG Cargo",
      description: "Lorem ipsum dolor net isssue, lore nade lerene donaes core",
      year: 2021,
      img: jdgcargo,
      url: "https://jdgcargo.com/",
      style: "card custom-6"
    },
    {
      id: 10,
      name: "Envios Colombia",
      description: "Lorem ipsum dolor net isssue, lore nade lerene donaes core",
      year: 2024,
      img: envioscol,
      url: "https://envioscol.jdgcargo.com/",
      style: "card custom-6"
    },
    {
      id: 0,
      name: "Expedite",
      description: "Lorem ash asjbd sjksdn sjds dasjkdasd askjdbasd",
      year: 2024,
      img: expedite,
      url: "https://expedite.jdgcargo.com/#inicio",
      style: "card custom-0"
    }
  ]


  return(
    <section className="new-project">
        <div className="container">
          <h2 className="t-section">ULTIMOS PROYECTOS</h2>
          <div className="content-p">
            {
              proyectosNew.map( proyecto => {
                return(
                  <div className={proyecto.style} style={{backgroundImage:`url(${proyecto.img})`}}>
                      <div className="card-body">
                          <h5 className="card-title">{proyecto.name}</h5>
                          {/*<p className="card-text">{proyecto.description}</p>*/}
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