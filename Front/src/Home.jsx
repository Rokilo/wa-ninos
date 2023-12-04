import styles from './style';
import {NavbarHome, Footer, Noticias, BotonNoticias} from './components';


const Home = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarHome/>
        </div>
      </div>
      
      

      <div className={`bg-secondary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <BotonNoticias/>
          <Noticias/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
);


export default Home


// CTRL + Z