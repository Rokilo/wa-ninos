import styles from './style';
import LoginForm from './components/LoginForm';
import {NavbarLanding,  Footer} from './components';
import { fondolog } from './assets';


const Login = () => (

  
  <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarLanding/>
        </div>
      </div>

      <div className='bg-secondary pt-20  flex flex-col h-screen'style={{ backgroundImage: `url(${fondolog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={` ${styles.flexStart}  relative flex justify-center items-center `}>
            <div className={`${styles.boxWidth} `}>
              <LoginForm />
            </div>
          </div>
        </div>
      
  
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer/>
          </div>
        </div>
      

  </div>
);


export default Login