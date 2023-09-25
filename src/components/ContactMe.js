import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/ContactMe.module.css'

const ContactMe = () => {
  return (
      <div className={styles.main}>
        <div className={styles.row}>
          <a href="https://www.linkedin.com/in/manuela-sanchez947/" className={styles.column}>
            <FontAwesomeIcon className={styles.iconStyle} icon={faLinkedin} />
          </a>
          <a href="https://github.com/nela94" className={styles.column}>
            <FontAwesomeIcon className={styles.iconStyle} icon={faGithubSquare} />
          </a>
          <a href="https://medium.com/@m.sanchez947" className={styles.column}>
            <FontAwesomeIcon className={styles.iconStyle} icon={faMedium} />
          </a>
          <a href={`mailto:${'sanchez.manuela947@gmail.com'}`}className={styles.column}>
            <FontAwesomeIcon className={styles.iconStyle} icon={faEnvelopeOpenText} />
          </a>
        </div>
      </div>
  )
}

export default ContactMe
