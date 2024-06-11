import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import NavLoginContext from "../context/NavLoginContext";
import BolaCashLogo from "../assets/images/bola-cash-logo.png";
import GreenButton from "./GreenButton";

const Header = () => {
    const [ showMobileNavigation, setShowMobileNavigation ] = useState(false),
    { setIfClickSignIn } = useContext(NavLoginContext),
    activeLinkStyle = ({ isActive }) => isActive ? "font-extrabold gen-transistion" : "font-normal gen-transistion",
    hamburgerStyles = showMobileNavigation ? "hamburger-icon w-[3rem] h-[3rem] py-[0.781rem] px-[0.281rem] flex flex-col justify-between lg:hidden active" : "hamburger-icon w-[3rem] h-[3rem] py-[0.781rem] px-[0.281rem] flex flex-col justify-between lg:hidden";
    
    const toggleMenu = () => {
        setShowMobileNavigation(prevState => !prevState);
    };

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
                            <li onClick={() => setIfClickSignIn(true)} className="p-[1rem]">{<NavLink to="/login">Sign in</NavLink>}</li>
                            <li className="center ml-[1.6rem] mr-[1.05rem]">|</li>
                            <li onClick={() => setIfClickSignIn(false)}>{<NavLink to="/login"><GreenButton className="p-[1rem]">Sign up</GreenButton></NavLink>}</li>
                        </ul>
                        <section className={hamburgerStyles}>
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px]" onClick={toggleMenu}></section>
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
                            <section className="mobile-navigation-menu fixed top-[5rem] left-[-150vw] w-full bg-[#f2f2f2] p-[1rem] h-[calc(100%-5rem)] flex flex-col justify-between gen-transistion">
                                <ul>
                                    <li className="h-[4rem] center"><NavLink to="/" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Home</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/about" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>About</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/ecotips" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>EcoTips</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/contact" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Contact</NavLink></li>
                                </ul>
                                <ul>
                                    <li className="h-[4rem] center" onClick={() => setIfClickSignIn(true)}>{<NavLink to="/login" className="h-full flex items-end" onClick={() => setShowMobileNavigation(false)}>Sign in</NavLink>}</li>
                                    <li className="center mb-[0.5rem]">—</li>
                                    <li className="h-[4.3rem] center" onClick={() => setIfClickSignIn(false)}>{<NavLink to="/login" onClick={() => setShowMobileNavigation(false)}><GreenButton className="p-[1rem]">Sign up</GreenButton></NavLink>}</li>
                                </ul>
                            </section>
                        </section>
                    </section>
                </section>
            </nav>
        </header>
    );
};

export default Header;