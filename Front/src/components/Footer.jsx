import { socialMedia } from "../constants"
import styles from "../style"

const Footer = () => {
    return (
    <div>
        <div className="justify-between items-center md:flex-row flex-col pt-6 ">
            <p className="font-poppins font-normal text-center text-[18px] leading-[22px] text-white">
                Copyright Ⓒ 2023 UNAB.
            </p>

            <div className={`flex flex-row ${styles.flexCenter} p-10`}>
              {socialMedia.map((social, index) => (
                <img
                    key={social.id}
                    src={social.icon}
                    alt={social.id}
                    className={`w-[21px] h-[21px] object-contain cursor-pointer  ${
                      index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                    }`}
                    onClick={() => window.open(social.link)}
                />
              ))}
            </div>
        </div>
    </div>
    )
}

export default Footer