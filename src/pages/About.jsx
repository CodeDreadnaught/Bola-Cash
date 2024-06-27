import { useEffect, useContext } from "react";
import NavLoginContext from "../context/NavLoginContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import RecycleBackground from "../assets/images/landing-page-images/repeated-recycle-icon-background.png";
import HeroCurveImage from "../assets/images/about-page-images/hero-section-curve.svg";
import ChartImage from "../assets/images/about-page-images/chart-image.svg";
import GroupChartImage from "../assets/images/about-page-images/group-chat-image.svg";
import FirstCardImage from "../assets/images/landing-page-images/recycle-bottle-can.jpg";
import SecondCardImage from "../assets/images/landing-page-images/medal-image.jpg";
import ThirdCardImage from "../assets/images/landing-page-images/group-recycle-image.png";
import FourthCardImage from "../assets/images/about-page-images/recycling-center-locator-image.jpg";
import FifthCardImage from "../assets/images/about-page-images/personalized-profiles-image.png";
import SixthCardImage from "../assets/images/about-page-images/reporting-analytics-image.jpg";
import ServiceCards from "../components/ServiceCards";
import Objectives from "../components/Objectives";

const About = () => {
    const { setHeaderBg } = useContext(NavLoginContext);

    useEffect(() => {
        setHeaderBg("bg-[rgba(255,255,255,0.5)]");
    }, []);


    return (
        <HelmetProvider>
            <main>
                <Helmet>
                    <title>About | Bola Cash</title>
                </Helmet>
                <div className="about-hero-section center h-[32rem] lg:h-[130dvh] relative py-[5rem] px-[2.4rem] lg:px-[11.2rem] lg:pt-0">
                        <section className="w-[32.7m] lg:w-full text-center text-white lg:relative lg:bottom-[1.5rem]">
                            <h1 className="font-semibold text-[2.4rem] lg:text-[4.8rem] leading-[2.905rem] lg:leading-[5.809rem] mb-[0.312rem] lg:mb-[1.2rem]">About Us</h1>
                            <p className="lg:text-[3.2rem] leading-[1.936rem] lg:leading-[3.873rem] mb-[0.5rem] lg:mb-[2.4rem] font-medium">Empower Change: Transforming Tomorrow, Today!</p>
                            <p className="text-[1.2rem] lg:text-[2.4rem] leading-[1.8rem] lg:leading-[3.6rem]">Welcome to BolaCash! Since 2024, we've been on a mission to revolutionize recycling. Our platform connects eco-conscious individuals with resources to make a positive impact. Join us on this journey toward a cleaner, greener future!</p>
                        </section>
                    <section className=" absolute bottom-0 h-[5rem] lg:h-[18rem] w-full">
                        <img src={HeroCurveImage} alt="Hero Curve Image" className="size-full object-cover object-left-top" />
                    </section>
                </div>
                <div className="px-[2.4rem] lg:px-[11.2rem] pb-[5.7rem] lg:pb- lg:mt-[13.6rem]">
                    <div className="lg:flex lg:items-center gap-[5.5rem] lg:mb-[13.6rem]">
                        <section className="mb-[3rem] lg:mb-0 lg:w-[59.4rem]">
                        <h1 className="font-semibold text-[2.4rem] lg:text-[4.8rem] leading-[2.905rem] lg:leading-[5.809rem] mb-[1rem] lg:mb-[3.2rem]">Our Vision</h1>
                        <p className="lg:text-justify lg:text-[2.4rem] leading-[2.4rem] lg:leading-[3.6rem]">Our vision at BolaCash is a world where waste is minimized, resources are conserved, and every individual is empowered to make a positive impact on the environment. We strive to revolutionize recycling, inspiring global communities to embrace sustainability and build a cleaner, greener future together.</p>
                        </section>
                        <section className="w-full h-[22.5rem] lg:w-[56.7rem] lg:h-[39rem] mb-[3rem] lg:mb-0">
                            <img src={ChartImage} alt="Chart Image" className="size-full" />
                        </section>
                    </div>
                    <div className="lg:flex lg:items-center gap-[5.5rem]">
                        <section className="mb-[3rem] lg:mb-0 lg:w-[59.4rem] lg:order-2">
                            <h1 className="font-semibold text-[2.4rem] lg:text-[4.8rem] leading-[2.905rem] lg:leading-[5.809rem] mb-[1rem] lg:mb-[3.2rem]">Our Mission</h1>
                            <p className="lg:text-justify lg:text-[2.4rem] leading-[2.4rem] lg:leading-[3.6rem]">Our mission at Bola Cash is to empower individuals and communities to adopt sustainable practices and reduce waste. Through education and innovation, we aim to create a global community committed to environmental stewardship and a brighter future for our planet.</p>
                        </section>
                        <section className="w-full h-[22.5rem] lg:w-[56.7rem] lg:h-[39rem] lg:order-1">
                            <img src={GroupChartImage} alt="Chart Image" className="size-full" />
                        </section>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <img src={RecycleBackground} alt="Background Fading Image" className="hidden lg:block recycle-image top-0 absolute opacity-5 z-[-1] object-cover scale-[1.5] right-0" />
                    <div className="px-[2.4rem] py-[3rem] lg:px-[11.2rem] lg:py-[15rem] border-t border-[#228B22] mb-[3rem] lg:mb-[10.4rem]">
                        <div>
                            <h1 className="text-center font-semibold text-[2.4rem] lg:text-[4rem] leading-[2.905rem] lg:leading-[4.841rem] mb-[3rem] lg:mb-[4.6rem]">Our Services</h1>
                            <div className="flex flex-col gap-[3rem] lg:flex-row lg:gap-[2.4rem] mb-[3rem] lg:mb-[4.2rem]">
                            <ServiceCards image={FirstCardImage} title="Collection of Recyclables" description="Make a difference with every item recycled! Our collection of recyclables feature makes it easy to dispose of materials responsibly. Join us in keeping our planet clean and green. Start recycling today!" />
                            <ServiceCards image={SecondCardImage} title="Rewards" description="Earn rewards while you save the planet! Our rewards program allowes you to earn points for every item recycled. Start collecting rewards and make a positive impact on the environment today!" />
                            <ServiceCards image={ThirdCardImage} title="Recycling Tips/ Education" description="Eco-wisdom at your fingertips! Explore our recycling tips and education section for practical advice on reducing waste and recycling smarter. Join us in creating a greener tomorrow!" />
                        </div>
                        <div className="flex flex-col gap-[3rem] lg:flex-row lg:gap-[2.4rem]">
                            <ServiceCards image={FourthCardImage} title="Recycling Center Locator" description="Highlight the feature that allows users to easily find nearby recycling centers based on their location." />
                            <ServiceCards image={FifthCardImage} title="Personalized Profiles" description="Showcase the feature that enables users to create personalized profiles to track their recycling activities and earn rewards." />
                            <ServiceCards image={SixthCardImage} title="Reporting/Analytics" description="Mention if users have access to reporting tools or analytics features to monitor their environmental impact and track progress over time." />
                        </div>
                        </div>
                    </div>
                    <div className="px-[2.4rem] lg:px-[11.2rem] mb-[3rem] lg:mb-[28.8rem]">
                        <h1 className="font-semibold text-[2.4rem] lg:text-[4rem] leading-[2.905rem] lg:leading-[4.876rem] mb-[3rem] lg:mb-[3.2rem]">Objectives</h1>
                        <div className="flex flex-col gap-[3rem] lg:flex-row lg:flex-wrap lg:gap-x-[8.2rem] lg:gap-y-[1.6rem]">
                            <Objectives className="lg:order-1" heading="Increase Recycling Rates:" text="Encourage and incentivize users to recycle more by providing convenient access to recycling resources and rewards for their efforts." />
                            <Objectives className="lg:order-3" heading="Educate and Raise Awareness:" text="Provide comprehensive educational resources and tips to inform users about the importance of recycling and sustainable living practices." />
                            <Objectives className="lg:order-2" heading="Promote Eco-Friendly Behavior:" text="Inspire users to adopt eco-friendly habits in their daily lives, such as reducing waste, conserving resources, and choosing sustainable products." />
                            <Objectives className="lg:order-4" heading="Expand Recycling Infrastructure:" text="Inspire users to adopt eco-friendly habits in their daily lives, such as reducing waste, conserving resources, and choosing sustainable products." />
                            <Objectives className="lg:order-5" heading="Measure and Track Impact:" text="Inspire users to adopt eco-friendly habits in their daily lives, such as reducing waste, conserving resources, and choosing sustainable products." />
                            <Objectives className="lg:order-7" heading="Collaborate for Impact:" text="Collaborate with businesses, nonprofits, and government agencies to amplify the impact of recycling initiatives and promote collective action for environmental conservation." />
                            <Objectives className="lg:order-6" heading="Foster Community Engagement:" text="Build a vibrant online community where users can connect, share ideas, and support each other in their journey towards sustainability." />
                            <Objectives className="lg:order-8" heading="Continuous Improvement:" text="Regularly evaluate and enhance the features and functionality of the recycling system web application based on user feedback and evolving sustainability trends." />
                            <Objectives className="lg:order-9" heading="Advocate for Policy Change:" text="Advocate for policy changes at the local, national, and global levels to support recycling efforts, reduce waste, and promote environmental sustainability." />
                            <Objectives className="lg:order-10" heading="Empower Users:" text="Empower users to become advocates for recycling and sustainability in their communities by providing tools and resources to facilitate outreach and education." />
                        </div>
                    </div>
                </div>
            </main>
        </HelmetProvider>);
};

export default About;