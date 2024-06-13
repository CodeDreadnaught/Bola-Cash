import { useState } from "react";
import CancelICon from "../assets/icons/bola-cash-cancel-icon.svg"
import Caret from "../assets/icons/input-caret-white.svg"

const RequestPickup = () => {
    const [showModal, setShowModal ] = useState({
        heading: "You're Logged In",
        message: "Lets get right into the art of turning your trash to funds.",
        on: true,
        success: true
    });

    return (
        <div className="fixed h-screen w-screen z-50">
            <div className="backdrop-blur-[2px] size-full bg-[rgba(34,139,34,0.2)] center">
                <div className="w-[31rem] py-[1.8rem] px-[1.45rem] bg-white rounded-[14.24px]">
                    <form className="min-h-[17.2rem] relative text-center center">
                        <h1 className="text-[2.15rem] font-semibold mb-[1rem] leading-[2.5rem]">Enter Amount of Recycleables</h1>
                        <p className="mb-[1rem]">Select the time you prefer to receive daily notifications and reminders</p>
                        <section className="w-[3rem] h-[3rem] absolute right-0 top-0 cursor-pointer"><img src={CancelICon} className="size-full" alt="cancel-icon" onClick={() => setShowModal({heading: "", message: "", on: false})} /></section>
                        <section>
                            <section className="w-[5.9rem] h-[5.2rem] bg-[#4EA24E] flex items-center rounded-[5.92px] gap-[0.8rem] p-[0.5rem] mb-[1.183rem]">
                                <input type="number" name="" id="" className="w-[70%] bg-transparent text-[#C1C1C1] text-[1.5rem]" />
                                <section className="w-[30%] center">
                                    <img src={Caret} className="rotate-[180deg]" alt="" />
                                    <img src={Caret} alt="" />
                                </section>
                            </section>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestPickup;