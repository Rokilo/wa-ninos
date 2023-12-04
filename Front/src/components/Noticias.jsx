import { niñosNoticias } from "../assets"
import styles from "../style"

import not from "../noticias/noticias.json"

const Noticias = () => {
    return (
    <section id="noticias" className={`flex md:flex-row flex-col ${styles.paddingY} grid grid-cols-2 gap-20`}>
        {not.map((card) => (
            <div className="bg-primary">
                <div className="font-poppins font-bold text-center pt-8 text-[26px]">{card.titulo}</div>
                <div className="flex justify-center items-center p-10">
                    <img src={niñosNoticias} className="h-96"/>
                </div>
                <div className={`${styles.flexCenter} pb-6`}>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                    Ver más
                    </button>
                </div>
            </div>
        ))}
    </section>
    )
}

export default Noticias