import React from 'react';
import ScrollButton from './ScrollButton.js'
import { motion } from 'framer-motion';
import '../App.css'

const FirstSection = () => {
  return (
    <div className="main">
            <div className="bgText">
            <motion.div initial="hidden" animate="visible" variants={{
                  hidden: {
                    scale: .8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: .6
                    }
                  },
                }}>
                <h1>Hola! My name is Manuela Sanchez</h1>
                <p>and I am a Junior Software Engineer</p>
              </motion.div>
            </div>
          <div style={{paddingTop:'378px'}}>
            <p>Click Below And Learn More About Me</p>
            <ScrollButton/>
          </div>
        </div>
  )
}

export default FirstSection
