import manu from '../img/manu.jpeg'
import styles from '../styles/AboutMe.module.css'

const AboutMe = () => {
  return (
    <div id="aboutmecontained">
      <div className={styles.aboutmain}>
        <h1 className={styles.header}>All About Me</h1>
        <div className={styles.row}>
           <div className={styles.column}>
              <img className={styles.imagestyle} src={manu} width={450} height={600} alt="pic of me" />
            </div>
            <div className={styles.column}>
              <p className={styles.paragraph}>
                Hola! 👋🏽 I'm a proud New Yorker from Queens with strong Honduran and Salvadoran roots. My journey to becoming a software engineer hasn't 
                followed a traditional path. At the age of 18, I landed a job as a receptionist at a Real Estate company, where I was given the opportunity 
                to develop a career as a Real Estate agent. While the job was fun and enjoyable, I never felt truly fulfilled or "challenged enough". I always 
                had an interest in technology and was curious about how I could contribute to the IT department when it came to onboarding agents or fixing network issues.
              </p>
              <p className={styles.paragraph}>
                Soon, I found myself exploring different careers in the tech industry and stumbled upon a coding bootcamp. I took a few of their pre-work 
                classes and immediately fell in love with the challenge! Five years ago, I made the career change, and I've never looked back. Becoming a 
                software engineer has pushed me in so many ways and has given me a brighter perspective on the world. I now have the ability to build things 
                I never thought possible.
              </p>
              <p className={styles.paragraph}>
                My specialties include Javascript, React, Ruby on Rails, CSS, HTML, and much more. Keep scrolling to check out my work, and don't forget to
                connect with me!   
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
