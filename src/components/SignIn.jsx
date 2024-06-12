import { useState } from "react";

const SignIn = props => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const changeHandler = event => {
        const {name, value} = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const submitHandler = event => {
        event.preventDefault();
        props.onSubmitForm(formData);
    }

    return (
        <form className="lg:w-[55rem] lg:p-[2rem]" onSubmit={submitHandler}>
            <section>
                <h1 className="text-center font-semibold lg:text-[3rem] lg:mb-[0.4rem] text-[2.4rem] mb-[0.476rem]">Sign In</h1>
                <p className="text-center leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2rem] mb-[1.3rem] lg:mb-[2rem] text-[1.5rem] px-[1rem] lg:px-0">Input your login credentials to access your Bola Cash Account</p>
                <section className="flex flex-col items-center lg:mt-[2rem]">
                    <input type="email" name="email" required onChange={changeHandler} value={formData.email} className="lg:w-[35.2rem] lg:h-[4.2rem] my-[0.9rem] lg:my-[1.3rem] placeholder:text-[1.43rem]  w-[25.928rem] h-[3.5rem] border border-[#6BB16B] px-[0.9rem] rounded-[0.2rem] lg:px-[1rem]" placeholder="Email" />
                    <input type="password" name="password" required onChange={changeHandler} value={formData.password} className="lg:w-[35.2rem] my-[0.9rem] lg:h-[4.2rem] placeholder:text-[1.43rem] lg:my-[1.3rem]  w-[25.928rem] h-[3.5rem] border border-[#6BB16B] px-[0.9rem] rounded-[0.2rem] lg:px-[1rem]" placeholder="Password" />
                    <button className="lg:w-[35.2rem] lg:h-[4.3rem] bg-[#228B22] w-[25.928rem] h-[3.6rem] font-semibold lg:text-[1.8rem] text-white rounded-[4px] mt-[1rem]">Sign In</button>
                </section>
            </section>
        </form>
    );
};

export default SignIn;