import { landingcards } from "../constants"
import { origami, dif0, dif1, dif2, dif3, card } from "../assets"
import styles from "../style"
import ret from '../retos/retos.json'
import reto from '../retos/retos_instruc.json'
import { useState, useEffect } from "react"



const CardsRetos = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [retosArray, setRetosArray] = useState([]); // Nuevo estado para almacenar los retos

    useEffect(() => {
        // Al cargar el componente, almacenar los datos de reto en el estado retosArray
        setRetosArray(reto);
    }, []);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
        setSelectedCard(null);
    };
    const getPasosAndImageForSelectedCard = () => {
        if (selectedCard) {
            // Buscar el elemento en retosArray que coincide con el título de selectedCard
            const selectedReto = retosArray.find((reto) => reto.titulo === selectedCard.titulo);
    
            if (selectedReto) {
                // Devolver un objeto que contiene tanto "Pasos" como "img" del elemento encontrado
                return selectedReto.pasosEImagenes;
            }
        }
    
        // Si no se encuentra el reto, devolver un objeto con valores por defecto
        return {
            Pasos: "Pasos no encontrados",
            img: [],
        };
    };

    return (
        <section className={`${styles.paddingY} space-x-4`} >
            {ret.map((card) => (
                <div className="py-5 ">
                    <div className={`flex-1 items-center ${styles.flexStart} bg-primary cursor-pointer`} onClick={() => handleCardClick(card)}>
                        <div>
                            <img src={origami} className="w-[356px] h-[256px] rounded-lg" />
                        </div>
                        <div className={`px-20 flex flex-row justify-between items-right w-full`}>
                            <div>
                                <h1 className='flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
                                    {card.titulo}
                                </h1>

                            </div>

                            <div>
                                <h1 className='flex-1 font-poppins font-bold text-[25px] text-black ss:leading-[100px] leading-[75px] pl-[90px]'>
                                    Dificultad
                                </h1>
                                {card.dificultad === '1' && (
                                    <div className={`${styles.flexCenter}  space-x-2`}>
                                        <img src={dif1} className=" " />
                                        <img src={dif0} className=" " />
                                        <img src={dif0} className=" " />
                                    </div>
                                )}

                                {card.dificultad === '2' && (
                                    <div className={`${styles.flexCenter}  space-x-2`}>
                                        <img src={dif1} className=" " />
                                        <img src={dif2} className=" " />
                                        <img src={dif0} className=" " />
                                    </div>
                                )}

                                {card.dificultad === '3' && (
                                    <div className={`${styles.flexCenter}  space-x-2`}>
                                        <img src={dif1} className=" " />
                                        <img src={dif2} className=" " />
                                        <img src={dif3} className=" " />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


            ))}
            {popupVisible && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'>
                    <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-sm z-50'>
                        <h1 className="text-2xl font-bold mb-4">{selectedCard.titulo}</h1>
                        {/* Mostrar la imagen específica para el elemento seleccionado */}
                        {(() => {
                            const pasosEImagenes = getPasosAndImageForSelectedCard();

                            if (Array.isArray(pasosEImagenes)) {
                                return pasosEImagenes.map((item, index) => (
                                    <div key={index} className="grid grid-cols-1 place-items-center gap-10">
                                        <div>{item.Pasos}</div>
                                        <img
                                            src={origami}
                                            alt={`Imagen ${index + 1}`}
                                            className="w-1/3 float-left mr-2"
                                        />
                                        
                                    </div>
                                ));
                            } else {
                                return <div>Pasos no encontrados</div>;
                            }
                        })()}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={closePopup}>Cerrar</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CardsRetos