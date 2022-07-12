import manu from '../img/manu.jpeg'
import styles from '../styles/AboutMe.module.css'

const AboutMe = () => {
  return (
  <div id="aboutmecontained">
    <div className={styles.aboutmain}>
      <h1 style={{paddingBottom: '60px', fontSize:'30px'}}>All About Me</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <img className={styles.imagestyle} src={manu} width={450} height={600} alt="pic of me" />
        </div>
        <div className={styles.column}>
          <p className={styles.paragraph}>I was born and raised in Queens, New York but I also claim my Honduran and Salvadoran roots!
            Before getting into programming I was in the Real Estate industry, where I started as a receptionist
            and ended up being an agent, all in the span of four years. I loved interacting with all the different type of people
            I encountered but the love of technology always called my name. I joined a bootcamp where I learned Ruby on Rails,
            React, Javascript, Redux, SQL, CSS and HTML. I have since then continued learning new technologies that I use to build new projects with.
            Scroll below to check out the rest of my work and make sure to connect with me!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
