import { calendario, park, personas } from "../assets"
import { aventurascards } from "../constants"
import styles from "../style"

const CardsAventuras = () => {
    return(
    <section className={`${styles.flexCenter} ${styles.paddingY} space-x-4`} flex-row flex-wrap mb-6>
        {aventurascards.map((card) => (
            <div key={card.id} className={`flex-1 border-4 border-black bg-white cursor-pointer`}>
                <h1 className="font-poppins font-bold text-center p-5 bg-verde text-white text-[26px]">{card.titulo}</h1>
                <div className="flex justify-center items-center p-10">
                    <img src={park}/>
                </div>
                <div className={`${styles.flexCenter} space-x-4`}>
                    <img src={calendario}/>
                    <h1 className="font-poppins font-bold">16/junio</h1>
                    <img src={personas}/>
                    <h1 className="font-poppins font-bold">9/16</h1>
                </div>
                <div className={`${styles.flexCenter} py-2`}>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                    Ver más
                    </button>
                </div>
            </div>
        ))}
    </section>
    )
}

export default CardsAventuras