import { Link, animateScroll as scroll } from "react-scroll";
import { saveAs } from 'file-saver';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {

  const handleOnClick = () => {
    saveAs('https://drive.google.com/file/d/1yYVNRrtcrZ52mVaI24bi4nqR0s1Hugik/view?usp=sharing');
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.uldesign}>
        <li className={styles.lidesign}>
          <Link activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>Home</Link>
        </li>
        <li className={styles.lidesign}>
          <Link activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>About Me</Link>
        </li>
        <li className={styles.lidesign}>
          <Link activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Projects</Link>
        </li>
        <li className={styles.lidesign}>
          <Link activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Contact Me</Link>
        </li>
        <li onClick={handleOnClick} className={styles.lidesign}>
          Resume
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
