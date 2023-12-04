import styles from "../style"

const HeadLogros = () => {
    return(
    <section id="headlogros" className={`${styles.paddingY}`}>
        <h1 className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1)] font-poppins text-center font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            ¡Logros!
        </h1>
        <p className={`${styles.paragraph} text-center font-semibold  mt-5 text-orange-600 py-10 ss:text-[25px]`}>
            ¡Bienvenidos al foro de logros y Éxitos! Este espacio ha sido creado con el proposito de que todos podamos celebrar y compartir nuestros logros personales y profesionales. Aqui cada uno de nosotros tiene la oportunidad de destacar y reconocer
        </p>
    </section>
)}

export default HeadLogros