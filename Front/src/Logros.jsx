import styles from "./style"
import {NavbarHome, Footer, HeadLogros, CardsLogros, BotonLogros} from './components';
import { useState } from "react";
import { logroscards } from "./constants"


const Logros = () => {
  
    const [logrosData,setLogrosData] = useState(logroscards)

    function toggleLike(index) {
      const currentLogros = [...logrosData]

      if(logrosData[index].likeIt){
        currentLogros[index].likeIt = false
        currentLogros[index].likeCounter-=1
      }else{
        currentLogros[index].likeIt = true
        currentLogros[index].likeCounter+=1
      }

      
      setLogrosData(currentLogros)

    }



    return(
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarHome/>
        </div>
      </div>
      
      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HeadLogros/>
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter} items-center`}>
        <div className={`${styles.boxWidth}`}>
        <BotonLogros/>
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <CardsLogros
            logrosData={logrosData}
            onSelectLike={toggleLike}
          />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
)};

export default Logros