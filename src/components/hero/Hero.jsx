import Gato from '../../assets/img/imagen-hero.png';

import "./Hero.css";

function Hero() { 
    return(
        <section className="hero">
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-md-10 position-relative'>
                        <span className="greeting-hero">Hola, soy el Desarrollador Web.</span>
                        <h1 className='titulo-hero'>
                            <span className="name">Daniel E.</span>
                            <span className="name">Millan Urbano</span>
                        </h1>
                        <div className="row">
                            <div className="col-12 col-md-8">
                               <button className='btn-hero'>Hablemos...</button>
                            </div>
                        </div>

                        <div className='content-contact'>
                                                     
                        </div>
                    </div>
                </div>
            </div>

            <img className="img-hero" src={Gato} alt="" />
        </section>
    ) 
}

export default Hero;