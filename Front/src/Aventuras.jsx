import styles from "./style"
import {NavbarHome, Footer, HeadAventuras, BotonAventuras} from './components';
import CardsAventuras from "./components/CardsAventuras";

const Aventuras = () => {
    return(
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarHome/>
        </div>
      </div>
      
      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HeadAventuras/>
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter} items-center`}>
        <div className={`${styles.boxWidth}`}>
        <BotonAventuras/>
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <CardsAventuras/>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
)};

export default Aventuras