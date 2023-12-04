import { Link } from 'react-router-dom'
import { logo, people01 } from '../assets';
import { navHome } from '../constants'

const NavbarHome = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="niñospower" className="w-[64px] h-[64-px]"/>
            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                {navHome.map((nav, index) => (
                    <li
                        key = {nav.id}
                        className={`font-poppins font-bold cursor-pointer text-[20px] 
                        ${index === navHome.length - 1 ? 'mrg-0' : 'mr-10'} text-white`}
                    >
                        <Link to={nav.nav}>{nav.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="py-1 px-5 font-bold cursor-pointer">
                <img src={people01} className='h-12 w-12'/>
            </div>
            <details className="dropdown">
                <summary className="m-1 btn font-poppins font-bold text-[20px] cursor-pointer">Rokilo</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <Link to="/login">Cerrar Sesion</Link>
                </ul>
            </details>
        </nav>
    )
}

export default NavbarHome