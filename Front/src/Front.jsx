import styles from './style';

import {NavbarLanding, Footer, CardsLanding, Landing} from './components';

const Front = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarLanding/>
        </div>
      </div>
    
      <div className={`bg-secondary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Landing/>
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CardsLanding/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>

    </div>
);


export default Front