import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import NavLoginContext from "../context/NavLoginContext";
import HeaderProfileSection from "./HeaderProfileSection";
import RequestPickup from "./RequestPickup";
import BolaCashLogo from "../assets/icons/bola-cash-logo-icon.svg";
import GreenButton from "./GreenButton";

const Header = () => {
    const [ showMobileNavigation, setShowMobileNavigation ] = useState(false),
    { headerBg, user, setIfClickSignIn, setClickProfileIcon, requestPickUp, setRequestPickUp } = useContext(NavLoginContext);

    const activeLinkStyle = ({ isActive }) => isActive ? "font-extrabold gen-transistion" : "font-normal gen-transistion",
    hamburgerStyles = showMobileNavigation ? "hamburger-icon w-[3rem] h-[3rem] py-[0.781rem] px-[0.281rem] flex flex-col justify-between lg:hidden active" : "hamburger-icon w-[3rem] h-[3rem] py-[0.781rem] px-[0.281rem] flex flex-col justify-between lg:hidden";
    
    const toggleMenu = () => {
        setShowMobileNavigation(prevState => !prevState);
        setClickProfileIcon(false);
    };

    return (
        <header>
            {requestPickUp && <RequestPickup />}
            <nav className={`${headerBg} z-[1] h-[5rem] lg:h-[8rem] w-full flex justify-between items-center lg:absolute lg:top-[3.2rem] px-[2.287rem] lg:px-[11.2rem] fixed`}>
                <section>
                    <NavLink to="/"><section className="w-[2.96rem] h-[3rem] lg:w-[4.934rem] lg:h-[5rem]"><img src={BolaCashLogo} alt="Bola Cash Logo" className="size-full" /></section></NavLink>
                </section>
                <section>
                    <ul className="hidden lg:flex">
                        <li className="p-[1rem] mr-[4rem]"><NavLink to="/" className={activeLinkStyle}>Home</NavLink></li>
                        <li className="p-[1rem] mr-[4rem]"><NavLink to="/about" className={activeLinkStyle}>About</NavLink></li>
                        <li className="p-[1rem]"><NavLink to="/ecotips" className={activeLinkStyle}>EcoTips</NavLink></li>
                    </ul>
                </section>
                <section>
                    <section>
                        <ul className="hidden lg:flex items-center">
                            <li>
                                {user ? <HeaderProfileSection onClickMenu={setShowMobileNavigation} /> :
                                <NavLink onClick={() => setIfClickSignIn(true)} to="/login" className="p-[1rem]">Sign in</NavLink>}
                            </li>
                            <li className="center ml-[1.6rem] mr-[1.05rem]">|</li>
                            <li>{user ? <NavLink onClick={() => {
                                            setRequestPickUp(true);
                                        }}><GreenButton className="p-[1rem]">Request for Pickup</GreenButton></NavLink> :
                                <NavLink onClick={() => setIfClickSignIn(false)} to="/login"><GreenButton className="p-[1rem]">Sign up</GreenButton></NavLink>}
                            </li>
                        </ul>
                        <section className={hamburgerStyles}>
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px]" onClick={toggleMenu}></section>
                            <section className="h-[0.188rem] bg-[#292D32] rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
                            <section className="mobile-navigation-menu fixed top-[5rem] left-[-150vw] w-full bg-[#f2f2f2] p-[1rem] h-[calc(100vh-5rem)] flex flex-col justify-between gen-transistion">
                                <ul>
                                    <li className="h-[4rem] center"><NavLink to="/" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Home</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/about" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>About</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/ecotips" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>EcoTips</NavLink></li>
                                </ul>
                                <ul>
                                    <li className="h-[4rem] center">{
                                        user ? <HeaderProfileSection onClickMenu={setShowMobileNavigation} /> : 
                                        <NavLink to="/login" className="h-full flex items-end" onClick={() => {
                                            setIfClickSignIn(true);
                                            setShowMobileNavigation(false);
                                        }}>Sign in</NavLink>}
                                    </li>
                                    <li className="center mb-[0.5rem]">—</li>
                                    <li className="h-[4.3rem] center">
                                        {user ? <NavLink onClick={() => {
                                            setShowMobileNavigation(false);
                                            setRequestPickUp(true);
                                            setClickProfileIcon(false);
                                        }}><GreenButton className="p-[1rem]">Request for Pickup</GreenButton></NavLink> : 
                                        <NavLink to="/login" onClick={() => {
                                            setIfClickSignIn(false);
                                            setShowMobileNavigation(false);
                                            }}>
                                                <GreenButton className="p-[1rem]">Sign up</GreenButton>
                                            </NavLink>}
                                    </li>
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