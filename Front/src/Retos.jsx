import styles from "./style"
import {NavbarHome, Footer, HeadRetos} from './components';
import CardsRetos from "./components/CardsRetos";
import BotonRetos from "./components/BotonRetos";

const Retos = () => {
    return(
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarHome/>
        </div>
      </div>
    
      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HeadRetos/>
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <BotonRetos/>
          <CardsRetos/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
)};

export default Retos