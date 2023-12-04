import styles from "../style"

const HeadAventuras = () => {
    return(
    <section id="headventuras" className={`${styles.paddingY}`}>
        <h1 className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1)] font-poppins text-center font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            ¡Aventuras!
        </h1>
        <p className={`${styles.paragraph} text-center font-semibold  mt-5 text-orange-600 py-10 ss:text-[25px]`}>
            ¿Sin panorama para estos dias? ¡Unete a alguna de las aventuras creada para la comunidad, o invita a otros a unirse a una aventura creada por ti!
        </p>
    </section>
)}

export default HeadAventuras