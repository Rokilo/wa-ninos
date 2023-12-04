import { comment, dibujo, like,dislike, nadandoNP } from "../assets"
import PropTypes from 'prop-types';
import styles from "../style"

const CardsLogros = (props) => {
    const {logrosData,onSelectLike} = props

    return(
    <section id="logros" className={`flex md:flex-row flex-col ${styles.paddingY} grid grid-cols-4 `}>
        {logrosData.map((card,i) => (
            <div key={card.id} className={`w-[300px] m-2 border-4 border-black bg-white cursor-pointer`}>
                <h1 className="font-poppins font-semibold text-center pt-5 mb-3">{card.titulo}</h1>
                <hr className="border-black"></hr>
                <div className="flex justify-center items-center p-5">
                    <img className="w-[200px] h-[200px]" src={nadandoNP}/>
                </div>
                <div className="flex space x-1 ml-3">
                    <img onClick={()=>onSelectLike(i)} className="w-[21px] h-[21px]" src={card.likeIt? like:dislike}/>
                    <h1>{card.likeCounter}</h1>
                </div>
                <hr className="border-black"></hr>
                <p className="font-poppins pt-2 pb-2 m-2">{card.descripcion}</p>
            </div>
        ))}
    </section>
    )
}

CardsLogros.propTypes = {
    logrosData: PropTypes.array,
    onSelectLike:PropTypes.func
};

export default CardsLogros