import { NavLink } from "react-router-dom";
import BolaCashLogo from "../assets/images/bola-cash-logo.png";
import GreenButton from "./GreenButton";

const Header = () => {
    const activeLinkStyle = ({ isActive }) => isActive ? "font-extrabold" : "font-normal"; 

    return (
        <header>
            <nav className="bg-white z-[1] h-[5rem] lg:h-[8rem] w-full flex justify-between items-center lg:absolute lg:top-[3.2rem] px-[2.287rem] lg:px-[11.2rem] bg-transparent fixed">
                <section>
                    <NavLink to="/"><section className="w-[2.96rem] h-[3rem] lg:w-[4.934rem] lg:h-[5rem]"><img src={BolaCashLogo} alt="Bola Cash Logo" className="size-full" /></section></NavLink>
                </section>
                <section>
                    <ul className="hidden lg:flex">
                        <li className="p-[1rem] mr-[4rem]"><NavLink to="/" className={activeLinkStyle}>Home</NavLink></li>
                        <li className="p-[1rem] mr-[4rem]"><NavLink to="/about" className={activeLinkStyle}>About</NavLink></li>
                        <li className="p-[1rem] mr-[4rem]"><NavLink to="/ecotips" className={activeLinkStyle}>EcoTips</NavLink></li>
                        <li className="p-[1rem]"><NavLink to="/contact" className={activeLinkStyle}>Contact</NavLink></li>
                    </ul>
                </section>
                <section>
                    <section>
                        <ul className="hidden lg:flex">
                            <li className="p-[1rem]">{<NavLink to="/login">Sign in</NavLink>}</li>
                            <li className="center ml-[1.6rem] mr-[1.05rem]">|</li>
                            <li>{<NavLink to="/login"><GreenButton className="p-[1rem]">Sign up</GreenButton></NavLink>}</li>
                        </ul>
                        <section className="w-[3rem] h-[3rem] py-[0.781rem] px-[0.281rem] flex flex-col justify-between lg:hidden">
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px]"></section>
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px]"></section>
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px]"></section>
                        </section>
                    </section>
                </section>
            </nav>
        </header>
    );
};

export default Header;