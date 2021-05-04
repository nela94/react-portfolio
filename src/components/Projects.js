import ProjectCard from './ProjectCard.js'
import styles from '../styles/Project.module.css'


const Projects = () => {
  return (
      <div className={styles.main}>
        <h1 style={{paddingBottom: '50px', fontSize:'27px'}}>Check Out My Work</h1>
        <ProjectCard/>
      </div>
  )
}

export default Projects
