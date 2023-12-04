import { landingcards } from "../constants"
import styles from "../style"

const CardsLanding = () => {
    return(
    <section className={`${styles.flexCenter} ${styles.paddingY} space-x-4`} flex-row flex-wrap mb-6>
        {landingcards.map((card) => (
            <div key={card.id} className={`flex-1  ${card.color} cursor-pointer`}>
                <h1 className="font-poppins font-semibold text-center pt-5">{card.titulo}</h1>
                <div className="flex justify-center items-center p-10">
                    <img src={card.logo} />
                </div>
            </div>
        ))}
    </section>
    )
}

export default CardsLanding