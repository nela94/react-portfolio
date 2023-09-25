import React from 'react';
import { motion } from 'framer-motion';
import frida from '../img/fridakhalo.png'
import muffins from '../img/morningmuffins.png'
import petme from '../img/Petme.png'
import realestate from '../img/realestateweb.png'
import style from '../styles/ProjectCard.module.css'


const ProjectCard = () => {
  return (
    <div className={style.container}>
        <main className={style.grid}>
        <motion.article classname={style.articleName} whileHover={{
              position: 'relative',
              background: 'white',
              scale: 1.2,
              transition: {
                duration: .2
              }
            }}>
          <img src={petme} alt="petme"/>
          <div className={style.text}>
            <h3>PetMe</h3>
            <a className={style.links} href="https://www.youtube.com/watch?v=FwgQTM4SK8o&feature=youtu.be">Demo      </a>
            <a className={style.links} href="https://github.com/nela94/PetMe">Github</a>
            <p>Application for potential pet owners to browse and find an available animal for adoption across various agencies. Used
            react-swipeable for users to easily swipe from pet to pet and get real adoptable pet information.</p>
          </div>
        </motion.article>
        <motion.article classname={style.articleName} whileHover={{
              position: 'relative',
              background: 'white',
              scale: 1.2,
              transition: {
                duration: .2
              }
            }}>
          <img src={muffins} alt="muffins"/>
          <div className={style.text}>
            <h3>Muffin Mornings</h3>
            <a className={style.links} href="https://www.youtube.com/watch?v=5ZUTU0HLilU&feature=youtu.be">Demo     </a>
            <a className={style.links} href="https://github.com/KrystleJustine/MuffinMornings/tree/manuela-2">Github</a>
            <p>E-commerce platform for consumers to purchase pastries of their choice and provide an online review</p>
          </div>
        </motion.article>
        <motion.article classname={style.articleName} whileHover={{
              position: 'relative',
              background: 'white',
              scale: 1.2,
              transition: {
                duration: .2
              }
            }}>
          <img src={frida} alt="frida"/>
          <div className={style.text}>
            <h3>Project0(Frida Kahlo)</h3>
            <a className={style.links} href="https://nela94.github.io/Project0/">Website      </a>
            <a className={style.links} href="https://github.com/nela94/Project0">Github</a>
            <p>Informational website about Frida Kahlo and her paintings.</p>
          </div>
        </motion.article>
        <motion.article classname={style.articleName} whileHover={{
              position: 'relative',
              background: 'white',
              scale: 1.2,
              transition: {
                duration: .2
              }
            }}>
          <img src={realestate} alt="real estate"/>
          <div className={style.text}>
            <h3>Big Apple Luxury Living</h3>
            <a className={style.links} href="https://www.youtube.com/watch?v=FwgQTM4SK8o&feature=youtu.be">Demo      </a>
            <p>Real Estate website for realtor Shelby Coleman designed to give information about NYC living and promote her business.</p>
          </div>
        </motion.article>
      </main>
    </div>
  )
}

export default ProjectCard
