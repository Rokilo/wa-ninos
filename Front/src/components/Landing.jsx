import styles from '../style';
import { niños } from '../assets';

const Landing = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart}`} flex-col px-6>
            <div>
                <img src={niños} alt="niños" className=''/>
            </div>
            <div className={`px-20 flex flex-row justify-between items-right w-full`}>
                <div>
                    <h1 className='flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
                        ¿Quienes <span className="bg-gradient-to-r text-transparent bg-clip-text from-orange-500 to-orange-400"> somos</span>?
                    </h1>
                    <p className={`${styles.paragraph} font-semibold max-w-[600px] mt-5 text-orange-600 text-center ss:text-[25px]`}>
                        Programa de educación para niños de 2 a 4 años y sus familias. 
                        A través de sesiones con monitoras expertas, realizan actividades personalizadas de estimulación,
                        desarrollo cognitivo, social y emocional, y vinculación afectiva con sus cuidadores principales.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default Landing