import { useContext } from "react";
import NavLoginContext from "../context/NavLoginContext";
import { Link } from "react-router-dom";
import ProfileIcon from "../assets/icons/empty-profile-icon.svg";
import CaretIcon from "../assets/icons/caret-up-icon.svg";

const HeaderProfileSection = props => {
    const { clickProfileIcon, setClickProfileIcon, setIfClickSignIn, setUser, setToken } = useContext(NavLoginContext);

    const caretStyle = {
        transform: clickProfileIcon ? "" : "rotate(180deg)",
        transition: "all 0.35s ease-in-out"
    },
    menuStyle = clickProfileIcon ? "fixed bottom-[20dvh] lg:absolute lg:right-[30.7rem] lg:bottom-auto lg:left-auto lg:top-[8rem] lg:w-[min-content] w-screen left-0 flex justify-center opacity-1 gen-transistion" : "lg:right-[30.7rem] lg:top-[-1rem] gen-transistion fixed lg:absolute lg:left-auto lg:bottom-auto lg:top-[2rem] lg:w-[min-content] bottom-[-40dvh] w-screen left-0 flex justify-center opacity-0";

    return (
        <section className="w-[13.1rem]">
            <section className="flex justify-between items-center lg:relative" onClick={() => setClickProfileIcon(prevState => !prevState)}>
                <img src={ProfileIcon} alt="Profile Icon" className="cursor-pointer" />
                <span className="cursor-pointer">Profile</span>
                <img src={CaretIcon} style={caretStyle} alt="Navigation Arrow Icon" className="cursor-pointer" />
            </section>
            <section className={menuStyle}>
                <section className="w-[18.1rem] px-[1.6rem] py-[0.8rem] rounded-[12px] bg-[rgba(233,243,233,1)] opacity-1">
                    <ul className="w-full" onClick={() => {
                    setClickProfileIcon(prevState => !prevState);
                    props.onClickMenu(false);
                    }}>
                        <li className="h-[3.9rem] flex items-center border-b border-[rgba(34,139,34,0.5)]"><Link>My Profile</Link></li>
                        <li className="h-[3.9rem] flex items-center border-b border-[rgba(34,139,34,0.5)]"><Link>Security Settings</Link></li>
                        <li className="h-[3.9rem] flex items-center"><Link to="/login" onClick={() => {
                            setIfClickSignIn(true);
                            setUser(null);
                            setToken(null);
                            localStorage.removeItem("site");
                            }}>Sign Out</Link></li>
                    </ul>
                </section>
            </section>
        </section>
    );
};

export default HeaderProfileSection;