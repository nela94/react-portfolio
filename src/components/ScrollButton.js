import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ScrollButton.module.css'

const ScrollButton = () => {

  const handleOnClick = () => {
    var element = document.getElementById("aboutmecontained");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  return (
    <div onClick={handleOnClick} className={styles.circlecontainer}>
      <span className={styles.circle}>
        <FontAwesomeIcon  className={`${styles.fa}`} icon={faArrowDown} />
      </span>
      <span className={styles.pulse}></span>
    </div>
  )
}

export default ScrollButton
