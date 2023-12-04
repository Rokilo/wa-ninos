import { Link } from 'react-router-dom'
import { logo } from '../assets';
import { navLinks } from '../constants'

const NavbarLanding = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="niñospower" className="w-[64px] h-[64-px]"/>
            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key = {nav.id}
                        className={`font-poppins font-bold cursor-pointer text-[20px] 
                        ${index === navLinks.length - 1 ? 'mrg-0' : 'mr-10'} text-white`}
                    >
                        <a href={`${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="bg-secondary rounded-full py-1 px-5 font-bold cursor-pointer">
                <Link to="login">Ingresar</Link>
            </div>
        </nav>
    )
}

export default NavbarLanding