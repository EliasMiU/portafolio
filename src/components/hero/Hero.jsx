import "./Hero.css";

function Hero() { 
    return(
        <section className="hero">
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-md-9 position-relative'>
                        <span className="greeting-hero">Hola, soy el Desarrollador Web.</span>
                        <h1 className='titulo-hero'>
                            <span className="name">Daniel E.</span>
                            <span className="name">Millan Urbano</span>
                        </h1>
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <p className="intro-hero">Creador de unabru.tk y fiel amante del desarrollo web, con mis conocimientos puedo expandir tu negocio a través de la web, haciendo crecer tus ventas y llegar más lejos.</p>
                            </div>
                        </div>

                        <div className='content-contact'>
                                                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) 
}

export default Hero;