import { farmacia } from "../assets"
import styles from "../style"
import conv from '../components/convenios/convenios.json';
import Modal from './ModalConvenios';
import React, { useState } from 'react';

const CardsConvenios = ({ selectedCategory }) => {
    // Accede a los datos de conv en lugar de cardData
    const cards = selectedCategory==='default' ?conv : conv.filter((card)=>card.seccion === selectedCategory);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
  
    const openModal = (data) => {
      setSelectedData(data);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedData(null);
      setModalIsOpen(false);
    };
    return (
      <section className={`${styles.flexCenter} ${styles.paddingY} space-x-4`} flex-row flex-wrap mb-6>
        <div className="h-26 grid grid-cols-4 gap-20 content-center">
          {cards.map((card, index) => (
            <div key={index} className={`flex-1 border-4 border-black bg-white hover:bg-gray-100 cursor-pointer`}>
              <div className="flex justify-center items-center p-10">
                <img src={farmacia} className="w-[128px] h-[128px]" alt={card.titulo} />
              </div>
              <div className={`${styles.flexCenter} py-2`}>
                {card.seccion==='Alimentos' &&(
                < div >
                    <h1 className="font-poppins font-bold text-center p-5 text-black text-[26px]">
                    {card.titulo}
                  </h1>
                  < div className="flex justify-center items-center ">
                  <button onClick={() => openModal(card)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Ver Más
                  </button>
                  </div>
                  </div>
                )}

                {card.seccion === 'Salud' && (< div >
                    <h1 className="font-poppins font-bold text-center p-5 text-verde text-[26px]">
                        {card.titulo}
                    </h1>
                     < div className="flex justify-center items-center ">
                     <button onClick={() => openModal(card)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                         Ver Más
                     </button>
                     </div>
                     </div>
                )}
                {card.seccion === 'Entretenimiento' && (< div >
                    <h1 className="font-poppins font-bold text-center p-5 text-yellow-500 text-[26px]">
                        {card.titulo}
                    </h1>
                     < div className="flex justify-center items-center ">
                     <button onClick={() => openModal(card)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                         Ver Más
                     </button>
                     </div>
                     </div>
                )}
                {card.seccion === 'Otros' && (< div >
                    <h1 className="font-poppins font-bold text-center p-5 text-red-500 text-[26px]">
                        {card.titulo}
                    </h1>
                     < div className="flex justify-center items-center ">
                     <button onClick={() => openModal(card)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                         Ver Más
                     </button>
                     </div>
                     </div>
                )}
                
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={modalIsOpen} closeModal={closeModal} data={selectedData} />
      </section>
    );
  };

export default CardsConvenios