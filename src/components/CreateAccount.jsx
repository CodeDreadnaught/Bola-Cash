import { useState } from "react";
import LocationIcon from "../assets/icons/location-icon.svg";

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
        location: ""
    });

    const changeHandler = event => {
        let {name, value} = event.target,
        maxPhoneNumberLength = 11;

        if (name === "contactNumber" && value.length > maxPhoneNumberLength) {
            value = value.slice(0, maxPhoneNumberLength);
        }

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const submitHandler = event => {
        event.preventDefault();

        if (formData.password === formData.confirmPassword) {
            console.log("CORRREct");
        }

        // console.log(formData);
    }

    return (
        <form className="lg:w-[55rem] lg:p-[2rem]" onSubmit={submitHandler}>
            <section>
                <h1 className="text-center font-semibold lg:text-[3rem] lg:mb-[0.4rem] text-[2.4rem] mb-[0.476rem]">Create Account</h1>
                <p className="text-center leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2rem] mb-[1.3rem] lg:mb-[2rem] text-[1.5rem] px-[1rem] lg:px-0">Click on the Sign In button in the welcome section to login if you already have an account</p>
                <section className="flex flex-col items-center lg:mt-[2rem]">
                    <input type="text" name="username" required onChange={changeHandler} value={formData.username} placeholder="User Name" className="lg:w-[35.2rem] placeholder:text-[1.43rem] lg:h-[4.2rem]  w-[25.928rem] h-[3.5rem] border border-[#6BB16B] px-[0.9rem] rounded-[0.2rem] lg:px-[1rem]" />
                    <input type="email" name="email" required onChange={changeHandler} value={formData.email} className="lg:w-[35.2rem] lg:h-[4.2rem] my-[0.9rem] lg:my-[1.3rem] placeholder:text-[1.43rem]  w-[25.928rem] h-[3.5rem] border border-[#6BB16B] px-[0.9rem] rounded-[0.2rem] lg:px-[1rem]" placeholder="Email" />
                    <input type="number" name="contactNumber" required onChange={changeHandler} value={formData.contactNumber} className="lg:w-[35.2rem] placeholder:text-[1.43rem] lg:h-[4.2rem]  w-[25.928rem] h-[3.5rem] border border-[#6BB16B] px-[0.9rem] rounded-[0.2rem] lg:px-[1rem]" placeholder="Contact Number" />
                    <input type="password" name="password" required onChange={changeHandler} value={formData.password} className="lg:w-[35.2rem] my-[0.9rem] lg:h-[4.2rem] placeholder:text-[1.43rem] lg:my-[1.3rem]  w-[25.928rem] h-[3.5rem] border border-[#6BB16B] px-[0.9rem] rounded-[0.2rem] lg:px-[1rem]" placeholder="Password" />
                    <input type="password" name="confirmPassword" required onChange={changeHandler} value={formData.confirmPassword} className="lg:w-[35.2rem] placeholder:text-[1.43rem] lg:h-[4.2rem]  w-[25.928rem] h-[3.5rem] border border-[#6BB16B] px-[0.9rem] rounded-[0.2rem] lg:px-[1rem]" placeholder="Confirm Password" />
                    <section className="flex lg:w-[35.2rem] lg:h-[4.2rem] lg:mt-[1.3rem] lg:mb-[1.6rem] my-[0.9rem] w-[25.928rem] h-[3.5rem] border border-[#6BB16B] px-[0.9rem] rounded-[0.2rem] lg:px-[1rem]">
                        <input type="text" name="location" onChange={changeHandler} value={formData.location} className="inline-block w-[92%] placeholder:text-[1.43rem] h-[3.5rem]" placeholder="Location (Optional)" />
                        <img src={LocationIcon} alt="Location Icon" className="block w-[8%]" />
                    </section>
                    <button className="lg:w-[35.2rem] lg:h-[4.3rem] bg-[#228B22] w-[25.928rem] h-[3.6rem] font-semibold lg:text-[1.8rem] text-white rounded-[4px] mt-[1rem]">Sign Up</button>
                </section>
            </section>
        </form>
    );
};

export default CreateAccount;