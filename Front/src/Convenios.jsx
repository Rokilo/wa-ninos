import styles from "./style"
import {NavbarHome, Footer, HeadConvenios, CategoriasConvenios, CardsConvenios} from './components';
import React, { useState } from 'react';
import BotonConvenios from "./components/BotonConvenios";



const Convenios = () => {
  const [selectedCategory, setSelectedCategory] = useState('default');

    return(
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarHome/>
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HeadConvenios/>
        </div>
      </div>

      <div className={`bg-primary border-y-4 border-black ${styles.padding} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CategoriasConvenios selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory}/>
        </div>
      </div>



      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter} items-center`}>
        <div className={`${styles.boxWidth}`}>
        <BotonConvenios/>
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <CardsConvenios selectedCategory={selectedCategory}/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
)};

export default Convenios