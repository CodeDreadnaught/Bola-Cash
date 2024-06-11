import { useEffect, useState, useContext } from "react";
import NavLoginContext from "../context/NavLoginContext";
import { createAccount, signIn } from "../requests/APIRequest";
import { Helmet, HelmetProvider } from "react-helmet-async";
import RecycleBackground from "../assets/images/landing-page-images/repeated-recycle-icon-background.png";
import CreateAccount from "../components/CreateAccount";
import SignIn from "../components/SignIn";

const Login = () => {
    const signInElement = <SignIn onSubmitForm={signIn} />,
    createAccountElement = <CreateAccount onSubmitForm={createAccount} />;

    const { ifClickSignIn, setIfClickSignIn } = useContext(NavLoginContext),
    [displayedFormElement, setDisplayedFormElement] = useState(ifClickSignIn ? signInElement : createAccountElement);

    useEffect(()=> {
        if (ifClickSignIn) {
            setDisplayedFormElement(signInElement);
        } else {
            setDisplayedFormElement(createAccountElement);
        }

    }, [ifClickSignIn]);

    const clickHandler = () => {
        setIfClickSignIn(prevState => !prevState);
    };

    const style = ifClickSignIn ? "flex flex-col-reverse md:flex-row bg-white rounded-[20px] shadow-[0_0_0.1rem_#6BB16B] w-full linear-transistion" : "linear-transistion p-[1rem] md:p-0 flex flex-col-reverse md:flex-row bg-white rounded-[20px] shadow-[0_0_0.1rem_#6BB16B] w-full activate-position";

    return (
        <HelmetProvider>
            <main className="overflow-hidden">
                <Helmet>
                    <title>{ifClickSignIn ? "Login" : "Register"} | Bola Cash</title>
                </Helmet>
                <img src={RecycleBackground} className="fixed size-full object-cover z-[3] scale-[1.2] opacity-[0.07]" />
                <div className="fixed size-full z-[2] bg-white"></div>
                <div className="login-page fixed size-full z-[4] md:p-[4rem] p-[1.2rem] center">
                        <div className={style}>
                            <section className="login-page-modal linear-transistion md:w-[50%] md:h-[calc(60rem-4rem)] relative z-[7] center rounded-tl-[20px] rounded-bl-[20px] h-[calc(18rem-2.4rem)]">
                                <section className="login-backdrop size-full absolute z-[3]"></section>
                                <section className="login-backdrop-screen size-full absolute z-[3]"></section>
                                    <section className="text-center relative z-[5]">
                                        <h1 className="md:text-[4.8rem] gen-transistion font-semibold md:leading-[7.2rem] md:mb-[1.6rem] text-[2.4rem]">{ifClickSignIn? "Welcome!" : "Welcome Back!"}</h1>
                                        <p className="md:text-[2.3rem] gen-transistion md:leading-[2.905rem] md:mb-[4.6rem] mb-[1.5rem] leading-[1.936rem]">{ifClickSignIn? "To connect with us, kindly create an account by clicking the register button" : "Already have an account? Click the button below to Log In"}</p>
                                        <button onClick={clickHandler} className="md:py-[1.4rem] gen-transistion md:px-[3.2rem] md:text-[2.251rem] md:leading-[2.724rem] px-[1.858rem] py-[1.45rem] leading-[1.936rem] rounded-[2px] font-semibold md:rounded-[4px] border border-[#0E3A0E]">{ifClickSignIn? "Register" : "Sign In"}</button>
                                    </section>
                            </section>
                            <section className="login-info-modal linear-transistion md:w-[50%] md:h-[calc(60rem-4rem)] static z-[6] md:rounded-tr-[20px] md:rounded-br-[2rem] center h-[calc(45rem-2.4rem)]">
                                {displayedFormElement}
                            </section>
                        </div>
                </div>
            </main>
        </HelmetProvider>);
};

export default Login;