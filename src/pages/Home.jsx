import HeroImage from "../assets/images/landing-page-images/hero-section-image.png";
import RecycleBackground from "../assets/images/landing-page-images/repeated-recycle-icon-background.png";
import FirstCardImage from "../assets/images/landing-page-images/recycle-bottle-can.jpg";
import SecondCardImage from "../assets/images/landing-page-images/medal-image.jpg";
import ThirdCardImage from "../assets/images/landing-page-images/group-recycle-image.png";
import EcoWisdomImage from "../assets/images/landing-page-images/unlock-eco-wisdom.svg";
import HowItWorksImage from "../assets/images/landing-page-images/how-it-works.svg";
import OrderIconImage from "../assets/images/landing-page-images/landing-page-order-icon.svg";
import GreenButton from "../components/GreenButton";
import ServiceCards from "../components/ServiceCards";
import { useEffect, useContext } from "react";
import NavLoginContext from "../context/NavLoginContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
    const { setHeaderBg, user, setIfClickSignIn } = useContext(NavLoginContext);

    useEffect(() => {
        setHeaderBg("bg-white");
    }, []);

    return(
            <HelmetProvider>
                <main className="overflow-x-hidden">
                <Helmet>
                    <title>Bola Cash</title>
                </Helmet>
                    <div className="px-[2.4rem] pt-[7rem] lg:pt-[18.2rem] lg:px-[11.2rem]">
                    <div className="lg:flex items-center lg:gap-[3rem] relative">
                        <section className="mb-[3rem] lg:mb-[0] lg:w-[70rem]">
                            <h1 className="font-semibold text-[2.4rem] mb-[1.2rem] lg:mb-[1.6rem]  leading-[1.2] lg:text-[4.8rem] lg:leading-[7rem]">Empower Change: Transforming Tomorrow, Today!</h1>
                            <p className="mb-[1.2rem] lg:text-[2.4rem] lg:mb-[2rem]">Join the movement to make a difference! Discover the power of recycling and be a part of the solution. Together, let's create a cleaner, greener future for generations to come. Click below to get started!</p>
                            <Link to={user ? "/ecotips" : "/login"} onClick={() => setIfClickSignIn(false)}><GreenButton className="py-[1.6rem] px-[2.2rem] lg:py-[1.4rem] lg:px-[3.2rem] font-semibold">{user ? "Explore" : "Get Started"}</GreenButton></Link>
                        </section>
                        <section className="lg:w-[100%-70rem] lg:h-full">
                            <img src={HeroImage} alt="Hero Image" className="lg:block" />
                        </section>
                        <img src={RecycleBackground} alt="Background Fading Image" className="recycle-image absolute hidden top-[183%] opacity-5 z-[-1] lg:block object-cover scale-[1.5] " />
                    </div>
                    <div className="my-[3rem] lg:mt-[16.4rem]">
                        <h1 className="text-[2rem] font-semibold leading-[2.42rem] mb-[0.5rem] lg:text-[4rem] lg:leading-[4.841rem] lg:text-center lg:mb-[1.6rem]">Our Key Services</h1>
                        <p className="text-[#444444] leading-[1.936rem] lg:text-center lg:text-[1.75rem] lg:leading-[3rem]">Discover the power of our features! From finding nearby recycling centers to earning rewards for your eco-friendly actions, our platform offers everything you need to make a positive impact on the planet. Explore now and start your journey towards a greener future.</p>
                    </div>
                        <div className="flex flex-col gap-[3rem] lg:flex-row lg:gap-[2.4rem]">
                            <ServiceCards image={FirstCardImage} title="Collection of Recyclables" description="Make a difference with every item recycled! Our collection of recyclables feature makes it easy to dispose of materials responsibly. Join us in keeping our planet clean and green. Start recycling today!" />
                            <ServiceCards image={SecondCardImage} title="Rewards" description="Earn rewards while you save the planet! Our rewards program allows you to earn points for every item recycled. Start collecting rewards and make a positive impact on the environment today!" />
                            <ServiceCards image={ThirdCardImage} title="Recycling Tips/ Education" description="Eco-wisdom at your fingertips! Explore our recycling tips and education section for practical advice on reducing waste and recycling smarter. Join us in creating a greener tomorrow!" />
                        </div>
                        <div className="my-[3rem] lg:my-[22.4rem] lg:flex lg:gap-[4.9rem]">
                            <section className="mb-[3rem] lg:mb-0 lg:w-[60rem]">
                                <span>
                                    <h2 className="text-[2.4rem] leading-[2.905rem] font-semibold mb-[1.2rem] lg:text-[4rem] lg:leading-[4.841rem] lg:mb-[2.4rem]">Unlock Eco-Wisdom</h2>
                                </span>
                                <p className="leading-[1.936rem] mb-[1.2rem] lg lg:text-justify lg:text-[2rem] lg:leading-[3rem]:text-[2.4rem] lg:leading-[3.6rem] lg:mb-[4.6rem]">Discover the secrets to living green and making a positive impact on the planet! Dive into our recycling tips and education section for practical advice, helpful resources, and eco-friendly inspiration. Together, let's embrace a more sustainable way of living. Start exploring now!</p>
                                <Link to="/ecotips"><GreenButton className="font-semibold leading-[1.936rem] py-[1.514rem] px-[3.763rem] lg:text-[2.251rem] lg:leading-[2.724rem] lg:py-[1.4rem] lg:px-[3.2rem]">Explore</GreenButton></Link>
                            </section>
                            <section className="lg:w-[calc(100%-60rem)]">
                                <img src={EcoWisdomImage} alt="Eco Wisdom Image" className="w-[32.7rem] h-[22.4rem] lg:size-full" />
                            </section>
                        </div>
                        <div className="mb-[3rem] lg:mb-[22.4rem]">
                            <section>
                                <h2 className="text-[2.4rem] lg:text-[4rem] leading-[2.905rem] lg:leading-[3rem] font-semibold mb-[0.5rem] lg:mb-[1.6rem]">How it Works</h2>
                                <p className="leading-[1.936rem] text-[#444444] lg:text-[2rem] lg:leading-[3rem]">Curious about how our recycling system works? It's as easy as 1-2-3! Follow these simple steps to start making a difference today. From finding nearby recycling centers to tracking your environmental impact, we've got you covered every step of the way. Let's get started!</p>
                            </section>
                            <section className="my-[3rem] lg:flex lg:my-0 lg:mt-[4rem] lg:mb-[4.6rem] lg:gap-[8.2rem]">
                                <section className="lg:w-[56.7rem]">
                                    <section className="lg:mb-[1.6rem]">
                                        <h2 className="text-[2.4rem] leading-[2.905rem] mb-[0.208rem] lg:mb-[0.8rem] font-semibold"><span className="block lg:inline">Step 1:</span> Sign up on BolaCash</h2>
                                        <p className="leading-[1.936rem] text-[#444444] lg:text-justify lg:text-[2rem] lg:leading-[3rem]">Join our community of eco-conscious individuals by creating your account. Signing up is quick and easy, and it unlocks a world of opportunities to make a positive impact on the planet. Get started on your journey towards a greener lifestyle today!</p>
                                    </section>
                                    <section className="my-[3rem] lg:my-0">
                                        <h2 className="text-[2.4rem] leading-[2.905rem] mb-[0.208rem] lg:mb-[0.8rem] font-semibold"><span className="block lg:inline">Step 2:</span> Get recyclables</h2>
                                        <p className="leading-[1.936rem] text-[#444444] lg:text-justify lg:text-[2rem] lg:leading-[3rem]">Gather your recyclables and prepare to make a difference! Collect plastics, paper, glass, and more, and get ready to give them a new life through recycling. Every item you recycle brings us one step closer to a cleaner, greener future. Let's start recycling together!</p>
                                    </section>
                                </section>
                                <section className="lg:w-[56.7rem] lg:overflow-hidden">
                                    <img src={HowItWorksImage} alt="How It Works Icon" className="lg:size-full lg:scale-[1.2]" />
                                </section>
                            </section>
                            <section  className="grid-container lg:flex lg:gap-[8.2rem]">
                                <section className="grid-container-image lg:w-[56.7rem] lg:center">
                                    <img src={OrderIconImage} alt="Order Icon" className="lg:w-[56.7rem] lg:h-[39rem]" />
                                </section>
                                <section className="grid-container-text lg:w-[56.7rem]">
                                    <section className="mb-[3rem] lg:mb-[1.6rem]">
                                        <h2 className="text-[2.4rem] leading-[2.905rem] mb-[0.208rem] lg:mb-[0.8rem] font-semibold"><span className="block lg:inline">Step 3:</span> Request for Pickup or drop off at our recycle center</h2>
                                        <p className="leading-[1.936rem] text-[#444444] lg:text-justify lg:text-[2rem] lg:leading-[3rem]">Convenience meets sustainability with our pickup or drop-off option! Simply request a pickup for your recyclables or drop them off at our designated recycling center. We'll handle the rest, ensuring your items are recycled responsibly. Start your eco-friendly journey today with ease and convenience!</p>
                                    </section>
                                    <section className="mb-[3rem] lg:mb-0">
                                        <h2 className="text-[2.4rem] leading-[2.905rem] mb-[0.208rem] lg:mb-[0.8rem] font-semibold"><span className="block lg:inline">Step 4:</span> Collect your reward</h2>
                                        <p className="leading-[1.936rem] text-[#444444] lg:text-justify lg:text-[2rem] lg:leading-[3rem]">Congratulations on your eco-friendly efforts! It's time to reap the rewards for your sustainable actions. Collect points or incentives for every item you recycle and exchange them for exciting rewards. Your commitment to recycling not only benefits the environment but also earns you valuable rewards. Start collecting your rewards today and make a positive impact!</p>
                                    </section>
                                </section>
                            </section>
                        </div>
                    </div>
                    <div className="bg-[#228B22] text-white px-[2.4rem] py-[1.2rem] lg:px-[11.2rem] lg:pt-[5rem] lg:pb-[2rem ] mb-[3rem] lg:mb-[28.6rem]">
                        <section>
                            <h2 className="font-semibold text-[2.4rem] leading-[2.905rem] lg:text-[3.5rem] lg:leading-[4.841rem] mb-[1.2rem] lg:mb-[3rem]">Our Achievements in Numbers</h2>
                            <section className="lg:flex lg:gap-[2.4rem]">
                                <section className="border-t-white border-t-[0.023rem] lg:border-t pl-[0.4rem] lg:pl-[1.6rem] pt-[1.2rem] lg:py-[5rem] pb-[1.5rem] lg:w-[28.5rem]">
                                    <h2 className="font-semibold leading-[1.936rem] lg:text-[4rem] lg:leading-[4.841rem] lg:mb-[3rem] mb-[0.5rem]">5.6k</h2>
                                    <p className="leading-[1.936rem] lg:text-[2rem] lg:leading-[2.42rem]">Total amount of waste recycled</p>
                                </section>
                                <section className="border-t-white border-t-[0.023rem] lg:border-t pl-[0.4rem] lg:pl-[1.6rem] pt-[1.2rem] lg:py-[5rem] pb-[1.5rem] lg:w-[28.5rem]">
                                    <h2 className="font-semibold leading-[1.936rem] lg:text-[4rem] lg:leading-[4.841rem] lg:mb-[3rem] mb-[0.5rem]">1.1k</h2>
                                    <p className="leading-[1.936rem] lg:text-[2rem] lg:leading-[2.42rem]">Number of users registered</p>
                                </section>
                                <section className="border-t-white border-t-[0.023rem] lg:border-t pl-[0.4rem] lg:pl-[1.6rem] pt-[1.2rem] lg:py-[5rem] pb-[1.5rem] lg:w-[28.5rem]">
                                    <h2 className="font-semibold leading-[1.936rem] lg:text-[4rem] lg:leading-[4.841rem] lg:mb-[3rem] mb-[0.5rem]">100+</h2>
                                    <p className="leading-[1.936rem] lg:text-[2rem] lg:leading-[2.42rem]">Percentage of materials diverted from landfills</p>
                                </section>
                                <section className="border-t-white border-t-[0.023rem] lg:border-t pl-[0.4rem] lg:pl-[1.6rem] pt-[1.2rem] lg:py-[5rem] lg:w-[28.5rem]">
                                    <h2 className="font-semibold leading-[1.936rem] lg:text-[4rem] lg:leading-[4.841rem] lg:mb-[3rem] mb-[0.5rem]">1.1k+</h2>
                                    <p className="leading-[1.936rem] lg:text-[2rem] lg:leading-[2.42rem]">Total rewards earned by users</p>
                                </section>
                            </section>
                        </section>
                    </div>
                </main>
            </HelmetProvider>
    );
};

export default Home;