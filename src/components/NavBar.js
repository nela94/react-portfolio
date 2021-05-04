import { Link, animateScroll as scroll } from "react-scroll";
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
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
      </ul>
    </nav>
  )
}

export default NavBar
