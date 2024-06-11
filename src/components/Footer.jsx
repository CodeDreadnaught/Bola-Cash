import { useContext } from "react";
import { Link } from "react-router-dom";
import NavLoginContext from "../context/NavLoginContext";
import BolaCashLogo from "../assets/icons/bola-cash-logo-icon.svg";
import GreenButton from "./GreenButton";
import InstagramIcon from "../assets/icons/instagram.svg";
import InstagramWhiteIcon from "../assets/icons/instagram-white.svg";
import TelegramIcon from "../assets/icons/telegram.svg";
import TelegramWhiteIcon from "../assets/icons/telegram-white.svg";
import XIcon from "../assets/icons/x.svg";
import XWhiteIcon from "../assets/icons/x-white.svg";

const Footer = () => {
    const { setIfClickSignIn } = useContext(NavLoginContext), 
    currentYear = new Date().getFullYear();

    return (
        <footer className="md:pt-[6.4rem] md:flex md:gap-[2.4rem">
            <section className="px-[2.4rem] md:pl-[10.8rem] mb-[3rem] md:w-[70.8rem]">
                <section className="size-[6rem] md:size-[12.5rem]"><img src={BolaCashLogo} alt="Bola Cash Logo" className="size-full object-cover" /></section>
                <p className="my-[1.2rem] leading-[1.936rem] md:my-[3.2rem] md:text-[2.4rem] md:leading-[3.6rem]">Click the button below to get started and be a part of the change!</p>
                <Link to="/login" onClick={() => setIfClickSignIn(false)}><GreenButton className="py-[1.35rem] px-[3rem] md:py-[1.4rem] md:px-[3.2rem]">Get Started</GreenButton></Link>
            </section>
            <section className="pl-[2.4rem] md:pl-0">
                <section className="rounded-tl-[5.912rem] md:rounded-tl-[12.8rem] md:w-[70.8rem] p-[3rem] md:p-[6.4rem] border border-[#228B22] md:bg-[#228B22] md:text-white">
                    <section className="md:flex justify-between">
                        <section className="font-medium mb-[6rem]">
                            <h4 className="text-[#B1A9A9] md:text-white text-[1rem] leading-[1.5rem] tracking-[6%] mb-[1rem] md:text-[1.2rem] md:leading-[1.8rem] md:mb-[1.6rem]">CONTACT</h4>
                            <p className="leading-[2.08rem] mb-[0.2rem] md:mb-[0.4rem] md:text-[1.8rem]  md:leading-[2.34rem]">+234 90 4020 2143</p>
                            <p className="leading-[2.08rem] md:text-[1.8rem]  md:leading-[23.4rem">bolacash@gmail.com</p>
                        </section>
                        <section>
                            <h4 className="text-[#B1A9A9] md:text-white text-[1rem] leading-[1.5rem] tracking-[6%] mb-[1rem] md:text-[1.2rem] md:leading-[1.8rem] md:mb-[1.6rem]">FOLLOW US</h4>
                            <section className="flex gap-[0.5rem]">
                                <span className="block size-[6rem] md:size-[5rem] rounded-[50%] center border border-black md:border-none">
                                    <img src={InstagramIcon} alt="Social Icon" className="md:hidden block" />
                                    <img src={InstagramWhiteIcon} alt="Social Icon" className="hidden md:block" />
                                </span>
                                <span className="block size-[6rem] md:size-[5rem] rounded-[50%] center border border-black md:border-none">
                                    <img src={XIcon} alt="Social Icon" className="md:hidden block" />
                                    <img src={XWhiteIcon} alt="Social Icon" className="hidden md:block" />
                                </span>
                                <span className="block size-[6rem] md:size-[5rem] rounded-[50%] center border border-black md:border-none">
                                    <img src={TelegramIcon} alt="Social Icon" className="md:hidden block" />
                                    <img src={TelegramWhiteIcon} alt="Social Icon" className="hidden md:block" />
                                </span>
                            </section>
                        </section>
                    </section>
                    <section className="mt-[6rem] text-[1rem] leading-[1.5rem] text-[#36382E] md:text-[1.2rem] md:leading-[1.8rem]">&copy; {currentYear}—Copyright</section>
                </section> 
            </section>
        </footer>
    );
};

export default Footer;