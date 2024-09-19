import bootstrap from '../../assets/img/bootstrap.png'
import css from '../../assets/img/css.png'
import git from '../../assets/img/git.png'
import html from '../../assets/img/html-5.png'
import js from '../../assets/img/js.png'
import php from '../../assets/img/php.png'
import react from '../../assets/img/react.png'
import sass from '../../assets/img/sass.png'
import wp from '../../assets/img/wordpress.png'
import "./Skill.css"



export default function Skill(){
  return(
      <section className="skill-sect">
        <div className="container">
          <h2 className='t-section'>Conocimientos</h2>
          <ul className='list-skill'>
            <li><img src={bootstrap} alt="" /><span>Boostrap</span></li>
            <li><img src={css} alt="" /><span>Cascading Style Sheets</span></li>
            <li><img src={git} alt="" /><span>GitHUb</span></li>
            <li><img src={html} alt="" /><span>HTML 5</span></li>
            <li><img src={js} alt="" /><span>JavaScript</span></li>
            <li><img src={php} alt="" /><span>PHP</span></li>
            <li><img src={react} alt="" /><span>ReactJS</span></li>
            <li><img src={sass} alt="" /><span>Sass</span></li>
            <li><img src={wp} alt="" /><span>WordPress</span></li>
          </ul>
        </div>
      </section>
    
  )
}