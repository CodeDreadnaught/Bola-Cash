import { Helmet, HelmetProvider } from "react-helmet-async";

const About = () => {
    return (
        <HelmetProvider>
            <main>
                <Helmet>
                    <title>About | Bola Cash</title>
                </Helmet>
            </main>
        </HelmetProvider>);
};

export default About;