import { useContext } from "react";
import NavLoginContext from "../context/NavLoginContext";
import CancelICon from "../assets/icons/bola-cash-cancel-icon.svg";
import TickICon from "../assets/icons/tick-icon.svg";

const Alert = () => {
    const { showModal, setShowModal } = useContext(NavLoginContext),
    modalStyle = showModal.on ? "fixed h-screen w-screen z-50" : "hidden",
    modalSectionStyle = showModal.success ? "w-[31rem] py-[1.8rem] px-[1.45rem] bg-white rounded-[14.24px]" : "w-[31rem] py-[1.8rem] px-[1.45rem] bg-red-700 text-white rounded-[14.24px]";

    return (
        <div className={modalStyle}>
            <div className="backdrop-blur-[2px] size-full bg-[rgba(34,139,34,0.2)] center">
                <div className={modalSectionStyle}>
                    <div className="min-h-[17.2rem] relative text-center center">
                        <h1 className="text-[2.15rem] font-semibold mb-[1rem] leading-[41px]">{showModal.heading}</h1>
                        <p className="mb-[1.5rem]">{showModal.message}</p>
                        <section className="absolute right-0 top-0 cursor-pointer"><img src={CancelICon} alt="cancel-icon" onClick={() => setShowModal({heading: "", message: "", on: false})} /></section>
                        <section><img src={TickICon} alt="tick-icon" /></section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;