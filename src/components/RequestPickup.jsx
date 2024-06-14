import { useState, useContext } from "react";
import NavLoginContext from "../context/NavLoginContext";
import CancelICon from "../assets/icons/bola-cash-cancel-icon.svg";
import Caret from "../assets/icons/input-caret-white.svg";
import GreenButton from "./GreenButton";
import LocationIcon from "../assets/icons/location-icon.svg";
import { requestTrashPickUp } from "../requests/APIRequest";
import Spinner from "./Spinner";

const RequestPickup = () => {
    const { user, setRequestPickUp, setShowModal } = useContext(NavLoginContext);

    const [ isLoading, setIsLoading ] = useState(false);

    const [ formData, setFormData ] = useState({
        requestedBy: user._id,
        quantity: "",
        location: "",
        pickupTime: "",
        description: ""
        });

    const changeHandler = event => {
        let {name, value} = event.target;

        if (name === "pickupTime" && value.length > 4) {
            value = value.slice(0, 4);
        }

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const submitHandler = event => {
        event.preventDefault();

        setRequestPickUp(false);
        setIsLoading(true);


        requestTrashPickUp(formData)
        .then(data => {
            setIsLoading(false);

            setShowModal({
                heading: "Request Received",
                message: `We are now actively processing your request, you will receive a confirmation mail within 24hours.`,
                on: true,
                success: true
            });
        })
        .catch(error => {
            setIsLoading(false);

            setShowModal({
                heading: "Error",
                message: "There was an error with processing your request, kindly try again",
                on: true,
                success: false
            });
        });
    };

    return (
        <div className="fixed h-screen w-screen z-50">
            {isLoading && <Spinner />}
            <div className="backdrop-blur-[2px] size-full bg-[rgba(34,139,34,0.2)] center">
                <div className="w-[31rem] py-[1.8rem] px-[1.45rem] bg-white rounded-[14.24px] lg:w-[54rem]">
                    <form className="min-h-[17.2rem] relative text-center center" onSubmit={submitHandler}>
                        <h1 className="text-[2.15rem] font-semibold mb-[1rem] leading-[2.5rem]">Enter Amount of Recycleables</h1>
                        <p className="mb-[1rem]">Select the time you prefer to receive daily notifications and reminders</p>
                        <section className="w-[3rem] h-[3rem] absolute right-0 top-0 cursor-pointer"><img src={CancelICon} className="size-full" alt="cancel-icon" onClick={() => setRequestPickUp(false)} /></section>
                        <section>
                            <section className="w-[5.9rem] h-[5.2rem] bg-[#4EA24E] flex items-center rounded-[5.92px] gap-[0.8rem] p-[0.5rem] mb-[1.183rem]">
                                <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={changeHandler} placeholder="00" className="w-[70%] bg-transparent text-[#C1C1C1] text-[1.5rem]" required />
                                <section className="w-[30%] center">
                                    <img src={Caret} className="rotate-[180deg]" alt="Caret Icon" onClick={() => {
                                        setAmount(prevState => {
                                            return prevState - 1 < 0 ? 0 : prevState - 1;
                                        });
                                    }} />
                                    <img src={Caret} alt="Caret Icon" onClick={() => {
                                        setAmount(prevState => prevState + 1);
                                    }} />
                                </section>
                            </section>
                        </section>
                        <section className="h-[3.7rem] w-full mb-[1.183rem] rounded-[5.92px] px-[0.74rem] border border-[#4EA24E] flex items-center justify-between">
                            <input type="text" name="location" id="location" value={formData.location} onChange={changeHandler} placeholder="Location" className="w-[calc(100%-3rem)]" required />
                            <img src={LocationIcon} alt="Location Icon" className="block w-[8%] lg:w-[2.5rem] lg:h-[2.5rem]" />
                        </section>
                        <input type="text" name="pickupTime" id="pickupTime" value={formData.pickupTime} onChange={changeHandler} placeholder="Pickup Time" className="h-[3.7rem] w-full mb-[1.183rem] rounded-[5.92px] px-[0.74rem] border border-[#4EA24E]" required />
                        <input type="text" name="description" id="description" value={formData.description} onChange={changeHandler} placeholder="Description" className="h-[3.7rem] w-full mb-[1.775rem] rounded-[5.92px] px-[0.74rem] border border-[#4EA24E]" required />
                        <GreenButton className="w-full h-[3.7rem] font-semibold rounded-[2.96px]">Request for Pickup</GreenButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestPickup;